import { Box } from '@mui/material';
import List from '@mui/material/List';
import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ConnectionHandler, useLazyLoadQuery, usePaginationFragment } from "react-relay/hooks";
import ListSkeleton from '../skeletons/ListSkeleton';
import GroupListItem from './GroupListItem';
import { GroupListFragment_groups$key } from './__generated__/GroupListFragment_groups.graphql';
import { GroupListPaginationQuery } from './__generated__/GroupListPaginationQuery.graphql';
import { GroupListQuery } from './__generated__/GroupListQuery.graphql';

interface Props {
    groupPath: string
}

export function GetConnections(parentPath: any): [any] {
    const connectionId = ConnectionHandler.getConnectionID(
        "root",
        'GroupList_groups',
        { parentPath, sort: "FULL_PATH_ASC"}
    );
    return [connectionId];
}

function GroupsList(props: Props) {
    const { groupPath } = props;

    const queryData = useLazyLoadQuery<GroupListQuery>(graphql`
        query GroupListQuery($first: Int, $last: Int, $after: String, $before: String, $fullPath: String!) {
            ...GroupListFragment_groups
        }
    `, { first: 100, fullPath: groupPath }, { fetchPolicy: 'store-and-network' });

    const { data, loadNext, hasNext } = usePaginationFragment<GroupListPaginationQuery, GroupListFragment_groups$key>(
        graphql`
      fragment GroupListFragment_groups on Query
      @refetchable(queryName: "GroupListPaginationQuery") {
        groups(
            after: $after
            before: $before
            first: $first
            last: $last
            parentPath: $fullPath
            sort:FULL_PATH_ASC
        ) @connection(key: "GroupList_groups") {
            totalCount
            edges {
                node {
                    id
                    ...GroupListItemFragment_group
                }
            }
        }
      }
    `, queryData);

    const edgeCount = (data.groups.edges?.length ?? 0) - 1

    return (
        <Box>
            <InfiniteScroll
                dataLength={data.groups.edges?.length ?? 0}
                next={() => loadNext(100)}
                hasMore={hasNext}
                loader={<ListSkeleton rowCount={3} />}
            >
                <List disablePadding>
                    {data.groups.edges?.map((edge: any, index: number) => <GroupListItem key={edge.node.id} groupKey={edge.node} last={index === edgeCount} />)}
                </List>
            </InfiniteScroll>
        </Box>
    );
}

export default GroupsList
