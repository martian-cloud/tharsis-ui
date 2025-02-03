import LockIcon from '@mui/icons-material/LockOutlined';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay/hooks';
import DataTableCell from '../../common/DataTableCell';
import Link from '../../routes/Link';
import { StateVersionInputVariableListItemFragment_variable$key } from './__generated__/StateVersionInputVariableListItemFragment_variable.graphql';
import { Chip } from '@mui/material';

interface Props {
    fragmentRef: StateVersionInputVariableListItemFragment_variable$key;
    showValues: boolean;
}

function StateVersionInputVariableListItem(props: Props) {
    const { showValues } = props;
    const data = useFragment<StateVersionInputVariableListItemFragment_variable$key>(
        graphql`
        fragment StateVersionInputVariableListItemFragment_variable on RunVariable
        {
            key
            value
            category
            namespacePath
            includedInTfConfig
        }
      `, props.fragmentRef);

    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <DataTableCell sx={{ wordBreak: 'break-all' }}>
                {data.key}
                {data.category === 'terraform' && data.includedInTfConfig === false && <Chip sx={{ ml: 1 }} color="warning" size="xs" label="Not used" />}
            </DataTableCell>
            <DataTableCell sx={{ wordBreak: 'break-all' }} mask={!showValues} >
                {data.value !== null ? data.value : <LockIcon color="disabled" />}
            </DataTableCell>
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

export default StateVersionInputVariableListItem;
