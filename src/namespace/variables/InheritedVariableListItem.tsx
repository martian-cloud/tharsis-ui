import { Chip } from '@mui/material';
import LockIcon from '@mui/icons-material/LockOutlined';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { useFragment } from 'react-relay/hooks';
import Link from '../../routes/Link';
import { InheritedVariableListItemFragment_variable$key } from './__generated__/InheritedVariableListItemFragment_variable.graphql';

interface Props {
    fragmentRef: InheritedVariableListItemFragment_variable$key
    showValues: boolean
}

function InheritedVariableListItem(props: Props) {
    const { showValues } = props;
    const data = useFragment<InheritedVariableListItemFragment_variable$key>(
        graphql`
        fragment InheritedVariableListItemFragment_variable on NamespaceVariable
        {
            id
            key
            category
            hcl
            value
            namespacePath
        }
      `, props.fragmentRef);

    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 }, height: 64 }}
        >
            <TableCell sx={{ fontWeight: 'bold', wordBreak: 'break-all' }}>
                {data.key}
            </TableCell>
            <TableCell sx={{ wordBreak: 'break-all' }}>
                {showValues ? (data.value !== null ? data.value : <LockIcon color="disabled" />) : '************'}
            </TableCell>
            {data.category === 'terraform' && <TableCell>
                <Chip size="small" label={data.hcl ? 'HCL' : 'String'} />
            </TableCell>}
            <TableCell>
                <Link
                    to={`/groups/${data.namespacePath}/-/variables`}
                    color="inherit"
                    variant="body1"
                >
                    {data.namespacePath}
                </Link>
            </TableCell>
        </TableRow>
    );
}

export default InheritedVariableListItem;