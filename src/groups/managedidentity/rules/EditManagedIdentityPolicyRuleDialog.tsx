import LoadingButton from '@mui/lab/LoadingButton';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useState } from 'react';
import { MutationError } from '../../../common/error';
import ManagedIdentityPolicyRuleForm from './ManagedIdentityPolicyRuleForm';

interface Props {
    inputRule: any;
    groupPath: string;
    submitInProgress?: boolean;
    error?: MutationError;
    onSubmit: (rule: any) => void;
    onClose: () => void;
}

function EditManagedIdentityPolicyRuleDialog(props: Props) {
    const { inputRule, groupPath, submitInProgress, error, onSubmit, onClose } = props

    const [rule, setRule] = useState<any>({ ...inputRule });

    return (
        <Dialog
            fullWidth
            maxWidth="sm"
            open>
            <DialogTitle>
                Edit Rule
            </DialogTitle>
            <DialogContent dividers>
                <ManagedIdentityPolicyRuleForm
                    editMode
                    groupPath={groupPath}
                    rule={rule}
                    onChange={setRule}
                    disabledRunStages={[]}
                    error={error}
                />
            </DialogContent>
            <DialogActions>
                <Button size="small" variant="outlined" onClick={onClose} color="inherit">Cancel</Button>
                <LoadingButton
                    loading={submitInProgress}
                    size="small"
                    variant="contained"
                    color="primary"
                    sx={{ marginLeft: 2 }}
                    onClick={() => onSubmit(rule)}>
                    Update Rule
                </LoadingButton>
            </DialogActions>
        </Dialog>
    );
}

export default EditManagedIdentityPolicyRuleDialog;
