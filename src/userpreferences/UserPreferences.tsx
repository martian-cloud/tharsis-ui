import { Box, Typography, Divider, styled } from '@mui/material';
import graphql from 'babel-plugin-relay/macro';
import { useFragment, PreloadedQuery, usePreloadedQuery } from 'react-relay/hooks';
import GlobalNotificationPreference from './GlobalNotificationPreference';
import { UserPreferencesQuery } from './__generated__/UserPreferencesQuery.graphql';
import { UserPreferencesFragment_preferences$key } from './__generated__/UserPreferencesFragment_preferences.graphql';

const StyledDivider = styled(
    Divider
)(() => ({
    margin: "24px 0"
}));

const query = graphql`
    query UserPreferencesQuery {
        ...UserPreferencesFragment_preferences
    }
`;

interface Props {
    queryRef: PreloadedQuery<UserPreferencesQuery>;
}

function UserPreferences({ queryRef }: Props) {
    const queryData = usePreloadedQuery<UserPreferencesQuery>(query, queryRef);

    const data = useFragment<UserPreferencesFragment_preferences$key>(
        graphql`
            fragment UserPreferencesFragment_preferences on Query {
                userPreferences {
                    globalPreferences {
                        ...GlobalNotificationPreferenceFragment_notificationPreference
                    }
                }
            }
        `,
        queryData
    );

    return (
        <Box maxWidth={1200} margin="auto" padding={2}>
            <Typography marginBottom={4} variant="h5" gutterBottom>Preferences</Typography>
                <StyledDivider />
                <GlobalNotificationPreference fragmentRef={data.userPreferences.globalPreferences} />
        </Box>
    );
}

export default UserPreferences;
