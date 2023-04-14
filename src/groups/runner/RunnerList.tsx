import { Box, List, Paper, Typography, useTheme } from "@mui/material";
import InfiniteScroll from 'react-infinite-scroll-component';
import ListSkeleton from '../../skeletons/ListSkeleton';
import graphql from 'babel-plugin-relay/macro';
import { useFragment, useLazyLoadQuery, usePaginationFragment } from "react-relay/hooks";
import NamespaceBreadcrumbs from "../../namespace/NamespaceBreadcrumbs";
import RunnerListItem from "./RunnerListItem";
import { RunnerListFragment_group$key } from "./__generated__/RunnerListFragment_group.graphql";
import { RunnerListPaginationQuery } from "./__generated__/RunnerListPaginationQuery.graphql";
import { RunnerListFragment_runners$key } from "./__generated__/RunnerListFragment_runners.graphql";
import { RunnerListQuery } from "./__generated__/RunnerListQuery.graphql";

const DESCRIPTION = 'Runner agents are responsible for launching Terraform jobs that deploy your infrastructure to the cloud.'
export const INITIAL_ITEM_COUNT = 100;

const query = graphql`
    query RunnerListQuery($first: Int, $last: Int, $after: String, $before: String, $groupPath: String!, $includeInherited: Boolean) {
        ...RunnerListFragment_runners
    }
`;

interface Props {
    fragmentRef: RunnerListFragment_group$key
}

function RunnerList({ fragmentRef }: Props) {
    const theme = useTheme();

    const group = useFragment<RunnerListFragment_group$key>(
        graphql`
        fragment RunnerListFragment_group on Group
        {
          fullPath
        }
    `, fragmentRef);

    const queryData = useLazyLoadQuery<RunnerListQuery>(query, { first: INITIAL_ITEM_COUNT, groupPath: group.fullPath, includeInherited: false });

    const { data, loadNext, hasNext } = usePaginationFragment<RunnerListPaginationQuery, RunnerListFragment_runners$key>(
        graphql`
      fragment RunnerListFragment_runners on Query
      @refetchable(queryName: "RunnerListPaginationQuery") {
        group(fullPath: $groupPath) {
            runners(
                after: $after
                before: $before
                first: $first
                last: $last
                includeInherited: $includeInherited
            ) @connection(key: "RunnerList_runners") {
                totalCount
                edges {
                    node {
                        id
                        ...RunnerListItemFragment_runner
                    }
                }
            }
        }
     }
    `, queryData);

    return (
        <Box>
            <NamespaceBreadcrumbs
                namespacePath={group.fullPath}
                childRoutes={[
                    { title: 'runner agents', path: 'runner_agents' }
                ]}
            />
            {data.group?.runners.edges?.length !== 0 && <Box>
                <Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginBottom: 2,
                        justifyContent: 'space-between',
                        [theme.breakpoints.down('md')]: {
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            '& > *': { marginBottom: 2 },
                        }
                    }}>
                        <Box>
                            <Typography variant="h5" gutterBottom>Runner Agents</Typography>
                            <Typography variant="body2">
                                {DESCRIPTION}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Paper sx={{ marginTop: 2, borderBottomLeftRadius: 0, borderBottomRightRadius: 0, border: `1px solid ${theme.palette.divider}` }}>
                    <Box padding={2} display="flex" alignItems="center" justifyContent="space-between">
                        <Typography variant="subtitle1">
                            {data.group?.runners.edges?.length} runner agent{data.group?.runners.edges?.length !== 1 && 's'}
                        </Typography>
                    </Box>
                </Paper>
                <InfiniteScroll
                    dataLength={data.group?.runners.edges?.length ?? 0}
                    next={() => loadNext(20)}
                    hasMore={hasNext}
                    loader={<ListSkeleton rowCount={3} />}
                >
                    <List disablePadding>
                        {data.group?.runners?.edges?.map((edge: any) => <RunnerListItem
                        key={edge.node.id}
                        fragmentRef={edge.node} />)}
                    </List>
                </InfiniteScroll>
            </Box>}
            {data.group?.runners.edges?.length === 0 && <Box sx={{ marginTop: 4 }} display="flex" justifyContent="center">
                <Box padding={4} display="flex" flexDirection="column" justifyContent="center" alignItems="center" sx={{ maxWidth: 600 }}>
                    <Typography variant="h6">This group does not have any runner agents</Typography>
                    <Typography color="textSecondary" align="center" sx={{ marginBottom: 2 }}>
                        {DESCRIPTION}
                    </Typography>
                </Box>
            </Box>}
        </Box>
    );
}

export default RunnerList
