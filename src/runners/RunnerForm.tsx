import { Alert, Box, Divider, FormControlLabel, Switch, TextField, Typography } from '@mui/material';
import { MutationError } from '../common/error';

export interface FormData {
    name: string
    description: string
    disabled: boolean
}

interface Props {
    data: FormData
    onChange: (data: FormData) => void
    editMode?: boolean
    error?: MutationError
}

function RunnerForm({ data, onChange, editMode, error }: Props) {

    return (
        <Box>
            {error && <Alert sx={{ mt: 2 }} severity={error.severity}>
                {error.message}
            </Alert>}
            <Typography sx={{ mt: 2 }} variant="subtitle1" gutterBottom>Details</Typography>
            <Divider light />
            <Box sx={{ mt: 2, mb: 2 }}>
                <TextField
                    disabled={editMode}
                    size="small"
                    fullWidth
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
            <Box sx={{ mb: 4 }}>
                    <Typography variant="subtitle1">Runner Status</Typography>
                    <FormControlLabel
                        control={<Switch
                            sx={{ m: 2 }}
                            checked={!data.disabled}
                            color="secondary"
                            onChange={event => onChange({ ...data, disabled: !event.target.checked })}
                        />}
                        label={data.disabled ? "Disabled" : "Enabled"}
                    />
                {!editMode && <Typography variant="subtitle2">
                    By default, the runner will be enabled when created. Check the switch to disable the runner. After the runner is created, it can be enabled and disabled as needed.
                </Typography>}
            </Box>
        </Box>
    );
}

export default RunnerForm
