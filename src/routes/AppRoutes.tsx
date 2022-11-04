import { Route, Routes } from 'react-router-dom';
import AuthenticationService from '../auth/AuthenticationService';
import GraphiQLEditor from '../graphiql/GraphiQLEditor';
import NewGroup from '../groups/NewGroup';
import NewWorkspace from '../workspace/NewWorkspace';
import ExploreGroupsEntryPoint from './ExploreGroupsEntryPoint';
import GroupOrWorkspaceDetailsEntryPoint from './GroupOrWorkspaceDetailsEntryPoint';
import HomeEntryPoint from './HomeEntryPoint';
import ScrollRestoration from './ScrollRestoration';
import TerraformProviderSearchEntryPoint from './TerraformProviderSearchEntryPoint';
import TerraformProviderVersionDetailsEntryPoint from './TerraformProviderVersionDetailsEntryPoint';
import WorkspaceSearchEntryPoint from './WorkspaceSearchEntryPoint';

interface Props {
  authService: AuthenticationService
}

function AppRoutes(props: Props) {
  return (
    <ScrollRestoration>
      <Routes>
        <Route path="/groups/-/new" element={<NewGroup />} />
        <Route path="/groups" element={<ExploreGroupsEntryPoint />} />
        <Route path="/workspaces" element={<WorkspaceSearchEntryPoint />} />
        <Route path="/workspaces/-/new" element={<NewWorkspace />} />
        <Route path="/graphiql" element={<GraphiQLEditor authService={props.authService} />} />
        <Route path="/groups/*" element={<GroupOrWorkspaceDetailsEntryPoint />} />
        <Route path="/provider-registry/:registryNamespace/:providerName/:version" element={<TerraformProviderVersionDetailsEntryPoint />} />
        <Route path="/provider-registry/:registryNamespace/:providerName" element={<TerraformProviderVersionDetailsEntryPoint />} />
        <Route path="/provider-registry/*" element={<TerraformProviderSearchEntryPoint />} />
        <Route path="/" element={<HomeEntryPoint />} />
      </Routes>
    </ScrollRestoration>
  );
}

export default AppRoutes;
