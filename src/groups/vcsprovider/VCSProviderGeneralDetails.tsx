import { Box, Divider, FormControlLabel, Stack, styled, Switch, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { darken } from '@mui/material/styles';
import { FormData } from './VCSProviderForm'
import VCSProviderTypeChip from './VCSProviderTypeChip';

interface Props {
    editMode?: boolean
    data: FormData
    onChange: (data: FormData) => void
}

interface VCSProviderTypeButtonProps {
    selected?: boolean
    disabled?: boolean
}

interface VCSProviderTypesObj {
    name: 'github' | 'gitlab'
    title: string
}

const VCSProviderTypeButton = styled(
    'div',
    { shouldForwardProp: (prop) => !['selected', 'disabled'].includes(prop.toString()) }
)<VCSProviderTypeButtonProps>(({ theme, selected, disabled }) => ({
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

const VCSProviderTypes: VCSProviderTypesObj[] = [
    { name: 'github', title: 'GitHub' },
    { name: 'gitlab', title: 'GitLab' }
];

function VCSProviderGeneralDetails({ editMode, data, onChange }: Props) {
    const [defaultHostName, setDefaultHostName] = useState<string>('Hostname')

    const onTypeChange = (type: 'github' | 'gitlab') => {
        if (!editMode && (data.type !== type)) {
            onChange({
                ...data,
                type, name: '', description: '', hostname: '', oAuthClientId: '', oAuthClientSecret: '', autoCreateWebhooks: true
            });
        }
        type === 'github' ? setDefaultHostName('api.github.com') : setDefaultHostName('gitlab.com')
    }

    return (
        <Box>
            <Typography variant="subtitle1" gutterBottom>VCS Provider</Typography>
            {!editMode && <Typography sx={{ mb: 2 }} variant="subtitle2" color="textSecondary">Select a VCS Provider type. Tharsis supports the following VCS providers:</Typography>}
            <Divider light />
            <Stack marginTop={2} marginBottom={2} direction="row" spacing={2}>
                {VCSProviderTypes.map(type => <VCSProviderTypeButton
                    key={type.name}
                    disabled={editMode}
                    selected={data.type === type.name}
                    onClick={() => onTypeChange(type.name)}
                >
                <VCSProviderTypeChip type={type.name}/>
                <Typography variant="subtitle1">{type.title}</Typography>
                </VCSProviderTypeButton>)}
            </Stack>
            <Typography sx={{ mt: 2 }} variant="subtitle1" gutterBottom>Provider Details</Typography>
            {!editMode && <Typography sx={{ mb: 2 }} variant="subtitle2" color="textSecondary">Choose a unique name as a group can have multiple instances of a VCS provider.</Typography>}
            <Divider light />
            <Box marginTop={2} marginBottom={2}>
                <TextField
                    disabled={editMode}
                    size="small" fullWidth
                    label="Name"
                    value={data.name}
                    onChange={event => onChange({ ...data, name: event.target.value })}
                />
                <TextField
                    size="small"
                    margin='normal'
                    fullWidth
                    label="Description"
                    value={data.description}
                    onChange={event => onChange({ ...data, description: event.target.value })}
                />
            </Box>
            <Typography sx={{ mt: 2 }} variant="subtitle1" gutterBottom>Hostname &#x28;optional&#x29;</Typography>
            {!editMode && <Typography sx={{ mb: 2 }} variant="subtitle2" color="textSecondary">You may enter a hostname. If no hostname is entered, Tharsis will use the selected provider type's publicly available hostname.</Typography>}
            <Divider light />
            <Box marginTop={2} marginBottom={2}>
                <TextField
                    disabled={editMode}
                    size="small" fullWidth
                    placeholder={defaultHostName}
                    value={data.hostname}
                    onChange={event => onChange({ ...data, hostname: event.target.value })}
                />
            </Box>
            <Typography sx={{ mt: 2 }} variant="subtitle1" gutterBottom>Automatically create webhooks?</Typography>
            <Typography sx={{ mb: 2 }} variant="subtitle2" color="textSecondary">Webhooks allow runs to be made automatically in response to new commits to a branch.</Typography>
            <Divider light />
            <Box marginTop={2} marginBottom={2}>
                <FormControlLabel
                    disabled={editMode}
                    label={data.autoCreateWebhooks ? "Yes" : "No"}
                    control={
                        <Switch sx={{ m: 1 }}
                            checked={data.autoCreateWebhooks}
                            color="secondary"
                            onChange={event => onChange({ ...data, autoCreateWebhooks: event.target.checked })}
                        />
                    }
                />
            </Box>
            <Divider light/>
        </Box>
    )
}

export default VCSProviderGeneralDetails