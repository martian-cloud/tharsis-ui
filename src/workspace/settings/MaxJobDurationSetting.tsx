import React, { useState } from 'react'
import { Alert, Box, Typography, TextField } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton';
import { useMutation, useFragment } from 'react-relay/hooks'
import graphql from 'babel-plugin-relay/macro'
import { MutationError } from '../../common/error';
import { MaxJobDurationSettingUpdateMutation } from './__generated__/MaxJobDurationSettingUpdateMutation.graphql'
import { MaxJobDurationSettingFragment_workspace$key } from './__generated__/MaxJobDurationSettingFragment_workspace.graphql'

interface Props {
    fragmentRef: MaxJobDurationSettingFragment_workspace$key
}

function MaxJobDurationSetting(props: Props) {

    const data = useFragment(
        graphql`
        fragment MaxJobDurationSettingFragment_workspace on Workspace
        {
            fullPath
            maxJobDuration
        }
    `, props.fragmentRef
    )

    const [error, setError] = useState<MutationError>()
    const [maxJobDurationInput, setMaxJobDurationInput] = useState<any>(data.maxJobDuration)

    const [commit, isInFlight] = useMutation<MaxJobDurationSettingUpdateMutation>(
        graphql`
        mutation MaxJobDurationSettingUpdateMutation($input: UpdateWorkspaceInput!) {
            updateWorkspace(input: $input) {
                workspace {
                    maxJobDuration
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
        if (maxJobDurationInput !== '') {
            commit({
                variables: {
                    input: {
                        workspacePath: data.fullPath,
                        maxJobDuration: parseInt(maxJobDurationInput)
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
        }
    };

    const convertJobTime = (num: number) => {
        const hours = Math.floor(num / 60)
        const min = num % 60
        return `${hours >= 1 ? `${hours} hour${hours === 1 ? '' : 's'} and ` : ''} ${min} minute${min === 1 ? '' : 's'}`
    }

    const handleMaxJobDurationInput = (event: any) => {
        setMaxJobDurationInput(event.target.value)
        setError(undefined)
    }

    return (
        <Box>
            {error && <Alert sx={{ mb: 2 }} severity={error.severity}>
                {error.message}
            </Alert>}
            <Typography variant="subtitle1" gutterBottom>Maximum Job Duration</Typography>
            <Typography marginBottom={2} variant="subtitle2">Current Maximum Job Duration: {convertJobTime(data.maxJobDuration)}</Typography>
            <Box>
                <TextField
                    sx={{ minWidth: 250, mb: 1 }}
                    size="small"
                    type="number"
                    value={maxJobDurationInput}
                    onChange={(event) => handleMaxJobDurationInput(event)}
                />
                <Typography sx={{ mb: 1 }} variant="subtitle2">Jobs will timeout if they run longer than the maximum job duration. Input value is in minutes by default.</Typography>
            </Box>
            <Box>
                <LoadingButton
                    sx={{ mt: 1 }}
                    size="small"
                    disabled={maxJobDurationInput == data.maxJobDuration}
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

export default MaxJobDurationSetting
