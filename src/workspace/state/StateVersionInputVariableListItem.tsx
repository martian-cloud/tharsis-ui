import LockIcon from '@mui/icons-material/LockOutlined';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { useFragment } from 'react-relay/hooks';
import DataTableCell from '../../common/DataTableCell';
import SensitiveVariableValue from '../../namespace/variables/SensitiveVariableValue';
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
            sensitive
            versionId
            includedInTfConfig
        }
      `, props.fragmentRef);

    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <DataTableCell sx={{ wordBreak: 'break-all' }}>
                {data.key}
                {data.sensitive && <Chip sx={{ ml: 1 }} color="warning" size="xs" label="Sensitive" />}
                {data.category === 'terraform' && data.includedInTfConfig === false && <Chip sx={{ ml: 1 }} color="warning" size="xs" label="Not used" />}
            </DataTableCell>
            <DataTableCell sx={{ wordBreak: 'break-all' }} mask={!showValues} >
                {!showValues && '********'}
                {showValues && <>
                    {data.value === null && !data.sensitive && <LockIcon color="disabled" />}
                    {data.value !== null && !data.sensitive && <React.Fragment>
                        {data.value}
                    </React.Fragment>}
                    {data.sensitive && <SensitiveVariableValue variableVersionId={data.versionId as string} />}
                </>}
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
