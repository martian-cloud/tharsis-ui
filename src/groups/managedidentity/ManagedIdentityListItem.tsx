import { Box, ListItem, ListItemText, Typography, useTheme } from '@mui/material';
import graphql from 'babel-plugin-relay/macro';
import moment from 'moment';
import React from 'react';
import { useFragment } from "react-relay/hooks";
import { Link as RouterLink } from 'react-router-dom';
import ManagedIdentityTypeChip from './ManagedIdentityTypeChip';
import { ManagedIdentityListItemFragment_managedIdentity$key } from './__generated__/ManagedIdentityListItemFragment_managedIdentity.graphql';

interface Props {
    fragmentRef: ManagedIdentityListItemFragment_managedIdentity$key
}

function ManagedIdentityListItem(props: Props) {
    const theme = useTheme();

    const data = useFragment<ManagedIdentityListItemFragment_managedIdentity$key>(graphql`
        fragment ManagedIdentityListItemFragment_managedIdentity on ManagedIdentity {
            metadata {
                updatedAt
            }
            id
            name
            description
            type
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
            to={`/groups/${data.group.fullPath}/-/managed_identities/${data.id}`}
            sx={{
                borderBottom: `1px solid ${theme.palette.divider}`,
                borderLeft: `1px solid ${theme.palette.divider}`,
                borderRight: `1px solid ${theme.palette.divider}`,
                '&:last-child': {
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 4
                }
            }}>
            <ListItemText primary={<Box display="flex" marginBottom={1}>
                <Typography sx={{ marginRight: 1 }}>{data.name}</Typography>
                <ManagedIdentityTypeChip type={data.type} />
            </Box>} secondary={data.description} />
            <Typography variant="body2" color="textSecondary">
                {moment(data.metadata.updatedAt as moment.MomentInput).fromNow()}
            </Typography>
        </ListItem>
    )
}

export default ManagedIdentityListItem
