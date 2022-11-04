import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, styled, Typography } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import React, { useState } from 'react'
import NamespaceBreadcrumbs from '../../namespace/NamespaceBreadcrumbs'
import graphql from 'babel-plugin-relay/macro'
import { useFragment, useMutation } from 'react-relay/hooks';
import MaxJobDurationSetting from './MaxJobDurationSetting';
import { WorkspaceSettingsFragment_workspace$key } from './__generated__/WorkspaceSettingsFragment_workspace.graphql'
import { WorkspaceSettingsDeleteMutation } from './__generated__/WorkspaceSettingsDeleteMutation.graphql'
import TerraformCLIVersionSetting from './TerraformCLIVersionSetting';
import { GetConnections } from '../../groups/WorkspaceList'
import WorkspaceGeneralSettings from './WorkspaceGeneralSettings';

interface Props {
    fragmentRef: WorkspaceSettingsFragment_workspace$key
}

interface ConfirmationDialogProps {
    deleteInProgress: boolean;
    onClose: (confirm?: boolean) => void
}

const StyledDivider = styled(
    Divider
)(() => ({
    margin: "24px 0"
}))

function WorkspaceSettings(props: Props) {
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const [showDeleteConfirmationDialog, setShowDeleteConfirmationDialog] = useState<boolean>(false);

    const data = useFragment(
        graphql`
        fragment WorkspaceSettingsFragment_workspace on Workspace
        {
            name
            description
            fullPath
            ...MaxJobDurationSettingFragment_workspace
            ...TerraformCLIVersionSettingFragment_workspace
            ...WorkspaceGeneralSettingsFragment_workspace
        }
    `, props.fragmentRef
    )

    function DeleteConfirmationDialog(props: ConfirmationDialogProps) {
        const { deleteInProgress, onClose } = props;
        return (
            <Dialog
                keepMounted
                maxWidth="xs"
                open={showDeleteConfirmationDialog}
            >
                <DialogTitle>Delete Workspace</DialogTitle>
                <DialogContent dividers>
                    Are you sure you want to delete workspace <strong>{data.name}</strong>?
                </DialogContent>
                <DialogActions>
                    <Button color="inherit" onClick={() => setShowDeleteConfirmationDialog(false)}>
                        Cancel
                    </Button>
                    <LoadingButton color="error" loading={deleteInProgress} onClick={() => onClose(true)}>Delete</LoadingButton>
                </DialogActions>
            </Dialog>
        );
    }

    const [commitDelete, commitDeleteInFlight] = useMutation<WorkspaceSettingsDeleteMutation>(
        graphql`
        mutation WorkspaceSettingsDeleteMutation($input: DeleteWorkspaceInput!, $connections: [ID!]!) {
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
            <NamespaceBreadcrumbs
            namespacePath={data.fullPath}
            childRoutes={[
                { title: "settings", path: 'settings' },
                ]} />
            <Typography marginBottom={4} variant="h5" gutterBottom>Workspace Settings</Typography>
            <StyledDivider/>
            <WorkspaceGeneralSettings fragmentRef={data}/>
            <StyledDivider/>
            <MaxJobDurationSetting fragmentRef={data} />
            <StyledDivider/>
            <TerraformCLIVersionSetting fragmentRef={data} />
            <StyledDivider/>
            <Box>
                <Button variant="outlined" color="error" onClick={() => setShowDeleteConfirmationDialog(true)}>Delete Workspace</Button>
            </Box>
            <DeleteConfirmationDialog
                deleteInProgress={commitDeleteInFlight}
                onClose={onDeleteConfirmationDialogClosed}
            />
        </Box>
    );
  }

  export default WorkspaceSettings;
