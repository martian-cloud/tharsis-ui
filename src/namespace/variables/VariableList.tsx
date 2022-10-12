import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import React from 'react';
import VariableListItem from './VariableListItem';

interface Props {
    variables: any[]
    namespacePath: string
    showValues: boolean
    variableCategory: string
    onEditVariable: (variable: any) => void
    onDeleteVariable: (variable: any) => void
}

function VariableList(props: Props) {
    const { variables, namespacePath, showValues, variableCategory, onEditVariable, onDeleteVariable } = props;

    return (
        <TableContainer>
            <Table sx={{ tableLayout: 'fixed' }}>
                <colgroup>
                    <Box component="col" />
                    <Box component="col" />
                    {variableCategory === 'terraform' && <Box component="col" />}
                    <Box component="col" />
                    <Box component="col" sx={{ width: '150px' }} />
                </colgroup>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Typography color="textSecondary">Key</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography color="textSecondary">Value</Typography>
                        </TableCell>
                        {variableCategory === 'terraform' && <TableCell>
                            <Typography color="textSecondary">Type</Typography>
                        </TableCell>}
                        <TableCell>
                            <Typography color="textSecondary">Source</Typography>
                        </TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {variables.map((v: any) => <VariableListItem
                        key={v.id}
                        fragmentRef={v}
                        namespacePath={namespacePath}
                        showValues={showValues}
                        onEdit={onEditVariable}
                        onDelete={onDeleteVariable}
                    />)}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default VariableList;