import { Chip, Paper, Stack, Tooltip, Typography, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { blue, green, red } from '@mui/material/colors';
import graphql from 'babel-plugin-relay/macro';
import humanizeDuration from 'humanize-duration';
import moment from 'moment';
import React, { useState } from 'react';
import Lottie from 'react-lottie-player';
import { useFragment } from 'react-relay/hooks';
import Gravatar from '../../common/Gravatar';
import RelativeTimestamp from '../../common/RelativeTimestamp';
import RocketLottieFileJson from '../../lotties/rocket-in-space-lottie.json';
import ForceCancelRunAlert from './ForceCancelRunAlert';
import JobLogs from './JobLogs';
import RunStageStatusChip from './RunStageStatusChip';
import RunVariables from './RunVariables';
import { RunDetailsPlanStageFragment_plan$key } from './__generated__/RunDetailsPlanStageFragment_plan.graphql';

interface Props {
    fragmentRef: RunDetailsPlanStageFragment_plan$key
}

function RunDetailsPlanStage(props: Props) {
    const theme = useTheme();

    const data = useFragment<RunDetailsPlanStageFragment_plan$key>(
        graphql`
        fragment RunDetailsPlanStageFragment_plan on Run
        {
            createdBy
            plan {
                metadata {
                    createdAt
                }
                resourceAdditions
                resourceChanges
                resourceDestructions
                status
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
            ...ForceCancelRunAlertFragment_run
        }
      `, props.fragmentRef);

    const [tab, setTab] = useState('logs')

    const onTabChange = (event: React.SyntheticEvent, newValue: string) => {
        setTab(newValue);
    };

    const timestamps = data.plan.currentJob?.timestamps;
    const duration = timestamps?.finishedAt ?
        moment.duration(moment(timestamps.finishedAt as moment.MomentInput).diff(moment(timestamps.runningAt as moment.MomentInput))) : null;

    return (
        <Box>
            {data.plan.currentJob?.cancelRequested && data.plan.status !== 'canceled' && <ForceCancelRunAlert fragmentRef={data} />}
            {data.plan.status !== 'pending' && <Box
                sx={{
                    paddingTop: 1,
                    marginBottom: 2,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                <RunStageStatusChip status={data.plan.status} />
                <Box display="flex" alignItems="center" marginLeft={2}>
                    <Typography sx={{ paddingRight: '4px' }}>Plan triggered</Typography>
                    <RelativeTimestamp component="span" timestamp={data.plan.metadata.createdAt} />
                    <Typography sx={{ paddingLeft: '4px', paddingRight: '8px' }}>by</Typography>
                    <Gravatar width={20} height={20} email={data.createdBy} />
                    <Typography
                        sx={{
                            paddingLeft: '8px',
                            [theme.breakpoints.down('lg')]: {
                                display: 'none'
                            }
                        }}>
                        {data.createdBy}
                    </Typography>
                </Box>
            </Box>}
            {duration && <Paper variant="outlined" sx={{ marginBottom: 2 }} >
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
                    <Stack direction="row" spacing={2}>
                        <Stack direction="row" spacing={1}>
                            <Chip
                                label={`${data.plan.resourceAdditions > 0 ? '+' : ''}${data.plan.resourceAdditions}`}
                                size="small"
                                variant="outlined"
                                sx={data.plan.resourceAdditions > 0 ? { color: green[500], borderColor: green[500] } : null}
                            />
                            <Typography>to add</Typography>
                        </Stack>
                        <Stack direction="row" spacing={1}>
                            <Chip
                                label={`${data.plan.resourceChanges > 0 ? '+' : ''}${data.plan.resourceChanges}`}
                                size="small"
                                variant="outlined"
                                sx={data.plan.resourceChanges > 0 ? { color: blue[400], borderColor: blue[400] } : null}
                            />
                            <Typography>to change</Typography>
                        </Stack>
                        <Stack direction="row" spacing={1}>
                            <Chip
                                label={`${data.plan.resourceDestructions > 0 ? '+' : ''}${data.plan.resourceDestructions}`}
                                size="small"
                                variant="outlined"
                                sx={data.plan.resourceDestructions > 0 ? { color: red[500], borderColor: red[500] } : null}
                            />
                            <Typography>to destroy</Typography>
                        </Stack>
                    </Stack>
                </Box>
            </Paper>}
            {data.plan.status === 'pending' && <Box display="flex" justifyContent="center" marginTop={6}>
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
                    <Typography sx={{ marginBottom: 2 }} variant="h6" align="center">Plan operation is pending and will start shortly</Typography>
                    <Box display="flex" alignItems="center" marginLeft={2}>
                        <Typography sx={{ paddingRight: '4px' }} color="textSecondary">Triggered</Typography>
                        <RelativeTimestamp color="textSecondary" component="span" timestamp={data.plan.metadata.createdAt} />
                        <Typography sx={{ paddingLeft: '4px', paddingRight: '8px' }} color="textSecondary">by</Typography>
                        <Tooltip title={data.createdBy}>
                            <Box>
                                <Gravatar width={20} height={20} email={data.createdBy} />
                            </Box>
                        </Tooltip>
                    </Box>
                </Box>
            </Box>}
            {data.plan.currentJob && data.plan.status !== 'pending' && <Box>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={tab} onChange={onTabChange}>
                        <Tab label="Logs" value="logs" />
                        <Tab label="Variables" value="variables" />
                    </Tabs>
                </Box>
                {tab === 'logs' && <Box>
                    <JobLogs fragmentRef={data.plan.currentJob} />
                </Box>}
                {tab === 'variables' && <Box marginTop={2}>
                    <RunVariables fragmentRef={data} />
                </Box>}
            </Box>}
        </Box>
    );
}

export default RunDetailsPlanStage;
