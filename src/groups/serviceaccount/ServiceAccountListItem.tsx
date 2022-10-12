import { Avatar, ListItem, ListItemText, Typography, useTheme } from '@mui/material';
import teal from '@mui/material/colors/teal';
import graphql from 'babel-plugin-relay/macro';
import moment from 'moment';
import { useFragment } from "react-relay/hooks";
import { Link as RouterLink } from 'react-router-dom';
import { ServiceAccountListItemFragment_serviceAccount$key } from './__generated__/ServiceAccountListItemFragment_serviceAccount.graphql';

interface Props {
    fragmentRef: ServiceAccountListItemFragment_serviceAccount$key
}

function ServiceAccountListItem(props: Props) {
    const theme = useTheme();

    const data = useFragment<ServiceAccountListItemFragment_serviceAccount$key>(graphql`
        fragment ServiceAccountListItemFragment_serviceAccount on ServiceAccount {
            metadata {
                updatedAt
            }
            id
            name
            description
            resourcePath
            group {
                name
                fullPath
            }
        }
    `, props.fragmentRef);

    return (
        <ListItem
            dense
            button
            component={RouterLink}
            to={`/groups/${data.group.fullPath}/-/service_accounts/${data.id}`}
            sx={{
                borderBottom: `1px solid ${theme.palette.divider}`,
                borderLeft: `1px solid ${theme.palette.divider}`,
                borderRight: `1px solid ${theme.palette.divider}`,
                '&:last-child': {
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 4
                }
            }}>
            <Avatar variant="rounded" sx={{ width: 32, height: 32, bgcolor: teal[200], marginRight: 2 }}>
                {data.name[0].toUpperCase()}
            </Avatar>
            <ListItemText primary={<Typography>{data.name}</Typography>} secondary={data.description} />
            <Typography variant="body2" color="textSecondary">
                {moment(data.metadata.updatedAt as moment.MomentInput).fromNow()}
            </Typography>
        </ListItem>
    );
}

export default ServiceAccountListItem;
