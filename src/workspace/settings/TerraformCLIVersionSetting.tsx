import { Alert, Box, MenuItem, Select, Typography } from '@mui/material'
import React, { useState } from 'react'
import graphql from 'babel-plugin-relay/macro'
import { MutationError } from '../../common/error';
import {  useLazyLoadQuery, useMutation, useFragment } from 'react-relay/hooks';
import { TerraformCLIVersionSettingQuery } from './__generated__/TerraformCLIVersionSettingQuery.graphql'
import { TerraformCLIVersionSettingUpdateMutation } from './__generated__/TerraformCLIVersionSettingUpdateMutation.graphql'
import { TerraformCLIVersionSettingFragment_workspace$key } from './__generated__/TerraformCLIVersionSettingFragment_workspace.graphql'

interface Props {
    fragmentRef: TerraformCLIVersionSettingFragment_workspace$key
}

function TerraformCLIVersionSetting(props: Props) {

    const data = useFragment(
        graphql`
        fragment TerraformCLIVersionSettingFragment_workspace on Workspace
        {
            fullPath
            terraformVersion
        }
    `, props.fragmentRef
    )

    const versionsData = useLazyLoadQuery<TerraformCLIVersionSettingQuery>(graphql`
        query TerraformCLIVersionSettingQuery {
            terraformCLIVersions {
                versions
            }
        }`, { fetchPolicy: 'store-or-network' })

    const [error, setError] = useState<MutationError>()

    const [commit] = useMutation<TerraformCLIVersionSettingUpdateMutation>(
        graphql`
        mutation TerraformCLIVersionSettingUpdateMutation($input: UpdateWorkspaceInput!) {
            updateWorkspace(input: $input) {
                workspace {
                    terraformVersion
                }
                problems {
                    message
                    field
                    type
                }
            }
        }
    `)

const onUpdate = (event: any) => {
    commit({
        variables: {
            input: {
                workspacePath: data.fullPath,
                terraformVersion: event.target.value
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
            <Typography variant="subtitle1" gutterBottom>Terraform CLI Version</Typography>
            <Box>
                <Select
                    sx={{ width: 150, mb: 1 }}
                    size="small"
                    labelId="terraform-cli-versions-select-label"
                    id="terraform-cli-versions-select"
                    value={data.terraformVersion}
                    onChange={(event: any) => onUpdate(event)}
                >
                    {versionsData.terraformCLIVersions ? [...versionsData.terraformCLIVersions.versions].reverse().map((opt: string) => <MenuItem key={opt} value={opt}>{opt}</MenuItem>) : null}
                </Select>
                <Typography variant="subtitle2">The latest version was selected when the workspace was created. The version will <strong>not upgrade automatically</strong> to the latest version. Version changes must be made manually.</Typography>
            </Box>
        </Box>
    )
}

export default TerraformCLIVersionSetting
