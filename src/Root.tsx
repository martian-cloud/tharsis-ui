import { CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';
import React, { Suspense, useEffect } from 'react';
import ErrorBoundary from './ErrorBoundary';
import AppHeader from './nav/AppHeader';
import AppRoutes from './routes/AppRoutes';
import graphql from 'babel-plugin-relay/macro';
import { PreloadedQuery, usePreloadedQuery, useQueryLoader } from 'react-relay/hooks';
import { RootQuery } from './__generated__/RootQuery.graphql';
import { User, UserContext } from './UserContext';

const query = graphql`
    query RootQuery {
        me {
            ... on User {
                id
                username
                email
                admin
            }
        }
        ...AppHeaderFragment
    }
`;

function RootEntryPoint() {
    const [queryRef, loadQuery] = useQueryLoader<RootQuery>(query);

    useEffect(() => {
        loadQuery({}, { fetchPolicy: 'store-and-network' })
    }, [loadQuery]);

    return queryRef != null ? <Root queryRef={queryRef} /> : null;
}

interface Props {
    queryRef: PreloadedQuery<RootQuery>;
}

function Root({ queryRef }: Props) {
    const queryData = usePreloadedQuery<RootQuery>(query, queryRef);

    return (
        <React.Fragment>
            <UserContext.Provider value={queryData.me as User}>
                <AppHeader fragmentRef={queryData} />
                <Box marginTop="65px">
                    <ErrorBoundary>
                        <Suspense fallback={<Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100vh',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <CircularProgress />
                        </Box>}>
                            <AppRoutes />
                        </Suspense>
                    </ErrorBoundary>
                </Box>
            </UserContext.Provider>
        </React.Fragment>
    );
}

export default RootEntryPoint;
