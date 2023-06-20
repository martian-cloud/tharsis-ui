import { Box, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay/hooks';
import { Link as RouterLink } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import NamespaceBreadcrumbs from '../../namespace/NamespaceBreadcrumbs';
import RunDetails from './RunDetails';
import RunList from './RunList';
import CreateRun from './create/CreateRun';
import { RunsFragment_runs$key } from './__generated__/RunsFragment_runs.graphql';
import { RunsIndexFragment_runs$key } from './__generated__/RunsIndexFragment_runs.graphql';

interface Props {
    fragmentRef: RunsFragment_runs$key
}

function Runs({ fragmentRef }: Props) {
    const data = useFragment(
        graphql`
        fragment RunsFragment_runs on Workspace
        {
            fullPath
            ...RunsIndexFragment_runs
            ...CreateRunFragment_workspace
            ...RunDetailsFragment_details
        }
      `, fragmentRef);

    return (
        <Box>
            <Routes>
                <Route index element={<RunsIndex fragmentRef={data} />} />
                <Route path={`create`} element={<CreateRun fragmentRef={data} />} />
                <Route path={`:id/*`} element={<RunDetails fragmentRef={data} />} />
            </Routes>
        </Box>
    );
}

interface RunsIndexProps {
    fragmentRef: RunsIndexFragment_runs$key
}

function RunsIndex({ fragmentRef }: RunsIndexProps) {

    const data = useFragment<RunsIndexFragment_runs$key>(
        graphql`
        fragment RunsIndexFragment_runs on Workspace
        {
            id
            fullPath
        }
      `, fragmentRef);

    return (
        <Box>
            <NamespaceBreadcrumbs
                namespacePath={data.fullPath}
                childRoutes={[{ title: "runs", path: 'runs' }]}
            />
            <Box
                sx={{
                    mb: 2,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                <Typography variant="h5">Runs</Typography>
                <Button
                    component={RouterLink}
                    variant="outlined"
                    color="primary"
                    to="create">Create Run
                </Button>
            </Box>
            <RunList workspaceId={data.id} workspacePath={data.fullPath} />
        </Box>
    );
}

export default Runs;
