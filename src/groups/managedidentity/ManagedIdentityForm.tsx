import { Button, Chip, Paper } from '@mui/material';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import { MutationError } from '../../common/error';
import PanelButton from '../../common/PanelButton';
import EditManagedIdentityRuleDialog from './rules/EditManagedIdentityRuleDialog';
import ManagedIdentityRulesList from './rules/ManagedIdentityRulesList';
import NewManagedIdentityRuleDialog from './rules/NewManagedIdentityRuleDialog';

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
    { name: 'azure_federated', title: 'Azure', description: 'Azure managed identity for assuming an Azure Service Principal using OIDC Federation' },
    { name: 'tharsis_federated', title: 'Tharsis', description: 'Tharsis managed identity for assuming a Tharsis Service Account using OIDC Federation' }
];

function ManagedIdentityForm({ groupPath, data, onChange, editMode, error }: Props) {
    const [ruleToEdit, setRuleToEdit] = useState<any>(null);
    const [showCreateNewRuleDialog, setShowCreateNewRuleDialog] = useState(false);

    const [hostToAdd, setHostToAdd] = useState('');

    const onAddHost = () => {
        const hosts = data.payload.hosts || [];

        onChange({
            ...data,
            payload: { ...data.payload, hosts: [...hosts, hostToAdd] }
        });
        setHostToAdd('');
    };

    const onDeleteHost = (host: any) => {
        const hostsCopy = [...data.payload.hosts];

        const hostIndex = hostsCopy.indexOf(host);
        if (hostIndex !== -1) {
            hostsCopy.splice(hostIndex, 1)
        }

        onChange({
            ...data,
            payload: { ...data.payload, hosts: hostsCopy }
        });
    };

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
            // Add id to rule to provide uniqueness
            rules: [...data.rules, { ...rule, id: nanoid() }]
        });
    };

    const onDeleteRule = (rule: any) => {
        const rulesCopy = [...data.rules];
        const index = rulesCopy.findIndex(item => item.id === rule.id);
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
        const index = rulesCopy.findIndex(item => item.id === rule.id);
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
                    {ManagedIdentityTypes.map(type => <PanelButton
                        key={type.name}
                        disabled={editMode}
                        selected={data.type === type.name}
                        onClick={() => onTypeChange(type.name)}
                    >
                        <Typography variant="subtitle1">{type.title}</Typography>
                        <Typography variant="caption" align="center">
                            {type.description}
                        </Typography>
                    </PanelButton>)}
                </Stack>
            </Box>
            <Typography variant="subtitle1" gutterBottom>Details</Typography>
            <Divider light />
            <Box marginTop={2} marginBottom={4}>
                <TextField autoComplete="off" disabled={editMode} size="small" fullWidth label="Name" value={data.name} onChange={event => onChange({ ...data, name: event.target.value })} />
                <TextField autoComplete="off" size="small" margin='normal' fullWidth label="Description" value={data.description} onChange={event => onChange({ ...data, description: event.target.value })} />
            </Box>
            {!editMode && <React.Fragment>
                <Box display="flex" justifyContent="space-between" alignItems="flex-end">
                    <Typography variant="subtitle1" gutterBottom>Access Rules</Typography>
                    <Button
                        sx={{ marginBottom: 1 }}
                        size="small"
                        color="secondary"
                        variant="outlined"
                        onClick={() => setShowCreateNewRuleDialog(true)}>
                        Add Access Rule
                    </Button>
                </Box>
                <Divider light />

                <Box marginTop={2} marginBottom={4}>
                    <Typography color="textSecondary" gutterBottom>
                        Access rules determine which principals are allowed to use this managed identity for a particular run stage
                    </Typography>
                    {data.rules.length > 0 && <ManagedIdentityRulesList
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
                    <TextField
                        size="small"
                        margin='normal'
                        fullWidth
                        label="IAM Role"
                        value={data.payload.role} onChange={event => onPayloadFieldChange('role', event.target.value)}
                    />
                </Box>}
                {data.type === 'azure_federated' && <Box marginTop={2}>
                    <TextField
                        size="small"
                        fullWidth
                        label="Client ID"
                        value={data.payload.clientId}
                        onChange={event => onPayloadFieldChange('clientId', event.target.value)}
                    />
                    <TextField
                        size="small"
                        margin='normal'
                        fullWidth
                        label="Tenant ID"
                        value={data.payload.tenantId}
                        onChange={event => onPayloadFieldChange('tenantId', event.target.value)}
                    />
                </Box>}
                {data.type === 'tharsis_federated' && <Box marginTop={2}>
                    <TextField
                        autoComplete="off"
                        size="small"
                        fullWidth
                        label="Service Account"
                        placeholder="group-path/service-account-name"
                        value={data.payload.serviceAccountPath}
                        onChange={event => onPayloadFieldChange('serviceAccountPath', event.target.value)}
                    />
                    <Typography color="textSecondary" variant="caption" mt={1}>
                        Specify the full resource path for the service account that this managed identity will assume. The resource path
                        consists of the group path for the service account and the service account name.
                    </Typography>
                    <Box mb={3} sx={{ marginTop: 2 }}>
                        <Typography sx={{ mt: 2 }} variant="subtitle1" gutterBottom>Hosts</Typography>
                        <Divider sx={{ mb: 2, opacity: 0.6 }} />
                        <Paper sx={{ padding: 2, mb: 2 }} variant="outlined">
                            <Typography gutterBottom color="textSecondary">
                                Hosts are optional and are not necessary when using the Tharsis Terraform provider. If a host is specified, Tharsis will use the managed identity's service account to authenticate with the specified host.
                            </Typography>
                            <Paper sx={{ padding: 2, display: 'flex', alignItems: 'center', mb: 2 }}>
                                <TextField
                                    size="small"
                                    margin="none"
                                    sx={{ flex: 1, mr: 1 }}
                                    fullWidth
                                    value={hostToAdd}
                                    placeholder="Enter host to add"
                                    variant="standard"
                                    color="secondary"
                                    onChange={event => setHostToAdd(event.target.value)}
                                />
                                <Button
                                    onClick={onAddHost}
                                    disabled={hostToAdd === ''}
                                    variant="outlined"
                                    color="secondary">
                                    Add Host
                                </Button>
                            </Paper>
                            <Stack direction="row" spacing={2} useFlexGap sx={{ flexWrap: 'wrap' }}>
                                {data.payload.hosts?.map((host: any) => <Chip key={host} color="secondary" label={host} onDelete={() => onDeleteHost(host)} />)}
                            </Stack>
                        </Paper>
                    </Box>
                </Box>}
            </Box>}
            {ruleToEdit && <EditManagedIdentityRuleDialog
                inputRule={ruleToEdit}
                groupPath={groupPath}
                onSubmit={onEditRule}
                onClose={() => setRuleToEdit(null)}
            />}
            {showCreateNewRuleDialog && <NewManagedIdentityRuleDialog
                groupPath={groupPath}
                onSubmit={onCreateRule}
                onClose={() => setShowCreateNewRuleDialog(false)}
            />}
        </Box>
    );
}

export default ManagedIdentityForm
