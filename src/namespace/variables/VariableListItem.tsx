import DeleteIcon from '@mui/icons-material/CloseOutlined';
import EditIcon from '@mui/icons-material/EditOutlined';
import LockIcon from '@mui/icons-material/LockOutlined';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { useFragment } from 'react-relay/hooks';
import CopyButton from '../../common/CopyButton';
import DataTableCell from '../../common/DataTableCell';
import Link from '../../routes/Link';
import { VariableListItemFragment_variable$key } from './__generated__/VariableListItemFragment_variable.graphql';

interface Props {
    fragmentRef: VariableListItemFragment_variable$key;
    namespacePath: string;
    showValues: boolean;
    onEdit: (variable: any) => void;
    onDelete: (variable: any) => void;
}

function VariableListItem(props: Props) {
    const { onEdit, onDelete, namespacePath, showValues } = props;
    const data = useFragment<VariableListItemFragment_variable$key>(
        graphql`
        fragment VariableListItemFragment_variable on NamespaceVariable
        {
            id
            key
            category
            value
            namespacePath
            metadata {
                updatedAt
            }
        }
      `, props.fragmentRef);

    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 }, height: 64 }}
        >
            <DataTableCell sx={{ fontWeight: 'bold', wordBreak: 'break-all' }}>
                {data.key}
                <CopyButton
                    data={data.key}
                    toolTip="Copy key"
                />
            </DataTableCell>
            <DataTableCell sx={{ wordBreak: 'break-all' }}>
                {data.value === null && <LockIcon color="disabled" />}
                {data.value !== null && <React.Fragment>
                    {!showValues ? '********' : data.value}
                    {(data.value !== '' || !showValues) && <CopyButton
                        data={data.value}
                        toolTip="Copy value"
                    />}
                </React.Fragment>}
            </DataTableCell>
            <TableCell>
                {data.namespacePath === namespacePath ? 'Direct Variable' : <Link
                    to={`/groups/${data.namespacePath}/-/variables`}
                    color="inherit"
                    variant="body1"
                >
                    {data.namespacePath}
                </Link>}
            </TableCell>
            <TableCell align='right'>
                {data.value !== null && data.namespacePath === namespacePath && <Stack direction="row" spacing={1}>
                    <Button
                        onClick={() => onEdit(data)}
                        sx={{ minWidth: 40, padding: '2px' }}
                        size="small"
                        color="info"
                        variant="outlined">
                        <EditIcon />
                    </Button>
                    <Button
                        onClick={() => onDelete(data)}
                        sx={{ minWidth: 40, padding: '2px' }}
                        size="small"
                        color="info"
                        variant="outlined">
                        <DeleteIcon />
                    </Button>
                </Stack>}
            </TableCell>
        </TableRow>
    );
}

export default VariableListItem;
