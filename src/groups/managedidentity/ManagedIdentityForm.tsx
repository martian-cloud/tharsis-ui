import { styled } from '@mui/material';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { darken } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React from 'react';
import { MutationError } from '../../common/error';

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
}

interface Props {
    data: FormData
    onChange: (data: FormData) => void
    editMode?: boolean
    error?: MutationError
}

const ManagedIdentityTypes = [
    { name: 'aws_federated', title: 'AWS', description: 'AWS managed identity for assuming an IAM role using OIDC Federation' },
    { name: 'azure_federated', title: 'Azure', description: 'Azure managed identity for assuming an Azure Service Principal using OIDC Federation' }
];

function ManagedIdentityForm({ data, onChange, editMode, error }: Props) {
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

    return (
        <Box>
            {error && <Alert sx={{ marginTop: 2 }} severity={error.severity}>
                {error.message}
            </Alert>}
            <Box marginTop={4} marginBottom={2}>
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
            <Box marginTop={2} marginBottom={2}>
                <TextField disabled={editMode} size="small" fullWidth label="Name" value={data.name} onChange={event => onChange({ ...data, name: event.target.value })} />
                <TextField size="small" margin='normal' fullWidth label="Description" value={data.description} onChange={event => onChange({ ...data, description: event.target.value })} />
            </Box>
            {!!data.type && <Box>
                <Typography variant="subtitle1" gutterBottom>Provider Configuration</Typography>
                <Divider light />
                {data.type === 'aws_federated' && <Box marginTop={2} marginBottom={4}>
                    <TextField size="small" margin='normal' fullWidth label="IAM Role" value={data.payload.role} onChange={event => onPayloadFieldChange('role', event.target.value)} />
                </Box>}
                {data.type === 'azure_federated' && <Box marginTop={2} marginBottom={4}>
                    <TextField size="small" fullWidth label="Client ID" value={data.payload.clientId} onChange={event => onPayloadFieldChange('clientId', event.target.value)} />
                    <TextField size="small" margin='normal' fullWidth label="Tenant ID" value={data.payload.tenantId} onChange={event => onPayloadFieldChange('tenantId', event.target.value)} />
                </Box>}
            </Box>}
        </Box>
    );
}

export default ManagedIdentityForm