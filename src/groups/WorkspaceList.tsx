import { Box } from '@mui/material';
import List from '@mui/material/List';
import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ConnectionHandler, useLazyLoadQuery, usePaginationFragment } from "react-relay/hooks";
import ListSkeleton from '../skeletons/ListSkeleton';
import WorkspaceListItem from './WorkspaceListItem';
import { WorkspaceListFragment_workspaces$key } from './__generated__/WorkspaceListFragment_workspaces.graphql';
import { WorkspaceListPaginationQuery } from './__generated__/WorkspaceListPaginationQuery.graphql';
import { WorkspaceListQuery } from './__generated__/WorkspaceListQuery.graphql';

interface Props {
    groupPath: string
}

export function GetConnections(groupPath: string): [string] {
    const connectionId = ConnectionHandler.getConnectionID(
        "root",
        "GroupDetails_workspaces",
        { groupPath: groupPath, sort: 'FULL_PATH_ASC' }
    );
    return [connectionId];
}

function WorkspaceList(props: Props) {
    const { groupPath } = props;

    const queryData = useLazyLoadQuery<WorkspaceListQuery>(graphql`
        query WorkspaceListQuery($first: Int, $last: Int, $after: String, $before: String, $fullPath: String!) {
            ...WorkspaceListFragment_workspaces
        }
    `, { first: 100, fullPath: groupPath }, { fetchPolicy: 'store-and-network' });

    const { data, loadNext, hasNext } = usePaginationFragment<WorkspaceListPaginationQuery, WorkspaceListFragment_workspaces$key>(
        graphql`
      fragment WorkspaceListFragment_workspaces on Query
      @refetchable(queryName: "WorkspaceListPaginationQuery") {
        workspaces(
            after: $after
            before: $before
            first: $first
            last: $last
            groupPath: $fullPath
            sort:FULL_PATH_ASC
        ) @connection(key: "GroupDetails_workspaces") {
            totalCount
            edges {
                node {
                    id
                    ...WorkspaceListItemFragment_workspace
                }
            }
        }
      }
    `, queryData);

    const edgeCount = (data.workspaces.edges?.length ?? 0) - 1

    return (
        <Box>
            <InfiniteScroll
                dataLength={data.workspaces.edges?.length ?? 0}
                next={() => loadNext(100)}
                hasMore={hasNext}
                loader={<ListSkeleton rowCount={3} />}
            >
                <List disablePadding>
                    {data.workspaces.edges?.map((edge: any, index: number) => <WorkspaceListItem key={edge.node.id} workspaceKey={edge.node} last={index === edgeCount} />)}
                </List>
            </InfiniteScroll>
        </Box>
    )
}

export default WorkspaceList
