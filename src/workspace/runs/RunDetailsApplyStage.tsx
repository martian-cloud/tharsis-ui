import { LoadingButton } from '@mui/lab';
import { Alert, Chip, Paper, Stack, Tooltip, Typography, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import { blue, green, red } from '@mui/material/colors';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import graphql from 'babel-plugin-relay/macro';
import humanizeDuration from 'humanize-duration';
import moment from 'moment';
import React, { useState } from 'react';
import Lottie from 'react-lottie-player';
import { useFragment, useMutation } from 'react-relay/hooks';
import { MutationError } from '../../common/error';
import Gravatar from '../../common/Gravatar';
import RocketLottieFileJson from '../../lotties/rocket-in-space-lottie.json';
import JobLogs from './JobLogs';
import RunStageStatusChip from './RunStageStatusChip';
import RunVariables from './RunVariables';
import { RunDetailsApplyStageApplyRunMutation } from './__generated__/RunDetailsApplyStageApplyRunMutation.graphql';
import { RunDetailsApplyStageFragment_apply$key } from './__generated__/RunDetailsApplyStageFragment_apply.graphql';

interface Props {
    fragmentRef: RunDetailsApplyStageFragment_apply$key
    onError: (error: MutationError) => void
}

function RunDetailsApplyStage(props: Props) {
    const theme = useTheme();

    const data = useFragment<RunDetailsApplyStageFragment_apply$key>(
        graphql`
        fragment RunDetailsApplyStageFragment_apply on Run
        {
            id
            status
            plan {
                resourceAdditions
                resourceChanges
                resourceDestructions
                status
            }
            apply {
                metadata {
                    createdAt
                }
                status
                triggeredBy
                currentJob {
                  id
                  status
                  cancelRequested
                  timestamps {
                    queuedAt
                    pendingAt
                    runningAt
                    finishedAt
                  }
                  ...JobLogsFragment_logs
                }
            }
            ...RunVariablesFragment_variables
        }
      `, props.fragmentRef)

    const [commitApplyRun, commitApplyRunInFlight] = useMutation<RunDetailsApplyStageApplyRunMutation>(graphql`
        mutation RunDetailsApplyStageApplyRunMutation($input: ApplyRunInput!) {
            applyRun(input: $input) {
                run {
                    ...RunDetailsApplyStageFragment_apply
                }
                problems {
                    message
                    field
                    type
                }
            }
        }
    `);

    const applyRun = () => {
        commitApplyRun({
            variables: {
                input: {
                    runId: data.id,
                    comment: ''
                },
            },
            onCompleted: data => {
                if (data.applyRun.problems.length) {
                    props.onError({
                        severity: 'warning',
                        message: data.applyRun.problems.map(problem => problem.message).join('; ')
                    });
                }
            },
            onError: error => {
                props.onError({
                    severity: 'error',
                    message: `Unexpected Error Occurred: ${error.message}`
                });
            }
        })
    }

    const [tab, setTab] = useState('logs')

    const onTabChange = (event: React.SyntheticEvent, newValue: string) => {
        setTab(newValue);
    };

    const timestamps = data.apply?.currentJob?.timestamps;
    const duration = timestamps?.finishedAt ?
        moment.duration(moment(timestamps.finishedAt as moment.MomentInput).diff(moment(timestamps.runningAt as moment.MomentInput))) : null;

    return (
        <Box>
            {data.apply?.currentJob?.cancelRequested && data.apply?.status !== 'canceled' && <Alert severity="warning" sx={{ marginBottom: 2 }}>
                Cancellation is in progress
            </Alert>}
            {data.apply && data.apply.status !== 'created' && data.apply.triggeredBy && <Box>
                {data.apply.status !== 'pending' && <Box
                    sx={{
                        paddingTop: 1,
                        marginBottom: 2,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                    <RunStageStatusChip status={data.apply.status} />
                    <Box display="flex" alignItems="center" marginLeft={2}>
                        <Typography sx={{ paddingRight: '4px' }}>Apply triggered</Typography>
                        <Tooltip title={data.apply.metadata.createdAt as string}>
                            <Typography>
                                {moment(data.apply.metadata.createdAt as moment.MomentInput).fromNow()}
                            </Typography>
                        </Tooltip>
                        <Typography sx={{ paddingLeft: '4px', paddingRight: '8px' }}>by</Typography>
                        <Gravatar width={20} height={20} email={data.apply.triggeredBy} />
                        <Typography
                            sx={{
                                paddingLeft: '8px',
                                [theme.breakpoints.down('lg')]: {
                                    display: 'none'
                                }
                            }}>
                            {data.apply.triggeredBy}
                        </Typography>
                    </Box>
                </Box>}
                {duration && <Paper variant="outlined" sx={{ marginBottom: 2 }}>
                    <Box
                        sx={{
                            padding: 2,
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            [theme.breakpoints.down('lg')]: {
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                '& > *:not(:last-child)': {
                                    marginBottom: 2
                                },
                            }
                        }}>
                        <Typography>Duration: {humanizeDuration(duration.asMilliseconds())}</Typography>
                        {data.apply.status === 'finished' && <Stack direction="row" spacing={2}>
                            <Stack direction="row" spacing={1}>
                                <Chip
                                    label={`${data.plan.resourceAdditions > 0 ? '+' : ''}${data.plan.resourceAdditions}`}
                                    size="small"
                                    variant="outlined"
                                    sx={data.plan.resourceAdditions > 0 ? { color: green[500], borderColor: green[500] } : null}
                                />
                                <Typography>added</Typography>
                            </Stack>
                            <Stack direction="row" spacing={1}>
                                <Chip
                                    label={`${data.plan.resourceChanges > 0 ? '+' : ''}${data.plan.resourceChanges}`}
                                    size="small"
                                    variant="outlined"
                                    sx={data.plan.resourceChanges > 0 ? { color: blue[500], borderColor: blue[500] } : null}
                                />
                                <Typography>changed</Typography>
                            </Stack>
                            <Stack direction="row" spacing={1}>
                                <Chip
                                    label={`${data.plan.resourceDestructions > 0 ? '+' : ''}${data.plan.resourceDestructions}`}
                                    size="small"
                                    variant="outlined"
                                    sx={data.plan.resourceDestructions > 0 ? { color: red[500], borderColor: red[500] } : null}
                                />
                                <Typography>destroyed</Typography>
                            </Stack>
                        </Stack>}
                    </Box>
                </Paper>}
                {data.apply.status === 'pending' && <Box display="flex" justifyContent="center" marginTop={6}>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <Lottie
                            renderer={undefined}
                            rendererSettings={undefined}
                            audioFactory={undefined}
                            animationData={RocketLottieFileJson}
                            loop={true}
                            play
                            style={{ width: 250, height: 250 }}
                        />
                        <Typography sx={{ marginBottom: 2 }} variant="h6" align="center">Apply operation is pending and will start shortly</Typography>
                        <Box display="flex" alignItems="center" marginLeft={2}>
                            <Typography sx={{ paddingRight: '4px' }} color="textSecondary">Triggered</Typography>
                            <Tooltip title={data.apply.metadata.createdAt as string}>
                                <Typography color="textSecondary">
                                    {moment(data.apply.metadata.createdAt as moment.MomentInput).fromNow()}
                                </Typography>
                            </Tooltip>
                            <Typography sx={{ paddingLeft: '4px', paddingRight: '8px' }} color="textSecondary">by</Typography>
                            <Tooltip title={data.apply.triggeredBy}>
                                <Box>
                                    <Gravatar width={20} height={20} email={data.apply.triggeredBy} />
                                </Box>
                            </Tooltip>
                        </Box>
                    </Box>
                </Box>}
                {data.apply.currentJob && data.apply.status !== 'pending' && <Box>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={tab} onChange={onTabChange}>
                            <Tab label="Logs" value="logs" />
                            <Tab label="Variables" value="variables" />
                        </Tabs>
                    </Box>
                    {tab === 'logs' && <Box>
                        <JobLogs fragmentRef={data.apply.currentJob} />
                    </Box>}
                    {tab === 'variables' && <Box marginTop={2}>
                        <RunVariables fragmentRef={data} />
                    </Box>}
                </Box>}
            </Box >}
            {(!data.apply || data.apply.status === 'created') && <Box sx={{ marginTop: 4 }} display="flex" justifyContent="center">
                <Box padding={4} display="flex" flexDirection="column" justifyContent="center" alignItems="center" sx={{ maxWidth: 600 }}>
                    {['pending', 'plan_queued', 'planning'].includes(data.status) && <React.Fragment>
                        <Typography variant="h6">Apply has not started</Typography>
                        <Typography color="textSecondary" align="center" sx={{ marginBottom: 2 }}>
                            The apply stage can be started after all previous stages have completed
                        </Typography>
                    </React.Fragment>}
                    {['canceled', 'errored'].includes(data.status) && <React.Fragment>
                        <Typography variant="h6">Apply not started</Typography>
                        <Typography color="textSecondary" align="center" sx={{ marginBottom: 2 }}>
                            The apply stage was not started because the run has failed or was canceled
                        </Typography>
                    </React.Fragment>}
                    {data.status === 'planned_and_finished' && <React.Fragment>
                        <Typography variant="h6">Apply skipped</Typography>
                        <Typography color="textSecondary" align="center" sx={{ marginBottom: 2 }}>
                            The apply stage has been skipped because the plan did not contain any changes
                        </Typography>
                    </React.Fragment>}
                    {data.status === 'planned' && <React.Fragment>
                        <Typography variant="h6">Apply has not started</Typography>
                        <Typography color="textSecondary" align="center" sx={{ marginBottom: 2 }}>
                            All previous stages have completed so the apply is ready to be started
                        </Typography>
                        <LoadingButton loading={commitApplyRunInFlight} variant="outlined" color="primary" onClick={applyRun}>Start Apply</LoadingButton>
                    </React.Fragment>}
                </Box>
            </Box>}
        </Box>
    );
}

export default RunDetailsApplyStage;
