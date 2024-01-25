import { Box, CircularProgress, Typography } from "@mui/material";
import graphql from 'babel-plugin-relay/macro';
import { Suspense, useEffect } from "react";
import { PreloadedQuery, useFragment, usePreloadedQuery, useQueryLoader } from "react-relay/hooks";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import AdminDetailsDrawer from "./AdminAreaDetailsDrawer";
import { AdminAreaEntryPointFragment_me$key } from "./__generated__/AdminAreaEntryPointFragment_me.graphql";
import { AdminAreaQuery } from "./__generated__/AdminAreaQuery.graphql";
import AdminAreaRunners from "./runners/AdminAreaRunners";

const query = graphql`
     query AdminAreaQuery {
        ...AdminAreaEntryPointFragment_me
     }
 `;

function AdminAreaEntryPoint() {
    const [queryRef, loadQuery] = useQueryLoader<AdminAreaQuery>(query);

    useEffect(() => {
        loadQuery({}, { fetchPolicy: 'store-and-network' })
    }, [loadQuery])

    return queryRef != null ? <AdminArea queryRef={queryRef} /> : null;
}

interface Props {
    queryRef: PreloadedQuery<AdminAreaQuery>;
}

function AdminArea({ queryRef }: Props) {
    const navigate = useNavigate();
    const location = useLocation();

    const queryData = usePreloadedQuery<AdminAreaQuery>(query, queryRef);

    const data = useFragment<AdminAreaEntryPointFragment_me$key>(
        graphql`
            fragment AdminAreaEntryPointFragment_me on Query {
                me {
                    ... on User {
                        admin
                    }
                }
            }`,
        queryData
    );

    useEffect(() => {
        if (location.pathname === '/admin') {
            navigate('runners', { replace: true })
        }
    }, [location]);

    return (
        data.me?.admin ?
            <Box display="flex">
                <AdminDetailsDrawer />
                <Box component="main" sx={{ flexGrow: 1 }}>
                    <Suspense fallback={<Box
                        sx={{
                            width: '100%',
                            height: `calc(100vh - 64px)`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <CircularProgress />
                    </Box>}>
                        <Box maxWidth={1200} margin="auto" padding={2}>
                            <Routes>
                                <Route index path={`runners/*`} element={<AdminAreaRunners />} />
                            </Routes>
                        </Box>
                    </Suspense>
                </Box>
            </Box>
            :
            <Box padding={4} display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center">
                <Typography variant="h6">You do not have access to the Admin Area</Typography>
                <Typography color="textSecondary">
                    Contact the system administrator for information about access
                </Typography>
            </Box>
    );
}

export default AdminAreaEntryPoint;
