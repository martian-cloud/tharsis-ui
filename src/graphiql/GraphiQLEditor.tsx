import { createGraphiQLFetcher, Fetcher } from '@graphiql/toolkit';
import { Box, Toolbar } from '@mui/material';
import GraphiQL from 'graphiql';
import 'graphiql/graphiql.css';
import AuthenticationService from '../auth/AuthenticationService';
import cfg from '../common/config';

interface Props {
    authService: AuthenticationService
}

const fetcher = (authService: AuthenticationService): Fetcher => createGraphiQLFetcher({
    url: `${cfg.apiUrl}/graphql`,
    fetch: (input: URL | RequestInfo, config?: RequestInit | undefined) => {
        return authService.getAccessToken().then(accessToken => {
            if (config) {
                config.headers = { ...config.headers, "Authorization": `bearer ${accessToken}` }
            }
            return fetch(input, config)
        });
    }
});

function GraphiQLEditor(props: Props) {
    const f = fetcher(props.authService);

    return (
        <Box sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Toolbar />
            <GraphiQL
                fetcher={f}
            />
        </Box>
    );
}

export default GraphiQLEditor
