import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import graphql from 'babel-plugin-relay/macro';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useLazyLoadQuery, usePaginationFragment } from 'react-relay';
import ListSkeleton from '../../skeletons/ListSkeleton';
import StateVersionListItem from './StateVersionListItem';
import { StateVersionListFragment_stateVersions$key } from './__generated__/StateVersionListFragment_stateVersions.graphql';
import { StateVersionListPaginationQuery } from './__generated__/StateVersionListPaginationQuery.graphql';
import { StateVersionListQuery } from './__generated__/StateVersionListQuery.graphql';

interface Props {
    workspacePath: string
}

function StateVersionList(props: Props) {
    const { workspacePath } = props;

    const queryData = useLazyLoadQuery<StateVersionListQuery>(graphql`
        query StateVersionListQuery($first: Int, $last: Int, $after: String, $before: String, $fullPath: String! ) {
            ...StateVersionListFragment_stateVersions
        }
        `, { first: 100, fullPath: workspacePath }, { fetchPolicy: 'network-only' })

    const { data, loadNext, hasNext } = usePaginationFragment<StateVersionListPaginationQuery, StateVersionListFragment_stateVersions$key>(
        graphql`
        fragment StateVersionListFragment_stateVersions on Query
        @refetchable(queryName: "StateVersionListPaginationQuery") {
            workspace(fullPath: $fullPath) {
                stateVersions(
                after: $after
                before: $before
                first: $first
                last: $last
                sort: UPDATED_AT_ASC
            ) @connection(key: "StateVersionList_stateVersions") {
                edges {
                    node {
                        id
                        ...StateVersionListItemFragment_stateVersion
                    }
                }
            }
        }
    }
    `, queryData)

    return (
        <Box>
            {data.workspace?.stateVersions.edges && data.workspace?.stateVersions.edges.length > 0 && <InfiniteScroll
                dataLength={data.workspace?.stateVersions.edges?.length ?? 0}
                next={() => loadNext(20)}
                hasMore={hasNext}
                loader={<ListSkeleton rowCount={3} />}
            >
                <TableContainer>
                    <Table sx={{ minWidth: 650 }} aria-label="workspace state versions">
                        <TableHead>
                            <TableRow>
                                <TableCell>State Version ID</TableCell>
                                <TableCell>Run ID</TableCell>
                                <TableCell>Created At</TableCell>
                                <TableCell>Created By</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.workspace.stateVersions.edges.map((edge: any) => (
                                <StateVersionListItem key={edge.node.id} stateVersionKey={edge.node} workspacePath={workspacePath} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </InfiniteScroll>}
            {data.workspace?.stateVersions.edges?.length === 0 && <Paper variant="outlined" sx={{ marginTop: 4, display: 'flex', justifyContent: 'center' }}>
                <Box padding={4} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <Typography variant="h6" color="textSecondary" align="center">No state versions have been created in this workspace</Typography>
                </Box>
            </Paper>}
        </Box>
    );
}

export default StateVersionList
