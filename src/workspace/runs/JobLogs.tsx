import AutoScrollIcon from '@mui/icons-material/ArrowCircleDown';
import { Box, LinearProgress, Paper, ToggleButton, Tooltip, Typography, useTheme } from '@mui/material';
import { darken } from '@mui/material/styles';
import graphql from 'babel-plugin-relay/macro';
import moment from 'moment';
import React, { useEffect, useMemo, useState } from 'react';
import ReactAnsi from 'react-ansi';
import { useFragment, useRelayEnvironment, useSubscription } from 'react-relay/hooks';
import { fetchQuery, GraphQLSubscriptionConfig, RecordSourceProxy } from 'relay-runtime';
import { JobLogsFragment_logs$key } from './__generated__/JobLogsFragment_logs.graphql';
import { JobLogsQuery } from './__generated__/JobLogsQuery.graphql';
import { JobLogsSubscription, JobLogsSubscription$data } from './__generated__/JobLogsSubscription.graphql';

const subscription = graphql`subscription JobLogsSubscription($input: JobLogSubscriptionInput!) {
    jobLogEvents(input: $input) {
      action
      size
    }
  }`;

interface Props {
    fragmentRef: JobLogsFragment_logs$key
}

const bytes = (str: string) => {
    const size = new Blob([str]).size;
    return size;
}

const LOG_CHUNK_SIZE_BYTES = 1024 * 1024;

function JobLogs(props: Props) {
    const data = useFragment<JobLogsFragment_logs$key>(
        graphql`
        fragment JobLogsFragment_logs on Job
        {
            id
            status
            logLastUpdatedAt
            logSize
            logs(startOffset:0, limit:1024000)
        }
      `, props.fragmentRef)

    const [logs, setLogs] = useState(data.logs);
    const [size, setSize] = useState(data.logSize);
    const [loading, setLoading] = useState<boolean>(false);
    const [autoScroll, setAutoScroll] = useState(data.status !== 'finished');
    const environment = useRelayEnvironment();
    const theme = useTheme();

    const config = useMemo<GraphQLSubscriptionConfig<JobLogsSubscription>>(() => ({
        variables: { input: { jobId: data.id, lastSeenLogSize: size } },
        subscription,
        onCompleted: () => console.log("Subscription completed"),
        onError: () => console.warn("Subscription error"),
        updater: (store: RecordSourceProxy, payload: JobLogsSubscription$data) => {
            if (payload.jobLogEvents.size > size) {
                setSize(payload.jobLogEvents.size)
            }
        }
    }), [data, size]);
    useSubscription<JobLogsSubscription>(config);

    useEffect(() => {
        const currentSize = bytes(logs);
        if (loading || currentSize >= size) {
            return;
        }

        setLoading(true);

        fetchQuery<JobLogsQuery>(
            environment,
            graphql`
              query JobLogsQuery($id: String!, $startOffset: Int!, $limit: Int!) {
                job(id: $id) {
                  id
                  logLastUpdatedAt
                  logSize
                  logs(startOffset:$startOffset, limit:$limit)
                }
              }
            `,
            { id: data.id, startOffset: currentSize, limit: LOG_CHUNK_SIZE_BYTES },
            { fetchPolicy: 'network-only' }
        ).toPromise().then(async response => {
            setLoading(false);
            const job = response?.job;
            if (job) {
                setLogs(logs + job.logs);
                setSize(job.logSize);
            }
        });
    }, [data, size, logs, loading, environment]);

    useEffect(() => {
        if (autoScroll) {
            scrollToBottom();
        }
    }, [logs, autoScroll]);

    const scrollToBottom = () => {
        window.scrollTo(0, document.body.scrollHeight);
    };

    return (
        <Box>
            <Paper square>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    paddingLeft={2}
                    paddingRight={2}
                    paddingTop={1}
                    paddingBottom={1}
                >
                    {data.logLastUpdatedAt && <Typography color="textSecondary">
                        last updated {moment(data.logLastUpdatedAt as moment.MomentInput).fromNow()}
                    </Typography>}
                    <Tooltip title={autoScroll ? 'Disable auto scroll' : 'Enable auto scroll'}>
                        <ToggleButton
                            size="small"
                            value="check"
                            selected={autoScroll}
                            onChange={() => setAutoScroll(!autoScroll)}
                        >
                            <AutoScrollIcon />
                        </ToggleButton>
                    </Tooltip>
                </Box>
            </Paper>
            {loading && data.status === 'finished' && <LinearProgress variant="determinate" value={(bytes(logs) / size) * 100} />}
            <ReactAnsi
                log={logs}
                autoScroll={false}
                linkify={false}
                logStyle={{
                    fontSize: '14px',
                    backgroundColor: darken(theme.palette.background.default, 0.5),
                    color: theme.palette.text.primary,
                    wordBreak: 'break-all',
                    marginBottom: -20
                }} />

        </Box>
    );
}

export default JobLogs;
