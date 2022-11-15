import { Box, Divider, styled, Typography } from '@mui/material'
import React from 'react'
import NamespaceBreadcrumbs from '../../namespace/NamespaceBreadcrumbs'
import graphql from 'babel-plugin-relay/macro'
import { useFragment } from 'react-relay/hooks';
import { WorkspaceSettingsFragment_workspace$key } from './__generated__/WorkspaceSettingsFragment_workspace.graphql'
import WorkspaceGeneralSettings from './WorkspaceGeneralSettings';
import WorkspaceRunSettings from './WorkspaceRunSettings';
import WorkspaceAdvancedSettings from './WorkspaceAdvancedSettings'

interface Props {
    fragmentRef: WorkspaceSettingsFragment_workspace$key
}

export const StyledDivider = styled(
    Divider
)(() => ({
    margin: "24px 0"
}))

function WorkspaceSettings(props: Props) {

    const data = useFragment(
        graphql`
        fragment WorkspaceSettingsFragment_workspace on Workspace
        {
            name
            description
            fullPath
            ...WorkspaceGeneralSettingsFragment_workspace
            ...WorkspaceRunSettingsFragment_workspace
            ...WorkspaceAdvancedSettingsFragment_workspace
        }
    `, props.fragmentRef
    )

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
            <StyledDivider />
            <WorkspaceRunSettings fragmentRef={data} />
            <StyledDivider />
            <WorkspaceAdvancedSettings fragmentRef={data} />
        </Box>
    );
  }

  export default WorkspaceSettings;
