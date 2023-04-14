import { Box, List, Paper, Typography, useTheme } from '@mui/material';
import graphql from 'babel-plugin-relay/macro';
import { usePaginationFragment } from 'react-relay';
import InfiniteScroll from 'react-infinite-scroll-component';
import ListSkeleton from '../../skeletons/ListSkeleton';
import ServiceAccountListItem from '../serviceaccount/ServiceAccountListItem';
import { AssignedServiceAccountListPaginationQuery } from './__generated__/AssignedServiceAccountListPaginationQuery.graphql';
import { AssignedServiceAccountListFragment_assignedServiceAccounts$key } from './__generated__/AssignedServiceAccountListFragment_assignedServiceAccounts.graphql';

interface Props {
    fragmentRef: AssignedServiceAccountListFragment_assignedServiceAccounts$key | null
}

function AssignedServiceAccountList({ fragmentRef }: Props) {
    const theme = useTheme();

    const { data, loadNext, hasNext } = usePaginationFragment<AssignedServiceAccountListPaginationQuery, AssignedServiceAccountListFragment_assignedServiceAccounts$key> (
        graphql`
      fragment AssignedServiceAccountListFragment_assignedServiceAccounts on Runner
      @refetchable(queryName: "AssignedServiceAccountListPaginationQuery") {
            assignedServiceAccounts(
                first: $first
                after: $after
            ) @connection(key: "AssignedServiceAccountList_assignedServiceAccounts") {
            totalCount
            edges {
                node {
                    id
                    ...ServiceAccountListItemFragment_serviceAccount
                }
            }
        }
    }
    `, fragmentRef);

    return (
        <Box sx={{ border: 1, borderTop: 0, borderBottomLeftRadius: 4, borderBottomRightRadius: 4, borderColor: 'divider' }}>
            <Box sx={{ padding: 2, pb: 0 }}>
                <Typography color="textSecondary">Service accounts are used to authenticate with the Tharsis API, which allow a runner agent to interact with Tharsis.</Typography>
            </Box>
            {data?.assignedServiceAccounts.totalCount === 0 ? <Paper sx={{ p: 2, m: 2 }}>
                <Typography>No service accounts are assigned to this runner agent</Typography>
            </Paper>
            :
            <Box sx={{ p: 2 }}>
                <Paper sx={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0, border: `1px solid ${theme.palette.divider}` }}>
                    <Box padding={2}>
                        <Typography variant="subtitle1">
                            {data?.assignedServiceAccounts.totalCount} assigned service account{data?.assignedServiceAccounts.totalCount !== 1 && 's'}
                        </Typography>
                    </Box>
                </Paper>
                <InfiniteScroll
                    dataLength={(data?.assignedServiceAccounts.edges && data?.assignedServiceAccounts.edges.length) ?? 0}
                    next={() => loadNext(20)}
                    hasMore={hasNext}
                    loader={<ListSkeleton rowCount={3} />}
                >
                    <List disablePadding>{data?.assignedServiceAccounts.edges?.map((edge: any) => <ServiceAccountListItem
                        key={edge.node.id}
                        fragmentRef={edge.node}
                    />)}
                    </List>
                </InfiniteScroll>
            </Box>
            }
        </Box>
    );
}

export default AssignedServiceAccountList
