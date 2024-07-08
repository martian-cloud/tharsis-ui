import { useContext } from 'react';
import { createGraphiQLFetcher, Fetcher } from '@graphiql/toolkit';
import { Box, Toolbar } from '@mui/material';
import GraphiQL from 'graphiql';
import 'graphiql/graphiql.css';
import AuthenticationService from '../auth/AuthenticationService';
import AuthServiceContext from '../auth/AuthServiceContext';
import cfg from '../common/config';

const fetcher = (authService: AuthenticationService): Fetcher => createGraphiQLFetcher({
    url: `${cfg.apiUrl}/graphql`,
    fetch: (input: URL | RequestInfo, config?: RequestInit | undefined) => {
        return authService.getAccessToken().then(accessToken => {
            if (config) {
                config.headers = { ...config.headers, "Authorization": `bearer ${accessToken}` }
            }
            return fetch(input, config) // nosemgrep: nodejs_scan.javascript-ssrf-rule-node_ssrf
        });
    }
});

function GraphiQLEditor() {
    const authService = useContext<AuthenticationService>(AuthServiceContext)

    const f = fetcher(authService);

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
