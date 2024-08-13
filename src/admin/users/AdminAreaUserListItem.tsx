import { Box, TableCell, TableRow, Typography, Chip } from '@mui/material';
import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay/hooks';
import Gravatar from '../../common/Gravatar';
import RelativeTimestamp from '../../common/RelativeTimestamp';
import { AdminAreaUserListItemFragment_user$key } from './__generated__/AdminAreaUserListItemFragment_user.graphql';

interface Props {
    fragmentRef: AdminAreaUserListItemFragment_user$key
}

function AdminAreaUserListItem({ fragmentRef }: Props) {

    const data = useFragment<AdminAreaUserListItemFragment_user$key>(graphql`
        fragment AdminAreaUserListItemFragment_user on User {
            metadata {
                createdAt
            }
            id
            username
            email
            admin
            active
            scimExternalId
        }
    `, fragmentRef);

    return (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell>
                <Box display="flex" alignItems="center">
                    <Gravatar width={24} height={24} email={data.email} />
                    <Box ml={2}>
                        <Box display="flex" alignItems="center">
                            <Typography fontWeight={500}>{data.username}</Typography>
                            {data.admin && <Box><Chip sx={{ ml: 1 }} color="secondary" size="xs" label="Admin" /></Box>}
                        </Box>
                        <Typography color="textSecondary" variant="body2">{data.email}</Typography>
                    </Box>
                </Box>
            </TableCell>
            <TableCell>
                {data.scimExternalId ? 'Yes' : 'No'}
            </TableCell>
            <TableCell>
                <RelativeTimestamp variant="body2" timestamp={data.metadata.createdAt} />
            </TableCell>
        </TableRow>
    );
}

export default AdminAreaUserListItem
