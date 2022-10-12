import DeleteIcon from '@mui/icons-material/Delete';
import { Box, IconButton, ListItem, ListItemIcon, Tooltip, Typography, useTheme } from '@mui/material';
import graphql from 'babel-plugin-relay/macro';
import { KeyVariant as KeyIcon } from 'mdi-material-ui';
import moment from 'moment';
import { useFragment } from "react-relay/hooks";
import Gravatar from '../../common/Gravatar';
import { GPGKeyListItemFragment_key$key } from './__generated__/GPGKeyListItemFragment_key.graphql';

interface Props {
    fragmentRef: GPGKeyListItemFragment_key$key
    onDelete: () => void;
}

function GPGKeyListItem(props: Props) {
    const { onDelete, fragmentRef } = props;
    const theme = useTheme();

    const data = useFragment<GPGKeyListItemFragment_key$key>(graphql`
        fragment GPGKeyListItemFragment_key on GPGKey {
            metadata {
                createdAt
            }
            id
            gpgKeyId
        	fingerprint
            createdBy
        }
    `, fragmentRef);

    return (
        <ListItem
            sx={{
                borderBottom: `1px solid ${theme.palette.divider}`,
                borderLeft: `1px solid ${theme.palette.divider}`,
                borderRight: `1px solid ${theme.palette.divider}`,
                '&:last-child': {
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 4
                }
            }}
            secondaryAction={<IconButton onClick={onDelete}>
                <DeleteIcon />
            </IconButton>}
        >
            <ListItemIcon sx={{ minWidth: 40 }}>
                <KeyIcon color="disabled" />
            </ListItemIcon>
            <Box sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'row',
            }}>
                <Box>
                    <Typography>
                        <Typography color="textSecondary" component="span">Key ID: </Typography>{data.gpgKeyId}
                    </Typography>
                    <Typography noWrap={false} gutterBottom sx={{
                        [theme.breakpoints.down('md')]: {
                            display: 'none'
                        }
                    }}>
                        <Typography color="textSecondary" component="span">Fingerprint: </Typography>{data.fingerprint}
                    </Typography>
                    <Box display="flex" alignItems="center">
                        <Typography variant="body2" color="textSecondary">
                            Added {moment(data.metadata.createdAt as moment.MomentInput).fromNow()} by
                        </Typography>
                        <Tooltip title={data.createdBy}>
                            <Box>
                                <Gravatar width={16} height={16} sx={{ marginLeft: 1, marginRight: 1 }} email={data.createdBy} />
                            </Box>
                        </Tooltip>
                    </Box>
                </Box>
            </Box>
        </ListItem>
    );
}

export default GPGKeyListItem;
