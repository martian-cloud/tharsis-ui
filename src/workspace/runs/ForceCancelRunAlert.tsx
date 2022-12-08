import React from 'react'
import { Alert, Stack, Typography } from '@mui/material'
import moment from 'moment';
import ForceCancelRunButton from './ForceCancelRunButton';
import { useFragment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { ForceCancelRunAlertFragment_run$key } from './__generated__/ForceCancelRunAlertFragment_run.graphql'

interface Props {
    fragmentRef: ForceCancelRunAlertFragment_run$key
}

function ForceCancelRunAlert(props: Props) {

    const data = useFragment<ForceCancelRunAlertFragment_run$key>(
        graphql`
        fragment ForceCancelRunAlertFragment_run on Run
        {
            forceCancelAvailableAt
            ...ForceCancelRunButtonFragment_run
        }
        `, props.fragmentRef
    )

    return (
        <Alert severity='warning' sx={{ mb: 2 }}>
            <Stack direction="row" spacing={1}>
                <Typography>Cancellation is in progress.</Typography>{moment(data.forceCancelAvailableAt as moment.MomentInput).isSameOrAfter() ? <Typography>Force cancellation is available {moment(data.forceCancelAvailableAt as moment.MomentInput).fromNow()}.</Typography> : <ForceCancelRunButton fragmentRef={data}/>}
            </Stack>
        </Alert>
    )
}

export default ForceCancelRunAlert
