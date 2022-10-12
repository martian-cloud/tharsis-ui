import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import graphql from 'babel-plugin-relay/macro';
import React, { useState } from 'react';
import { useFragment } from 'react-relay/hooks';
import SearchInput from '../../common/SearchInput';
import StateVersionInputVariableListItem from './StateVersionInputVariableListItem';
import { StateVersionInputVariablesFragment_variables$key } from './__generated__/StateVersionInputVariablesFragment_variables.graphql';

interface Props {
    fragmentRef: StateVersionInputVariablesFragment_variables$key
}

const variableSearchFilter = (search: string) => (variable: any) => {
    return variable.key.toLowerCase().includes(search);
};

function StateVersionInputVariables(props: Props) {
    const { fragmentRef } = props;

    const data = useFragment<StateVersionInputVariablesFragment_variables$key>(
        graphql`
        fragment StateVersionInputVariablesFragment_variables on Run
        {
            variables {
                key
                category
                namespacePath
                ...StateVersionInputVariableListItemFragment_variable
            }
        }
      `, fragmentRef);

    const [showValues, setShowValues] = useState(false);
    const [search, setSearch] = useState('');

    const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value.toLowerCase());
    };

    const variables = data.variables.filter((v: any) => v.category === 'terraform');
    const filteredVariables = search ? variables.filter(variableSearchFilter(search)) : variables;

    return (
        <Box>
            {variables.length > 0 && <Stack direction="row" spacing={2}>
                <SearchInput
                    fullWidth
                    placeholder="search for variables"
                    onChange={onSearchChange}
                />
                <Button
                    size="small"
                    color="info"
                    sx={{ width: 150 }}
                    onClick={() => setShowValues(!showValues)}
                >
                    {showValues ? 'Hide Values' : 'Show Values'}
                </Button>
            </Stack>}
            {(filteredVariables.length === 0 && search !== '') && <Typography sx={{ padding: 2, marginTop: 4 }} align="center" color="textSecondary">
                No variables matching search <strong>{search}</strong>
            </Typography>}
            {(filteredVariables.length === 0 && search === '') && <Paper variant="outlined" sx={{ marginTop: 4, display: 'flex', justifyContent: 'center' }}>
                <Box padding={4} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <Typography color="textSecondary" align="center">
                        This workspace does not have any input variables
                    </Typography>
                </Box>
            </Paper>}
            {filteredVariables.length > 0 && <TableContainer>
                <Table sx={{ tableLayout: 'fixed' }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography color="textSecondary">Key</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography color="textSecondary">Value</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography color="textSecondary">Type</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography color="textSecondary">Source</Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredVariables.map((v: any) => <StateVersionInputVariableListItem
                            key={v.key}
                            fragmentRef={v}
                            showValues={showValues}
                        />)}
                    </TableBody>
                </Table>
            </TableContainer>}
        </Box>
    );
}

export default StateVersionInputVariables;
