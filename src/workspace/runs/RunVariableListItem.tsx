import { Chip } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { useFragment } from 'react-relay/hooks';
import Link from '../../routes/Link';
import LockIcon from '@mui/icons-material/LockOutlined';
import { RunVariableListItemFragment_variable$key } from './__generated__/RunVariableListItemFragment_variable.graphql';

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