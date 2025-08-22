import { Environment, Network, Observable, RecordSource, RequestParameters, Store, Variables } from 'relay-runtime';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import AuthenticationService from './auth/AuthenticationService';
import cfg from './common/config';

const KEEP_ALIVE_INTERVAL = 60 * 1000; // 1 minute

const environment = (fetchGraphQL: (query: string, variables?: object) => Promise<any>, authService: AuthenticationService) => {
    const subscriptionClient = new SubscriptionClient(`${cfg.wsUrl}/graphql`, {
        reconnect: true,
        lazy: true, // connect only when the first subscription is created
        timeout: KEEP_ALIVE_INTERVAL * 2, // The max time to wait for a keep alive response from the server
    });

    subscriptionClient.onError(() => {
        // A subscription connection error will be triggered when the session has expired or if the websocket
        // connection has expired. To handle the case where the session has expired, we try to refresh the session token.
        authService.refreshSession().catch(err => {
            console.error('Failed to refresh session token for graphql subscription:', err);
        });
    });

    const subscribe = (request: RequestParameters, variables: Variables) => {
        const subscribeObservable = subscriptionClient.request({
            query: request.text as string,
            operationName: request.name,
            variables,
        });
        // Important: Convert subscriptions-transport-ws observable type to Relay's
        return Observable.from(subscribeObservable as any);
    };

    setInterval(() => {
        if (subscriptionClient.status === 1) {
            subscriptionClient.client.send('{"type":"ka"}');
        }
    }, KEEP_ALIVE_INTERVAL);

    return new Environment({
        network: Network.create(
            async (params: any, variables) => {
                return fetchGraphQL(params.text, variables);
            },
            subscribe),
        store: new Store(new RecordSource()),
    });
}

export default environment
