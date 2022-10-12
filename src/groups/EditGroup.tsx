import { useState } from 'react';
import {Box, Button, Divider, Typography} from '@mui/material'
import { LoadingButton } from '@mui/lab';
import NamespaceBreadcrumbs from '../namespace/NamespaceBreadcrumbs';
import { useFragment, useMutation } from 'react-relay'
import graphql from 'babel-plugin-relay/macro';
import {EditGroupFragment_group$key} from './__generated__/EditGroupFragment_group.graphql'
import GroupForm, { FormData } from './GroupForm'
import { MutationError } from '../common/error'
import { EditGroupMutation } from './__generated__/EditGroupMutation.graphql'
import { useNavigate } from 'react-router-dom'

interface Props {
    fragmentRef: EditGroupFragment_group$key
}

function EditGroup(props: Props){
    const navigate = useNavigate();

    const group = useFragment<EditGroupFragment_group$key>(
        graphql`
        fragment EditGroupFragment_group on Group
        {
            id
            name
            description
            fullPath
        }
    `, props.fragmentRef
    )

    const [commit, isInFlight] = useMutation<EditGroupMutation>(graphql`
        mutation EditGroupMutation($input: UpdateGroupInput!) {
            updateGroup(input: $input){
                group{
                    id
                    ...GroupListItemFragment_group
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
    const [formData, setFormData] = useState<FormData | null>(group ? {
        name: group.name,
        description: group.description,
        fullPath: group.fullPath
    } : null)

    const onUpdate = () => {
        if (formData) {
            commit({
                variables: {
                    input: {
                        groupPath: group.fullPath,
                        description: formData.description,
                    }
                },
                onCompleted: data => {
                    if (data.updateGroup.problems.length) {
                        setError({
                            severity: 'warning',
                            message: data.updateGroup.problems.map(problem => problem.message).join('; ')
                        });
                    } else if (!data.updateGroup.group) {
                        setError({
                            severity: 'error',
                            message: "Unexpected error occurred"
                        });
                    } else {
                        navigate(`../${group.fullPath}`);
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
                namespacePath={group.fullPath}
                childRoutes={[
                    { title: "edit", path: 'edit' },
                ]}
            />
            <Typography sx={{ marginBottom: 2 }} variant="h5">Edit Group</Typography>
            <GroupForm 
                editMode
                data={formData}
                onChange={(data: FormData) => setFormData(data)}
                error={error}
            />
            <Divider light />
            <Box marginTop={2}>
                <LoadingButton
                    loading={isInFlight}
                    variant="outlined"
                    color="primary"
                    sx={{ marginRight: 2 }}
                    onClick={onUpdate}>
                    Update Group
                </LoadingButton>
                <Button color="inherit" onClick={()=> (navigate(`../${group.fullPath}`))}>Cancel</Button>
            </Box>

        </Box>
    ) : <Box>Not found</Box>
}

export default EditGroup