import { useState } from 'react';
import {Box, Button, Divider, Typography} from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import NamespaceBreadcrumbs from '../namespace/NamespaceBreadcrumbs'
import WorkspaceForm, { FormData } from './WorkspaceForm'
import { useFragment, useMutation } from 'react-relay/hooks';
import graphql from 'babel-plugin-relay/macro'
import { MutationError } from '../common/error';
import { EditWorkspaceFragment_group$key } from './__generated__/EditWorkspaceFragment_group.graphql'
import { EditWorkspaceMutation } from './__generated__/EditWorkspaceMutation.graphql'

interface Props {
    fragmentRef: EditWorkspaceFragment_group$key
}
function EditWorkspace(props: Props){
    const navigate = useNavigate();

    const workspace = useFragment<EditWorkspaceFragment_group$key>(
        graphql`
        fragment EditWorkspaceFragment_group on Workspace
        {
            id
            name
            description
            fullPath
        }
    `, props.fragmentRef
    )

    const [commit, isInFlight] = useMutation<EditWorkspaceMutation>(
        graphql`
        mutation EditWorkspaceMutation($input: UpdateWorkspaceInput!) {
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

    const [error, setError] = useState<MutationError>()
    const [formData, setFormData] = useState<FormData | null>(workspace ? {
        name: workspace.name,
        description: workspace.description,
        fullPath: workspace.fullPath
    } : null)

    const onUpdate = () => {
        if (formData) {
            commit({
                variables: {
                    input: {
                        workspacePath: workspace.fullPath,
                        description: formData.description,
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
                    } else {
                        navigate(`../${workspace.fullPath}`);
                    }
                },
                onError: error => {
                    setError({
                        severity: 'error',
                        message: `Unexpected error occurred: ${error.message}`
                    });
                }
            });
        }
    };

    return formData ? (
        <Box>
            <NamespaceBreadcrumbs
            namespacePath={workspace.fullPath}
            childRoutes={[
                { title: "edit", path: 'edit' },
            ]}/>
            <Typography variant="h5">Edit Workspace</Typography>
            <WorkspaceForm 
                editMode
                data={formData}
                onChange={(data: FormData) => setFormData(data)}
                error={error}/>
            <Divider light />
            <Box marginTop={2}>
                <LoadingButton
                    loading={isInFlight}
                    variant="outlined"
                    color="primary"
                    sx={{ marginRight: 2 }}
                    onClick={onUpdate}
                    >
                    Update Workspace
                </LoadingButton>
                <Button component={RouterLink} color="inherit" to={`../${workspace.fullPath}`}>Cancel</Button>
            </Box>
        </Box>
    ) : <Box>Not found</Box>
}

export default EditWorkspace