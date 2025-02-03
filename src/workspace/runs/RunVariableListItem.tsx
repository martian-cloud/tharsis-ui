import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay/hooks';
import Link from '../../routes/Link';
import LockIcon from '@mui/icons-material/LockOutlined';
import { RunVariableListItemFragment_variable$key } from './__generated__/RunVariableListItemFragment_variable.graphql';
import { Chip } from '@mui/material';

interface Props {
    fragmentRef: RunVariableListItemFragment_variable$key
    showValues: boolean
}

function RunVariableListItem(props: Props) {
    const { showValues } = props;
    const data = useFragment<RunVariableListItemFragment_variable$key>(
        graphql`
        fragment RunVariableListItemFragment_variable on RunVariable
        {
            key
            category
            value
            namespacePath
            includedInTfConfig
        }
      `, props.fragmentRef);

    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 }, height: 64 }}
        >
            <TableCell sx={{ fontWeight: 'bold', wordBreak: 'break-all' }}>
                {data.key}
                {data.category === 'terraform' && data.includedInTfConfig === false && <Chip sx={{ ml: 1 }} color="warning" size="xs" label="Not used" />}
            </TableCell>
            <TableCell sx={{ wordBreak: 'break-all' }}>
                {showValues ? (data.value !== null ? data.value : <LockIcon color="disabled" />) : '************'}
            </TableCell>
            <TableCell sx={{ wordBreak: 'break-all' }}>
                {data.namespacePath && <Link
                    to={`/groups/${data.namespacePath}/-/variables`}
                    color="inherit"
                    variant="body1"
                >
                    {data.namespacePath}
                </Link>}
                {!data.namespacePath && 'Run'}
            </TableCell>
        </TableRow>
    );
}

export default RunVariableListItem;
