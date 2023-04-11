import { Alert, Box, TextField, Typography } from "@mui/material";
import { FormData } from "./NewManagedIdentityAliasDialog";
import { MutationError } from "../../../common/error";

interface Props {
    data: FormData
    onChange: (data: FormData) => void
    error?: MutationError
}

function ManagedIdentityAliasForm({ data, onChange, error }: Props) {
    return (
        <Box display="flex" flexDirection="column">
            {error && <Alert sx={{ marginBottom: 2 }} severity={error.severity}>
                {error.message}
            </Alert>}
            <TextField
                autoComplete="off"
                size="small"
                label="Name"
                margin="dense"
                value={data.name}
                onChange={event => onChange({ ...data, name: event.target.value })}
            />
            <Typography sx={{ mb: 2 }} variant="subtitle2">Enter name of alias</Typography>
            <TextField
                autoComplete="off"
                size="small"
                label="Group path"
                margin="dense"
                value={data.groupPath}
                onChange={event => onChange({ ...data, groupPath: event.target.value })}
            />
            <Typography sx={{ mb: 2 }} variant="subtitle2">Enter group path where alias will be created</Typography>
        </Box>
    );
}

export default ManagedIdentityAliasForm
