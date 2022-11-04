import { Divider, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import graphql from 'babel-plugin-relay/macro';
import { PreloadedQuery, usePaginationFragment, usePreloadedQuery } from 'react-relay';
import ActivityEventList from '../activity/ActivityEventList';
import { HomeActivityFragment_activity$key } from './__generated__/HomeActivityFragment_activity.graphql';
import { HomeQuery } from './__generated__/HomeQuery.graphql';

const query = graphql`
    query HomeQuery($first: Int, $last: Int, $after: String, $before: String) {
      ...HomeActivityFragment_activity
    }
`;

interface Props {
    queryRef: PreloadedQuery<HomeQuery>;
}

function Home(props: Props) {
    const queryData = usePreloadedQuery<HomeQuery>(query, props.queryRef);

    const { data, loadNext, hasNext } = usePaginationFragment<HomeQuery, HomeActivityFragment_activity$key>(
        graphql`
      fragment HomeActivityFragment_activity on Query
      @refetchable(queryName: "HomeActivityPaginationQuery") {
        activityEvents(
            after: $after
            before: $before
            first: $first
            last: $last
            sort: CREATED_DESC
        ) @connection(key: "HomeActivity_activityEvents") {
            edges {
                node {
                    id
                }
            }
            ...ActivityEventListFragment_connection
        }
      }
    `, queryData);

    const eventCount = data.activityEvents?.edges?.length || 0;

    return (
        <Box maxWidth={1200} margin="auto" padding={2} flex={1}>
            {eventCount > 0 && <Box>
                <Typography variant="h6" mb={1} fontWeight={600}>Activity</Typography>
                <Divider light />
                <ActivityEventList fragmentRef={data.activityEvents} loadNext={loadNext} hasNext={hasNext} />
            </Box>}
            {eventCount === 0 && <Box sx={{ marginTop: 4 }} display="flex" justifyContent="center">
                <Box padding={4} display="flex" flexDirection="column" justifyContent="center" alignItems="center" sx={{ maxWidth: 600 }}>
                    <Typography variant="h6">Welcome to Tharsis!</Typography>
                    <Typography color="textSecondary" align="center" sx={{ marginBottom: 2 }}>
                        Get started using Tharsis to manage your Terraform deployments
                    </Typography>
                </Box>
            </Box>}
        </Box>
    );
}

export default Home;
