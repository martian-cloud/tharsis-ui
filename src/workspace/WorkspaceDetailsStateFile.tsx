import Box from '@mui/material/Box';
import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { useFragment } from 'react-relay/hooks';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { WorkspaceDetailsStateFileFragment_stateVersion$key } from './__generated__/WorkspaceDetailsStateFileFragment_stateVersion.graphql';

interface Props {
    fragmentRef: WorkspaceDetailsStateFileFragment_stateVersion$key
}

function WorkspaceDetailsStateFile(props: Props) {
    const { fragmentRef } = props;

    const data = useFragment<WorkspaceDetailsStateFileFragment_stateVersion$key>(
        graphql`
      fragment WorkspaceDetailsStateFileFragment_stateVersion on StateVersion
      {
        id
        data
      }
    `, fragmentRef);

    return (
        <Box sx={{ fontSize: 14, overflowX: 'auto' }}>
            <SyntaxHighlighter language="json" style={a11yDark}>
                {JSON.stringify(JSON.parse(atob(data.data)), null, 2)}
            </SyntaxHighlighter>
        </Box>
    );
}

export default WorkspaceDetailsStateFile;
