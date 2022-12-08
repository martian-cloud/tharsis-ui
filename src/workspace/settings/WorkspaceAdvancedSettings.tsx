import React, { useState } from 'react'
import { Box, Button, Dialog, DialogActions, DialogTitle, DialogContent, Typography, Alert, TextField, AlertTitle } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton';
import { GetConnections } from '../../groups/WorkspaceList'
import { useFragment, useMutation } from 'react-relay';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark as prismTheme } from 'react-syntax-highlighter/dist/esm/styles/prism';
import graphql from 'babel-plugin-relay/macro'
import { WorkspaceAdvancedSettingsFragment_workspace$key } from './__generated__/WorkspaceAdvancedSettingsFragment_workspace.graphql'
import { WorkspaceAdvancedSettingsDeleteMutation } from './__generated__/WorkspaceAdvancedSettingsDeleteMutation.graphql'
import { WorkspaceAdvancedSettingsDeleteDialogFragment_workspace$key } from './__generated__/WorkspaceAdvancedSettingsDeleteDialogFragment_workspace.graphql'

interface ConfirmationDialogProps {
    deleteInProgress: boolean;
    onClose: (confirm?: boolean) => void
    closeDialog: () => void
    open: boolean
    fragmentRef: WorkspaceAdvancedSettingsDeleteDialogFragment_workspace$key
}

interface Props {
    fragmentRef: WorkspaceAdvancedSettingsFragment_workspace$key
}

function DeleteConfirmationDialog(props: ConfirmationDialogProps) {
    const { deleteInProgress, onClose, closeDialog, open, fragmentRef } = props;
    const [deleteInput, setDeleteInput] = useState<string>('')

    const data = useFragment(
        graphql`
        fragment WorkspaceAdvancedSettingsDeleteDialogFragment_workspace on Workspace
        {
            name
            fullPath
        }
    `, fragmentRef
    )

    return (
        <Dialog
            keepMounted
            maxWidth="sm"
            open={open}
        >
            <DialogTitle>Delete Workspace</DialogTitle>
            <DialogContent>
                <Alert sx={{ mb: 2 }} severity="warning">
                    <AlertTitle>Warning</AlertTitle>
                    Deleting a workspace is an <strong><ins>irreversible</ins></strong> operation. All state files, resources, and data associated with this workspace will be deleted and <strong><ins>cannot be recovered</ins></strong>.</Alert>
                <Typography variant="subtitle2">Enter the following to confirm deletion:</Typography>
                <SyntaxHighlighter style={prismTheme} customStyle={{ fontSize: 14, marginBottom: 14 }} children={data.fullPath} />
                <TextField
                    autoComplete="off"
                    fullWidth
                    size="small"
                    placeholder={data.fullPath}
                    value={deleteInput}
                    onChange={(event: any) => setDeleteInput(event.target.value)}
                ></TextField>
            </DialogContent>
            <DialogActions>
                <Button color="inherit"
                    onClick={() => {
                        closeDialog()
                        setDeleteInput('')
                    }}>Cancel
                </Button>
                <LoadingButton
                    color="error"
                    variant="outlined"
                    loading={deleteInProgress}
                    disabled={data.fullPath !== deleteInput}
                    onClick={() => {
                        onClose(true)
                        setDeleteInput('')
                    }}>Delete</LoadingButton>
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
            ...WorkspaceAdvancedSettingsDeleteDialogFragment_workspace
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
                        workspacePath: data.fullPath,
                        force: true
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
                fragmentRef={data}
                deleteInProgress={commitDeleteInFlight}
                onClose={onDeleteConfirmationDialogClosed}
                closeDialog={() => setShowDeleteConfirmationDialog(false)}
                open={showDeleteConfirmationDialog}
            />
        </Box>
    )
}

export default WorkspaceAdvancedSettings
