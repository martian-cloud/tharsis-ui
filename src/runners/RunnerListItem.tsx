import { Box, TableCell, TableRow, Tooltip } from '@mui/material';
import { useFragment } from 'react-relay/hooks';
import graphql from 'babel-plugin-relay/macro';
import moment from 'moment';
import Link from '../routes/Link';
import Gravatar from '../common/Gravatar';
import RunnerChip from './RunnerChip';
import { RunnerListItemFragment_runner$key } from './__generated__/RunnerListItemFragment_runner.graphql';

interface Props {
    fragmentRef: RunnerListItemFragment_runner$key
}

function RunnerListItem({ fragmentRef }: Props) {

    const data = useFragment<RunnerListItemFragment_runner$key>(graphql`
        fragment RunnerListItemFragment_runner on Runner {
            metadata {
                createdAt
            }
            id
            name
            disabled
            createdBy
        }
    `, fragmentRef);

    return (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell>
                <Link color="inherit" to={data.id}>{data.name}</Link>
            </TableCell>
            <TableCell>
                <RunnerChip disabled={data.disabled} />
            </TableCell>
            <TableCell>
                <Tooltip title={data.createdBy}>
                    <Box display="flex" alignItems="center">
                        <Gravatar width={24} height={24} email={data.createdBy} />
                        <Box ml={1}>
                            {moment(data.metadata.createdAt as moment.MomentInput).fromNow()}
                        </Box>
                    </Box>
                </Tooltip>
            </TableCell>
        </TableRow >
    );
}

export default RunnerListItem
