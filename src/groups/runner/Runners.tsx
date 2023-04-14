import Box from '@mui/material/Box';
import graphql from 'babel-plugin-relay/macro';
import { useFragment } from "react-relay";
import { Route, Routes } from 'react-router-dom';
import RunnerDetails from './RunnerDetails';
import RunnerList from './RunnerList';
import { RunnersFragment_group$key } from './__generated__/RunnersFragment_group.graphql';

interface Props {
    fragmentRef: RunnersFragment_group$key
}

function Runners({ fragmentRef }: Props) {
    const group = useFragment<RunnersFragment_group$key>(
        graphql`
        fragment RunnersFragment_group on Group
        {
            ...RunnerListFragment_group
            ...RunnerDetailsFragment_group
        }
      `, fragmentRef);

    return (
        <Box>
            <Routes>
                <Route index element={<RunnerList fragmentRef={group} />} />
                <Route path={`:id`} element={<RunnerDetails fragmentRef={group} />} />
            </Routes>
        </Box>
    );
}

export default Runners;
