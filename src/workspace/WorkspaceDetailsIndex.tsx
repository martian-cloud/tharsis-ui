import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CopyIcon from '@mui/icons-material/ContentCopy';
import StateIcon from '@mui/icons-material/InsertDriveFileOutlined';
import { LoadingButton } from '@mui/lab';
import { Avatar, Box, Button, ButtonGroup, Chip, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Paper, Menu, MenuItem, Stack, Tab, Tabs, Tooltip, Typography } from '@mui/material';
import teal from '@mui/material/colors/teal';
import graphql from 'babel-plugin-relay/macro';
import { CubeOutline as ModuleIcon } from 'mdi-material-ui';
import moment from 'moment';
import { useSnackbar } from 'notistack';
import React, { useState } from 'react';
import { useFragment, useMutation } from 'react-relay/hooks';
import { useNavigate, useSearchParams } from 'react-router-dom';
import NamespaceBreadcrumbs from '../namespace/NamespaceBreadcrumbs';
import Link from '../routes/Link';
import RunStatusChip from './runs/RunStatusChip';
import StateVersionDependencies from './state/StateVersionDependencies';
import StateVersionInputVariables from './state/StateVersionInputVariables';
import StateVersionOutputs from './state/StateVersionOutputs';
import StateVersionResources from './state/StateVersionResources';
import WorkspaceDetailsCurrentJob from './WorkspaceDetailsCurrentJob';
import WorkspaceDetailsEmpty from './WorkspaceDetailsEmpty';
import WorkspaceDetailsStateFile from './WorkspaceDetailsStateFile';
import { WorkspaceDetailsIndexFragment_workspace$key } from './__generated__/WorkspaceDetailsIndexFragment_workspace.graphql';
import { WorkspaceDetailsIndexMutation } from './__generated__/WorkspaceDetailsIndexMutation.graphql'

interface Props {
    fragmentRef: WorkspaceDetailsIndexFragment_workspace$key
}

interface ConfirmationDialogProps {
    workspaceName: string
    deleteInProgress: boolean;
    keepMounted: boolean;
    open: boolean;
    onClose: (confirm?: boolean) => void
}

function DeleteConfirmationDialog(props: ConfirmationDialogProps) {
    const { workspaceName, deleteInProgress, onClose, open, ...other } = props;
    return (
        <Dialog
            maxWidth="xs"
            open={open}
            {...other}
        >
            <DialogTitle>Delete Workspace</DialogTitle>
            <DialogContent dividers>
                Are you sure you want to delete workspace <strong>{workspaceName}</strong>?
            </DialogContent>
            <DialogActions>
                <Button color="inherit" onClick={() => onClose()}>
                    Cancel
                </Button>
                <LoadingButton color="error" loading={deleteInProgress} onClick={() => onClose(true)}>Delete</LoadingButton>
            </DialogActions>
        </Dialog>
    );
}

function WorkspaceDetailsIndex(props: Props) {
    const { fragmentRef } = props;
    const { enqueueSnackbar } = useSnackbar();
    const [menuAnchorEl, setMenuAnchorEl] = useState<Element | null>(null);
    const [showDeleteConfirmationDialog, setShowDeleteConfirmationDialog] = useState<boolean>(false);

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const tab = searchParams.get('tab') ?? 'resources';

    const data = useFragment<WorkspaceDetailsIndexFragment_workspace$key>(
        graphql`
      fragment WorkspaceDetailsIndexFragment_workspace on Workspace
      {
        id
        name
        description
        fullPath
        ...WorkspaceDetailsEmptyFragment_workspace
        ...WorkspaceDetailsCurrentJobFragment_workspace
        ...EditWorkspaceFragment_group
        currentJob {
            id
        }
        currentStateVersion {
            id
            ...StateVersionOutputsFragment_outputs
            ...StateVersionResourcesFragment_resources
            ...StateVersionDependenciesFragment_dependencies
            ...WorkspaceDetailsStateFileFragment_stateVersion
            metadata {
                createdAt
            }
            run {
                ...StateVersionInputVariablesFragment_variables
                id
                status
                createdBy
                isDestroy
                moduleSource
                moduleVersion
                metadata {
                    createdAt
                }
                configurationVersion {
                    id
                }
                plan {
                    status
                    metadata {
                        createdAt
                    }
                }
                apply {
                    status
                    triggeredBy
                    metadata {
                        createdAt
                        updatedAt
                    }
                }
            }
        }
      }
    `, fragmentRef);

    const [commit, commitInFlight] = useMutation<WorkspaceDetailsIndexMutation>(
        graphql`
        mutation WorkspaceDetailsIndexMutation($input: DeleteWorkspaceInput!) {
            deleteWorkspace(input: $input){
                problems {
                    message
                    field
                    type
                }
            }
        }
    `)

    const onDeleteConfirmationDialogClosed = (confirm?: boolean) => {
        if (confirm) {
            commit({
                variables: {
                    input: {
                        workspacePath: data.fullPath
                    }
                },
                onCompleted: deleteData => {
                    setShowDeleteConfirmationDialog(false);

                    if (deleteData.deleteWorkspace.problems.length) {
                        enqueueSnackbar(deleteData.deleteWorkspace.problems.map(problem => problem.message).join('; '), { variant: 'warning' });
                    } else {
                        navigate(`../${data.fullPath.slice(0, -data.name.length - 1)}`);
                    }
                },
                onError: error => {
                    setShowDeleteConfirmationDialog(false);
                    enqueueSnackbar(`Unexpected error occurred: ${error.message}`, { variant: 'error' });
                }
            });
        } else {
            setShowDeleteConfirmationDialog(false);
        }
    };

    const onTabChange = (event: React.SyntheticEvent, newValue: string) => {
        navigate({
            search: `?tab=${newValue}`
        }, {
            replace: true
        });
    };

    const onOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setMenuAnchorEl(event.currentTarget);
    };

    const onMenuClose = () => {
        setMenuAnchorEl(null);
    };

    const onMenuAction = (actionCallback: () => void) => {
        setMenuAnchorEl(null);
        actionCallback();
    };

    return (
        <Box>
            <NamespaceBreadcrumbs namespacePath={data.fullPath} />

            <Box display="flex" justifyContent="space-between" marginBottom={4}>
                <Box display="flex" alignItems="center">
                    <Avatar sx={{ width: 56, height: 56, marginRight: 2, bgcolor: teal[200] }} variant="rounded">{data.name[0].toUpperCase()}</Avatar>
                    <Stack>
                        <Typography variant="h5" sx={{ fontWeight: "bold" }}>{data.name}</Typography>
                        <Typography color="textSecondary" variant="subtitle2">{data.description}</Typography>
                    </Stack>
                </Box>
                <Box>
                    <ButtonGroup variant="outlined" color="primary" >
                        <Button onClick={() => (navigate("-/edit"))}>Edit</Button>
                        <Button
                            color="primary"
                            size="small"
                            aria-label="more options menu"
                            aria-haspopup="menu"
                            onClick={onOpenMenu}
                        >
                            <ArrowDropDownIcon fontSize="small" />
                        </Button>
                        <Menu sx={{ marginRight: 6 }}
                            id="workspace-details-more-options-menu"
                            anchorEl={menuAnchorEl}
                            open={Boolean(menuAnchorEl)}
                            onClose={onMenuClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                        >
                            <MenuItem onClick={() => onMenuAction(() => setShowDeleteConfirmationDialog(true))}>
                                Delete Workspace
                            </MenuItem>
                        </Menu>
                    </ButtonGroup>
                </Box>
            </Box>

            {data.currentJob && <Box marginBottom={2}>
                <WorkspaceDetailsCurrentJob fragmentRef={data} />
            </Box>}

            {!data.currentStateVersion && <WorkspaceDetailsEmpty fragmentRef={data} />}

            {data.currentStateVersion && <Paper sx={{ marginBottom: 2, padding: 2 }}>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Stack direction="row" spacing={2}>
                        <StateIcon />
                        <Typography component="div">
                            State last updated{' '}
                            <Tooltip sx={{ display: 'inline-block' }} title={data.currentStateVersion.metadata.createdAt as string}>
                                <Box display="flex" alignItems="center">
                                    {moment(data.currentStateVersion.metadata.createdAt as moment.MomentInput).fromNow()}
                                </Box>
                            </Tooltip>{' '}
                            {!data.currentStateVersion.run && 'by manual update'}
                            {data.currentStateVersion.run && <React.Fragment>
                                by run{' '}
                                <Link to={`/groups/${data.fullPath}/-/runs/${data.currentStateVersion.run.id}`}>
                                    {data.currentStateVersion.run.id.substring(0, 8)}...
                                </Link>
                            </React.Fragment>}
                        </Typography>
                    </Stack>
                    {data.currentStateVersion.run && <React.Fragment>
                        <RunStatusChip
                            to={`/groups/${data.fullPath}/-/runs/${data.currentStateVersion.run.id}`}
                            status={data.currentStateVersion.run.status}
                        />
                    </React.Fragment>}
                </Box>
            </Paper>}

            {data.currentStateVersion?.run?.moduleSource &&
                <Paper sx={{ marginBottom: 2, padding: 2 }}>
                    <Stack direction="row" spacing={2}>
                        <ModuleIcon />
                        <Stack direction="row" spacing={1} alignItems="center">
                            <Typography color="textSecondary">Module:</Typography>
                            <Typography sx={{ wordBreak: 'break-all' }}>
                                {data.currentStateVersion.run.moduleSource}
                            </Typography>
                            <IconButton sx={{ padding: 0 }} onClick={() => navigator.clipboard.writeText(data.currentStateVersion?.run?.moduleSource ?? '')}>
                                <CopyIcon sx={{ width: 16, height: 16 }} />
                            </IconButton>
                        </Stack>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <Typography color="textSecondary">Version:</Typography>
                            <Chip size="small" label={data.currentStateVersion.run.moduleVersion} />
                        </Stack>
                    </Stack>
                </Paper>}

            {data.currentStateVersion?.run?.configurationVersion &&
                <Paper sx={{ marginBottom: 2, padding: 2 }}>
                    <Stack direction="row" spacing={2}>
                        <ModuleIcon />
                        <Stack direction="row" spacing={1} alignItems="center">
                            <Typography color="textSecondary">Configuration Version:</Typography>
                            <Typography sx={{ wordBreak: 'break-all' }}>
                                {data.currentStateVersion.run.configurationVersion.id.substring(0, 8)}...
                            </Typography>
                            <IconButton sx={{ padding: 0 }} onClick={() => navigator.clipboard.writeText(data.currentStateVersion?.run?.configurationVersion?.id ?? '')}>
                                <CopyIcon sx={{ width: 16, height: 16 }} />
                            </IconButton>
                        </Stack>
                    </Stack>
                </Paper>}

            {data.currentStateVersion && <React.Fragment>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: 2 }}>
                    <Tabs value={tab} onChange={onTabChange}>
                        <Tab label="Resources" value="resources" />
                        <Tab label="Input Variables" value="inputs" />
                        <Tab label="Outputs" value="outputs" />
                        <Tab label="Dependencies" value="dependencies" />
                        <Tab label="State File" value="stateFile" />
                    </Tabs>
                </Box>
                {tab === 'resources' && <StateVersionResources fragmentRef={data.currentStateVersion} />}
                {tab === 'inputs' && <React.Fragment>
                    {data.currentStateVersion.run && <StateVersionInputVariables fragmentRef={data.currentStateVersion.run} />}
                    {!data.currentStateVersion.run && <Paper variant="outlined" sx={{ marginTop: 4, display: 'flex', justifyContent: 'center' }}>
                        <Box padding={4} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                            <Typography color="textSecondary" align="center">
                                Input variables are not available for manually updated state versions
                            </Typography>
                        </Box>
                    </Paper>}
                </React.Fragment>}
                {tab === 'outputs' && <StateVersionOutputs fragmentRef={data.currentStateVersion} />}
                {tab === 'dependencies' && <StateVersionDependencies fragmentRef={data.currentStateVersion} />}
                {tab === 'stateFile' && <WorkspaceDetailsStateFile fragmentRef={data.currentStateVersion} />}
            </React.Fragment>}

            <DeleteConfirmationDialog
                workspaceName={data.name}
                keepMounted
                deleteInProgress={commitInFlight}
                open={showDeleteConfirmationDialog}
                onClose={onDeleteConfirmationDialogClosed}
            />
        </Box>
    );
}

export default WorkspaceDetailsIndex;
