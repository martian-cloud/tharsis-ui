import LoadingButton from '@mui/lab/LoadingButton';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useState } from 'react';
import { MutationError } from '../../../common/error';
import ManagedIdentityPolicyRuleForm from './ManagedIdentityPolicyRuleForm';

interface Props {
    groupPath: string;
    disabledRunStages: string[];
    submitInProgress?: boolean;
    error?: MutationError;
    onSubmit: (rule: any) => void;
    onClose: () => void;
}

function NewManagedIdentityPolicyRuleDialog(props: Props) {
    const { groupPath, disabledRunStages, submitInProgress, error, onSubmit, onClose } = props

    const [rule, setRule] = useState<any>({
        runStage: '',
        allowedUsers: [],
        allowedTeams: [],
        allowedServiceAccounts: []
    });

    return (
        <Dialog
            fullWidth
            maxWidth="sm"
            open>
            <DialogTitle>
                New Rule
            </DialogTitle>
            <DialogContent dividers>
                <ManagedIdentityPolicyRuleForm
                    groupPath={groupPath}
                    rule={rule}
                    onChange={setRule}
                    disabledRunStages={disabledRunStages}
                    error={error}
                />
            </DialogContent>
            <DialogActions>
                <Button size="small" variant="outlined" onClick={onClose} color="inherit">Cancel</Button>
                <LoadingButton
                    disabled={!rule.runStage}
                    loading={submitInProgress}
                    size="small"
                    variant="contained"
                    color="primary"
                    sx={{ marginLeft: 2 }}
                    onClick={() => onSubmit(rule)}>
                    Create Rule
                </LoadingButton>
            </DialogActions>
        </Dialog>
    )
}

export default NewManagedIdentityPolicyRuleDialog;
