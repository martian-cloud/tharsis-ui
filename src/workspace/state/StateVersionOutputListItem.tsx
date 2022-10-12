import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { useFragment } from 'react-relay/hooks';
import { StateVersionOutputListItemFragment_output$key } from './__generated__/StateVersionOutputListItemFragment_output.graphql';

interface Props {
    fragmentRef: StateVersionOutputListItemFragment_output$key
    showValues: boolean
}

function StateVersionOutputListItem(props: Props) {
    const { fragmentRef, showValues } = props;
    const data = useFragment<StateVersionOutputListItemFragment_output$key>(
        graphql`
        fragment StateVersionOutputListItemFragment_output on StateVersionOutput
        {
            name
            value
            type
            sensitive
        }
      `, fragmentRef);

    const value = data.type === '"string"' ? data.value.slice(1, -1) : data.value

    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell sx={{ wordBreak: 'break-all' }}>
                {data.name}
            </TableCell>
            <TableCell sx={{ wordBreak: 'break-all' }}>
            {showValues ? value : data.sensitive ? '************' : value}
            </TableCell>
        </TableRow>
    );
}

export default StateVersionOutputListItem;
