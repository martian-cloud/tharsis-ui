import { Box, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import graphql from 'babel-plugin-relay/macro';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useLazyLoadQuery, usePaginationFragment } from "react-relay/hooks";
import { ConnectionHandler } from 'relay-runtime';
import ListSkeleton from '../../skeletons/ListSkeleton';
import RunListItem from './RunListItem';
import { RunListFragment_runs$key } from './__generated__/RunListFragment_runs.graphql';
import { RunListPaginationQuery } from './__generated__/RunListPaginationQuery.graphql';
import { RunListQuery } from './__generated__/RunListQuery.graphql';

interface Props {
  workspaceId: string
  workspacePath: string
}

export function GetConnections(workspaceId: string): [string] {
  const connectionId = ConnectionHandler.getConnectionID(
    "root",
    'RunList_runs',
    { workspaceId, sort: 'CREATED_AT_DESC' }
  );
  return [connectionId];
}

function RunList(props: Props) {
  const { workspacePath } = props;

  const queryData = useLazyLoadQuery<RunListQuery>(graphql`
        query RunListQuery($first: Int, $last: Int, $after: String, $before: String, $workspaceId: String) {
            ...RunListFragment_runs
        }
    `, { first: 50, workspaceId: props.workspaceId }, { fetchPolicy: 'network-only' })

  const { data, loadNext, hasNext } = usePaginationFragment<RunListPaginationQuery, RunListFragment_runs$key>(
    graphql`
      fragment RunListFragment_runs on Query
      @refetchable(queryName: "RunListPaginationQuery") {
        runs(
            after: $after
            before: $before
            first: $first
            last: $last
            workspaceId: $workspaceId
            sort: CREATED_AT_DESC
        ) @connection(key: "RunList_runs") {
            totalCount
            edges {
                node {
                    id
                    ...RunListItemFragment_run
                }
            }
        }
      }
    `, queryData);

  return (
    <Box>
      {data.runs.edges && data.runs.edges.length > 0 && <InfiniteScroll
        dataLength={data.runs.edges?.length ?? 0}
        next={() => loadNext(20)}
        hasMore={hasNext}
        loader={<ListSkeleton rowCount={3} />}
      >
        <TableContainer>
          <Table sx={{ minWidth: 650, tableLayout: 'fixed' }} aria-label="workspace runs">
            <colgroup>
              <Box component="col" sx={{ width: '15%' }} />
              <Box component="col" sx={{ width: '15%' }} />
              <Box component="col" sx={{ width: '20%' }} />
              <Box component="col" sx={{ width: '25%' }} />
              <Box component="col" sx={{ width: '25%' }} />
            </colgroup>

            <TableHead>
              <TableRow>
                <TableCell>Status</TableCell>
                <TableCell>Run ID</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Triggerer</TableCell>
                <TableCell>Stages</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.runs.edges?.map((edge: any) => (
                <RunListItem key={edge.node.id} runKey={edge.node} workspacePath={workspacePath} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </InfiniteScroll>}
      {data.runs.edges?.length === 0 && <Paper variant="outlined" sx={{ marginTop: 4, display: 'flex', justifyContent: 'center' }}>
        <Box padding={4} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Typography variant="h6" color="textSecondary" align="center">
            No runs have been created in this workspace
          </Typography>
        </Box>
      </Paper>}
    </Box>
  );
}

export default RunList;
