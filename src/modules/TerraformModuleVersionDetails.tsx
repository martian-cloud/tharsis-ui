import CopyIcon from '@mui/icons-material/ContentCopy';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { Alert, Chip, CircularProgress, IconButton, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import useMediaQuery from '@mui/material/useMediaQuery';
import graphql from 'babel-plugin-relay/macro';
import React, { Suspense, useState } from 'react';
import { PreloadedQuery, useFragment, usePreloadedQuery } from 'react-relay/hooks';
import { useParams, useSearchParams } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark as prismTheme } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ListSkeleton from '../skeletons/ListSkeleton';
import TerraformModuleVersionDocs from './docs/TerraformModuleVersionDocs';
import TerraformModuleVersionAttestList from './TerraformModuleVersionAttestList';
import TerraformModuleVersionDetailsSidebar, { SidebarWidth } from './TerraformModuleVersionDetailsSidebar';
import TerraformModuleVersionList from './TerraformModuleVersionList';
import { TerraformModuleVersionDetailsIndexFragment_details$key } from './__generated__/TerraformModuleVersionDetailsIndexFragment_details.graphql';
import { TerraformModuleVersionDetailsQuery } from './__generated__/TerraformModuleVersionDetailsQuery.graphql';

const query = graphql`
    query TerraformModuleVersionDetailsQuery($registryNamespace: String!, $moduleName: String!, $system: String!, $version: String, $first: Int, $after: String) {
      terraformModuleVersion(registryNamespace: $registryNamespace, moduleName: $moduleName, system: $system, version: $version) {
        id
        ...TerraformModuleVersionDetailsIndexFragment_details
      }
    }
`;

function buildUsageInfo(moduleName: string, version: string, source: string) {
    return `module "${moduleName}" {
    source  = "${source}"
    version = "${version}"
}`
}

interface Props {
    queryRef: PreloadedQuery<TerraformModuleVersionDetailsQuery>
}

function TerraformModuleVersionDetails(props: Props) {
    const { queryRef } = props;
    const { registryNamespace, moduleName, system, version } = useParams();
    const queryData = usePreloadedQuery<TerraformModuleVersionDetailsQuery>(query, queryRef);

    return (
        <Box display="flex">
            <Box component="main" flexGrow={1}>
                <Suspense fallback={<Box
                    sx={{
                        width: '100%',
                        height: `calc(100vh - 64px)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <CircularProgress />
                </Box>}>
                    <Box maxWidth={1400} margin="auto" padding={2}>
                        {queryData.terraformModuleVersion && <TerraformModuleVersionDetailsIndex fragmentRef={queryData.terraformModuleVersion} />}
                        {!queryData.terraformModuleVersion && <Box display="flex" justifyContent="center" marginTop={4}>
                            <Typography variant="h6" color="textSecondary">
                                version <strong>{version || 'latest'}</strong> not found for module <strong>{registryNamespace}/{moduleName}/{system}</strong>
                            </Typography>
                        </Box>}
                    </Box>
                </Suspense>
            </Box>
        </Box>
    );
}

interface IndexProps {
    fragmentRef: TerraformModuleVersionDetailsIndexFragment_details$key;
}

function TerraformModuleVersionDetailsIndex(props: IndexProps) {
    const [searchParams, setSearchParams] = useSearchParams();

    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down('md'));

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const data = useFragment<TerraformModuleVersionDetailsIndexFragment_details$key>(
        graphql`
          fragment TerraformModuleVersionDetailsIndexFragment_details on TerraformModuleVersion
          {
              id
              version
              status
              module {
                  id
                  name
                  source
                  system
                  registryNamespace
                  private
                  ...TerraformModuleVersionListFragment_module
              }
              configurationDetails (path: "root") {
                ...TerraformModuleVersionDocsFragment_configurationDetails
              }
              ...TerraformModuleVersionAttestListFragment_attestations
              ...TerraformModuleVersionDetailsSidebarFragment_details
          }
        `, props.fragmentRef);

    const tab = searchParams.get('tab') || 'docs';

    const onToggleSidebar = () => {
        setSidebarOpen(prev => !prev);
    };

    const onTabChange = (event: React.SyntheticEvent, newValue: string) => {
        searchParams.set('tab', newValue);

        if (newValue !== 'docs') {
            searchParams.delete('item');
        }

        setSearchParams(searchParams, { replace: true });
    };

    const usageInfo = buildUsageInfo(data.module.name, data.version, data.module.source);

    return (
        <Box>
            <TerraformModuleVersionDetailsSidebar
                fragmentRef={data}
                open={sidebarOpen}
                temporary={mobile}
                onClose={onToggleSidebar}
            />
            <Box>
                <Box paddingRight={!mobile ? `${SidebarWidth}px` : 0}>
                    {data.status === 'pending' && <Alert sx={{ marginBottom: 2 }} severity="warning">
                        Upload is still in progress
                    </Alert>}
                    <Box display="flex" alignItems="center" marginBottom={2} justifyContent="space-between">
                        <Box display="flex" alignItems="center">
                            <Typography variant="h6">{data.module.registryNamespace} / {data.module.name} / {data.module.system}</Typography>
                            {data.module.private && <Chip sx={{ marginLeft: 2 }} variant="outlined" color="warning" size="small" label="private" />}
                        </Box>
                        {mobile && <Box display="flex" justifyContent="space-between">
                            <IconButton onClick={onToggleSidebar}><DoubleArrowIcon sx={{ transform: 'rotate(180deg)' }} /></IconButton>
                        </Box>}
                    </Box>
                    <Box sx={{ border: 1, borderColor: 'divider', marginBottom: 2 }}>
                        <Tabs value={tab} onChange={onTabChange}>
                            <Tab label="Docs" value="docs" />
                            <Tab label="How To Use" value="usage" />
                            <Tab label="Versions" value="versions" />
                            <Tab label="Attestations" value="attestations" />"
                        </Tabs>
                    </Box>
                    <React.Fragment>
                        {tab === 'docs' && <Box mt={2}>
                            <TerraformModuleVersionDocs fragmentRef={data.configurationDetails} />
                        </Box>}
                        {tab === 'usage' && <Box marginTop={2} position="relative">
                            <IconButton sx={{ padding: 2, position: 'absolute', top: 0, right: 0 }} onClick={() => navigator.clipboard.writeText(usageInfo)}>
                                <CopyIcon sx={{ width: 16, height: 16 }} />
                            </IconButton>
                            <SyntaxHighlighter wrapLines customStyle={{ fontSize: 14 }} language="hcl" style={prismTheme} children={usageInfo} />
                        </Box>}
                        {tab === 'versions' && <Box marginTop={2}>
                            <Suspense fallback={<ListSkeleton rowCount={3} />}>
                                <TerraformModuleVersionList fragmentRef={data.module} />
                            </Suspense>
                        </Box>}
                        {tab === 'attestations' && <Box marginTop={2}>
                            <Suspense fallback={<ListSkeleton rowCount={3} />}>
                                <TerraformModuleVersionAttestList fragmentRef={data} />
                            </Suspense>
                        </Box>}
                    </React.Fragment>
                </Box>
            </Box>
        </Box>
    );
}

export default TerraformModuleVersionDetails;
