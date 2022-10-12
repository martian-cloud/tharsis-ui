import { Avatar, Box, Stack, Typography } from '@mui/material';
import teal from '@mui/material/colors/teal';
import Link from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
import { useTheme } from '@mui/material/styles';
import graphql from 'babel-plugin-relay/macro';
import moment from 'moment';
import { useFragment } from "react-relay/hooks";
import { Link as LinkRouter } from 'react-router-dom';
import { WorkspaceSearchListItemFragment_workspace$key } from './__generated__/WorkspaceSearchListItemFragment_workspace.graphql';

interface Props {
    workspaceKey: WorkspaceSearchListItemFragment_workspace$key
}

function WorkspaceSearchListItem(props: Props) {
    const theme = useTheme();

    const data = useFragment<WorkspaceSearchListItemFragment_workspace$key>(graphql`
        fragment WorkspaceSearchListItemFragment_workspace on Workspace {
            metadata {
                updatedAt
            }
            id
            name
            description
            fullPath
        }
    `, props.workspaceKey);

    return (
        <ListItem
            button
            component={LinkRouter}
            to={`/groups/${data.fullPath}`}
            sx={{
                borderBottom: `1px solid ${theme.palette.divider}`,
                borderLeft: `1px solid ${theme.palette.divider}`,
                borderRight: `1px solid ${theme.palette.divider}`,
                '&:last-child': {
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 4
                }
            }}
        >
            <Box flex={1} display="flex" alignItems="center">
                <Avatar sx={{ width: 32, height: 32, marginRight: 2, bgcolor: teal[200] }} variant="rounded">{data.name[0].toUpperCase()}</Avatar>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    [theme.breakpoints.down('md')]: {
                        '& > *:nth-of-type(2)': {
                            marginTop: 0.5
                        }
                    },
                    [theme.breakpoints.up('md')]: {
                        flexGrow: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }
                }}>
                    <Box>
                        <Link
                            component="div"
                            underline="hover"
                            variant="body1"
                            color="textPrimary"
                            sx={{ fontWeight: "500" }}
                        >
                            {data.fullPath}
                        </Link>
                        <Typography variant="body2" color="textSecondary">{data.description}</Typography>
                    </Box>
                    <Stack direction="row" spacing={1}>
                        <Typography variant="body2" color="textSecondary">{moment(data.metadata.updatedAt as moment.MomentInput).fromNow()}</Typography>
                    </Stack>
                </Box>
            </Box>
        </ListItem>
    );
}

export default WorkspaceSearchListItem
