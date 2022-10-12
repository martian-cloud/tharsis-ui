import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { useFragment } from 'react-relay/hooks';
import { Route, Routes } from 'react-router-dom';
import NamespaceBreadcrumbs from '../../namespace/NamespaceBreadcrumbs';
import RunDetails from './RunDetails';
import RunList from './RunList';
import { RunsFragment_runs$key } from './__generated__/RunsFragment_runs.graphql';

interface Props {
    fragmentRef: RunsFragment_runs$key
}

function Runs(props: Props) {
    const data = useFragment<RunsFragment_runs$key>(
        graphql`
        fragment RunsFragment_runs on Workspace
        {
            id
            fullPath
            ...RunDetailsFragment_details
        }
      `, props.fragmentRef)
    return (
        <Box>
            <Routes>
                <Route index element={<Box>
                    <NamespaceBreadcrumbs
                        namespacePath={data.fullPath}
                        childRoutes={[
                            { title: "runs", path: 'runs' }
                        ]}
                    />
                    <Typography variant="h5">Runs</Typography>
                    <RunList workspaceId={data.id} workspacePath={data.fullPath} />
                </Box>} />
                <Route path={`:id/*`} element={<RunDetails fragmentRef={data} />} />
            </Routes>
        </Box>
    );
}

export default Runs;