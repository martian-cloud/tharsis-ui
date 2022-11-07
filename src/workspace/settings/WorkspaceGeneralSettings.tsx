 import React, { useState } from 'react'
import { Alert, Box, TextField, Typography } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton';
import { MutationError } from '../../common/error';
import { useFragment, useMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro'
import { WorkspaceGeneralSettingsFragment_workspace$key } from './__generated__/WorkspaceGeneralSettingsFragment_workspace.graphql'
import { WorkspaceGeneralSettingsUpdateMutation } from './__generated__/WorkspaceGeneralSettingsUpdateMutation.graphql'

interface Props {
    fragmentRef: WorkspaceGeneralSettingsFragment_workspace$key
}

function WorkspaceGeneralSettings(props: Props) {

    const data = useFragment(
        graphql`
        fragment WorkspaceGeneralSettingsFragment_workspace on Workspace
        {
            name
            description
            fullPath
        }
    `, props.fragmentRef
    )

    const [error, setError] = useState<MutationError>()
    const [inputForm, setInputForm] = useState<{name: string, description: string}>({
        name: data.name,
        description: data.description
    })

    const [commit, isInFlight] = useMutation<WorkspaceGeneralSettingsUpdateMutation>(
        graphql`
        mutation WorkspaceGeneralSettingsUpdateMutation($input: UpdateWorkspaceInput!) {
            updateWorkspace(input: $input) {
                workspace {
                    name
                    fullPath
                }
                problems {
                    message
                    field
                    type
                }
            }
        }
    `)

const onUpdate = () => {
    commit({
        variables: {
            input: {
                workspacePath: data.fullPath,
                description: inputForm.description,
            }
        },
        onCompleted: data => {
            if (data.updateWorkspace.problems.length) {
                setError({
                    severity: 'warning',
                    message: data.updateWorkspace.problems.map(problem => problem.message).join('; ')
                });
            } else if (!data.updateWorkspace.workspace) {
                setError({
                    severity: 'error',
                    message: "Unexpected error occurred"
                });
            }
        },
        onError: error => {
            setError({
                severity: 'error',
                message: `Unexpected error occurred: ${error.message}`
            });
        }
    });
};

    return (
        <Box>
            {error && <Alert sx={{ mb: 2 }} severity={error.severity}>
                {error.message}
            </Alert>}
            <Typography marginBottom={2} variant="subtitle1" gutterBottom>General Settings</Typography>
            <Box>
                <TextField disabled={true} size="small" fullWidth label="Name" value={data.name}
                onChange={event => setInputForm({ ...data, name: event.target.value })}
                />
                <TextField size="small" margin='normal' fullWidth label="Description" value={inputForm.description}
                    onChange={event => setInputForm({ ...inputForm, description: event.target.value })}
                />
            </Box>
            <Box>
                <LoadingButton
                    sx={{ mt: 1 }}
                    size="small"
                    disabled={data.description === inputForm.description}
                    loading={isInFlight}
                    variant="outlined"
                    color="primary"
                    onClick={onUpdate}
                    >
                    Save changes
                </LoadingButton>
            </Box>
        </Box>
    )
}

export default WorkspaceGeneralSettings
