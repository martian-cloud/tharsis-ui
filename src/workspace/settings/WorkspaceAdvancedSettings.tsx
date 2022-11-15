import React, { useState } from 'react'
import { Box, Button, Dialog, DialogActions, DialogTitle, DialogContent, Typography, Alert } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton';
import { GetConnections } from '../../groups/WorkspaceList'
import { useFragment, useMutation } from 'react-relay';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import graphql from 'babel-plugin-relay/macro'
import { WorkspaceAdvancedSettingsFragment_workspace$key } from './__generated__/WorkspaceAdvancedSettingsFragment_workspace.graphql'
import { WorkspaceAdvancedSettingsDeleteMutation } from './__generated__/WorkspaceAdvancedSettingsDeleteMutation.graphql'

interface ConfirmationDialogProps {
    deleteInProgress: boolean;
    onClose: (confirm?: boolean) => void
    name: string
    closeDialog: () => void
    open: boolean
}

interface Props {
    fragmentRef: WorkspaceAdvancedSettingsFragment_workspace$key
}

function DeleteConfirmationDialog(props: ConfirmationDialogProps) {
    const { deleteInProgress, onClose, name, closeDialog, open } = props;
    return (
        <Dialog
            keepMounted
            maxWidth="xs"
            open={open}
        >
            <DialogTitle>Delete Workspace</DialogTitle>
            <DialogContent dividers>
                Are you sure you want to delete workspace <strong>{name}</strong>?
            </DialogContent>
            <DialogActions>
                <Button color="inherit"
                    onClick={closeDialog}>
                    Cancel
                </Button>
                <LoadingButton color="error" loading={deleteInProgress} onClick={() => onClose(true)}>Delete</LoadingButton>
            </DialogActions>
        </Dialog>
    );
}

function WorkspaceAdvancedSettings(props: Props) {
    const [showDeleteConfirmationDialog, setShowDeleteConfirmationDialog] = useState<boolean>(false);

    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();

    const data = useFragment(
        graphql`
        fragment WorkspaceAdvancedSettingsFragment_workspace on Workspace
        {
            name
            fullPath
        }
    `, props.fragmentRef
    )

    const [commitDelete, commitDeleteInFlight] = useMutation<WorkspaceAdvancedSettingsDeleteMutation>(
        graphql`
        mutation WorkspaceAdvancedSettingsDeleteMutation($input: DeleteWorkspaceInput!, $connections: [ID!]!) {
            deleteWorkspace(input: $input){
                workspace {
                    id @deleteEdge(connections: $connections)
                }
                problems {
                    message
                    field
                    type
                }
            }
        }
    `)

    const onDeleteConfirmationDialogClosed = (confirm?: boolean) => {
        if (confirm) {
            commitDelete({
                variables: {
                    input: {
                        workspacePath: data.fullPath
                    },
                    connections: GetConnections(data.fullPath.substring(0, ((data.fullPath.length - data.name.length - 1))))
                },
                onCompleted: deleteData => {
                    setShowDeleteConfirmationDialog(false);

                    if (deleteData.deleteWorkspace.problems.length) {
                        enqueueSnackbar(deleteData.deleteWorkspace.problems.map(problem => problem.message).join('; '), { variant: 'warning' });
                    } else navigate(`../${data.fullPath.slice(0, -data.name.length - 1)}`);
                },
                onError: error => {
                    setShowDeleteConfirmationDialog(false);
                    enqueueSnackbar(`An unexpected error occurred: ${error.message}`, { variant: 'error' });
                }
            });
        } else {
            setShowDeleteConfirmationDialog(false)
        }
    };

    return (
        <Box>
            <Typography marginBottom={2} variant="h6" gutterBottom>Advanced Settings</Typography>
            <Alert sx={{ mb: 2 }} severity="error">Deleting a workspace is a permanent action that cannot be undone.</Alert>
            <Box>
                <Button variant="outlined" color="error" onClick={() => setShowDeleteConfirmationDialog(true)}>Delete Workspace</Button>
            </Box>
            <DeleteConfirmationDialog
                name={data.name}
                deleteInProgress={commitDeleteInFlight}
                onClose={onDeleteConfirmationDialogClosed}
                closeDialog={() => setShowDeleteConfirmationDialog(false)}
                open={showDeleteConfirmationDialog}
            />
        </Box>
    )
}

export default WorkspaceAdvancedSettings
