import { Avatar, ListItem, ListItemText, Typography, useTheme } from '@mui/material'
import teal from '@mui/material/colors/teal';
import graphql from 'babel-plugin-relay/macro';
import moment from 'moment';
import { useFragment } from 'react-relay'
import { Link as RouterLink } from 'react-router-dom';
import { VCSProviderListItemFragment_vcsProvider$key } from './__generated__/VCSProviderListItemFragment_vcsProvider.graphql'

interface Props {
    fragmentRef: VCSProviderListItemFragment_vcsProvider$key
}

function VCSProviderListItem(props: Props) {
    const theme = useTheme();

    const data = useFragment<VCSProviderListItemFragment_vcsProvider$key>(
        graphql`
        fragment VCSProviderListItemFragment_vcsProvider on VCSProvider {
            metadata {
                updatedAt
            }
            id
            name
            description
            group {
                name
                fullPath
            }
        }
    `, props.fragmentRef)

    return (
        <ListItem
            dense
            button
            component={RouterLink}
            to={`/groups/${data.group.fullPath}/-/vcs_providers/${data.id}`}
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
    )
}

export default VCSProviderListItem
