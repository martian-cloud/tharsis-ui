import { Button, styled } from '@mui/material';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { darken } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { MutationError } from '../../common/error';
import EditManagedIdentityPolicyRuleDialog from './rules/EditManagedIdentityPolicyRuleDialog';
import ManagedIdentityPolicyRulesList from './rules/ManagedIdentityPolicyRulesList';
import NewManagedIdentityPolicyRuleDialog from './rules/NewManagedIdentityPolicyRuleDialog';

interface ManagedIdentityTypeButtonProps {
    selected?: boolean
    disabled?: boolean
}

const ManagedIdentityTypeButton = styled(
    'div',
    { shouldForwardProp: (prop) => !['selected', 'disabled'].includes(prop.toString()) }
)<ManagedIdentityTypeButtonProps>(({ theme, selected, disabled }) => ({
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: 4,
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: 300,
    ...(selected && {
        borderColor: theme.palette.primary.main,
        backgroundColor: darken(theme.palette.primary.main, 0.8)
    }),
    ...(!disabled && {
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: darken(theme.palette.primary.main, 0.8)
        },
    })
}));

export interface FormData {
    type: string
    name: string
    description: string
    payload: any
    rules: any[]
}

interface Props {
    groupPath: string
    data: FormData
    onChange: (data: FormData) => void
    editMode?: boolean
    error?: MutationError
}

const ManagedIdentityTypes = [
    { name: 'aws_federated', title: 'AWS', description: 'AWS managed identity for assuming an IAM role using OIDC Federation' },
    { name: 'azure_federated', title: 'Azure', description: 'Azure managed identity for assuming an Azure Service Principal using OIDC Federation' }
];

function ManagedIdentityForm({ groupPath, data, onChange, editMode, error }: Props) {
    const [ruleToEdit, setRuleToEdit] = useState<any>(null);
    const [showCreateNewRuleDialog, setShowCreateNewRuleDialog] = useState(false);

    const onTypeChange = (type: string) => {
        if (!editMode) {
            onChange({
                ...data,
                type,
                payload: type === 'aws_federated' ? { role: '' } : { clientId: '', tenantId: '' }
            });
        }
    };

    const onPayloadFieldChange = (field: string, val: string) => {
        onChange({
            ...data,
            payload: { ...data.payload, [field]: val }
        });
    };

    const onCreateRule = (rule: any) => {
        setShowCreateNewRuleDialog(false);
        onChange({
            ...data,
            rules: [...data.rules, rule]
        });
    };

    const onDeleteRule = (rule: any) => {
        const rulesCopy = [...data.rules];
        const index = rulesCopy.findIndex(item => item.runStage === rule.runStage);
        if (index !== -1) {
            rulesCopy.splice(index, 1);
            onChange({
                ...data,
                rules: rulesCopy
            });
        }
    };

    const onEditRule = (rule: any) => {
        setRuleToEdit(null);

        const rulesCopy = [...data.rules];
        const index = rulesCopy.findIndex(item => item.runStage === rule.runStage);
        if (index !== -1) {
            rulesCopy[index] = rule;
            onChange({
                ...data,
                rules: rulesCopy
            });
        }
    };

    return (
        <Box>
            {error && <Alert sx={{ marginTop: 2 }} severity={error.severity}>
                {error.message}
            </Alert>}
            <Box marginTop={4} marginBottom={4}>
                <Typography variant="subtitle1" gutterBottom>Select Type</Typography>
                <Divider light />
                <Stack marginTop={2} direction="row" spacing={2}>
                    {ManagedIdentityTypes.map(type => <ManagedIdentityTypeButton
                        key={type.name}
                        disabled={editMode}
                        selected={data.type === type.name}
                        onClick={() => onTypeChange(type.name)}
                    >
                        <Typography variant="subtitle1">{type.title}</Typography>
                        <Typography variant="caption" align="center">
                            {type.description}
                        </Typography>
                    </ManagedIdentityTypeButton>)}
                </Stack>
            </Box>
            <Typography variant="subtitle1" gutterBottom>Details</Typography>
            <Divider light />
            <Box marginTop={2} marginBottom={4}>
                <TextField disabled={editMode} size="small" fullWidth label="Name" value={data.name} onChange={event => onChange({ ...data, name: event.target.value })} />
                <TextField size="small" margin='normal' fullWidth label="Description" value={data.description} onChange={event => onChange({ ...data, description: event.target.value })} />
            </Box>
            {!editMode && <React.Fragment>
                <Box display="flex" justifyContent="space-between" alignItems="flex-end">
                    <Typography variant="subtitle1" gutterBottom>Access Rules</Typography>
                    {data.rules.length !== 2 && <Button
                        sx={{ marginBottom: 1 }}
                        size="small"
                        color="secondary"
                        variant="outlined"
                        onClick={() => setShowCreateNewRuleDialog(true)}>
                        Add Access Rule
                    </Button>}
                </Box>
                <Divider light />

                <Box marginTop={2} marginBottom={4}>
                    <Typography color="textSecondary" gutterBottom>
                        Access rules determine which principals are allowed to use this managed identity for a particular run stage
                    </Typography>
                    {data.rules.length > 0 && <ManagedIdentityPolicyRulesList
                        accessRules={data.rules}
                        onEdit={setRuleToEdit}
                        onDelete={onDeleteRule}
                    />}
                </Box>
            </React.Fragment>}
            {!!data.type && <Box>
                <Typography variant="subtitle1" gutterBottom>Provider Configuration</Typography>
                <Divider light />
                {data.type === 'aws_federated' && <Box>
                    <TextField size="small" margin='normal' fullWidth label="IAM Role" value={data.payload.role} onChange={event => onPayloadFieldChange('role', event.target.value)} />
                </Box>}
                {data.type === 'azure_federated' && <Box marginTop={2}>
                    <TextField size="small" fullWidth label="Client ID" value={data.payload.clientId} onChange={event => onPayloadFieldChange('clientId', event.target.value)} />
                    <TextField size="small" margin='normal' fullWidth label="Tenant ID" value={data.payload.tenantId} onChange={event => onPayloadFieldChange('tenantId', event.target.value)} />
                </Box>}
            </Box>}
            {ruleToEdit && <EditManagedIdentityPolicyRuleDialog
                inputRule={ruleToEdit}
                groupPath={groupPath}
                onSubmit={onEditRule}
                onClose={() => setRuleToEdit(null)}
            />}
            {showCreateNewRuleDialog && <NewManagedIdentityPolicyRuleDialog
                groupPath={groupPath}
                disabledRunStages={data.rules.map(rule => rule.runStage)}
                onSubmit={onCreateRule}
                onClose={() => setShowCreateNewRuleDialog(false)}
            />}
        </Box>
    );
}

export default ManagedIdentityForm
