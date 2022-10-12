import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { ConnectionHandler, PreloadedQuery, usePaginationFragment, usePreloadedQuery } from 'react-relay/hooks';
import GroupsList from './GroupTree';
import { GroupTreeContainerFragment_groups$key } from './__generated__/GroupTreeContainerFragment_groups.graphql';
import { GroupsPaginationQuery } from './__generated__/GroupsPaginationQuery.graphql';
import { Box, Button, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'
import { GroupTreeContainerQuery } from './__generated__/GroupTreeContainerQuery.graphql';

export const INITIAL_ITEM_COUNT = 100;

const query = graphql`
    query GroupTreeContainerQuery($first: Int, $last: Int, $after: String, $before: String) {
      ...GroupTreeContainerFragment_groups
    }
`;

interface Props {
    queryRef: PreloadedQuery<GroupTreeContainerQuery>;
}

export function GetConnections() {
    const connectionId = ConnectionHandler.getConnectionID(
        "root",
        "GroupTreeContainer_groups",
        { sort: "FULL_PATH_ASC" }
    );
    return [connectionId]
}

function GroupTreeContainer(props: Props) {
    const queryData = usePreloadedQuery<GroupTreeContainerQuery>(query, props.queryRef);

    const { data, loadNext, hasNext, isLoadingNext } = usePaginationFragment<GroupsPaginationQuery, GroupTreeContainerFragment_groups$key>(
        graphql`
        fragment GroupTreeContainerFragment_groups on Query
        @refetchable(queryName: "GroupsPaginationQuery") {
            groups(
                after: $after
                before: $before
                first: $first
                last: $last
                sort:FULL_PATH_ASC
            ) @connection(key: "GroupTreeContainer_groups") {
                edges {
                    node {
                        id
                    }
                }
                ...GroupTreeFragment_connection
            }
        }
    `, queryData);

    return (
        <Box maxWidth={1200} margin="auto" padding={2}>
            {data.groups.edges && data.groups.edges.length > 0 && <Box>
                <Box display="flex" justifyContent="space-between">
                    <Box marginBottom={2}>
                        <Typography variant="h5">Groups</Typography>
                    </Box>
                    <Box>
                        <Button component={RouterLink} variant="outlined" color="primary" to={`/groups/-/new`}>New Group</Button>
                    </Box>
                </Box>
                <GroupsList connectionKey={data.groups} loadNext={loadNext} hasNext={hasNext} isLoadingNext={isLoadingNext} />
            </Box>}
            {(!data.groups.edges || data.groups.edges.length === 0) && <Box sx={{ marginTop: 4 }} display="flex" justifyContent="center">
                <Box padding={4} display="flex" flexDirection="column" justifyContent="center" alignItems="center" sx={{ maxWidth: 600 }}>
                    <Typography variant="h6">You're not a member of any groups</Typography>
                    <Typography color="textSecondary" align="center" sx={{ marginBottom: 2 }}>
                        To get started you can request access to an existing group or contact the system administrator to create a new group
                    </Typography>
                </Box>
            </Box>}
        </Box>
    );
}

export default GroupTreeContainer;
