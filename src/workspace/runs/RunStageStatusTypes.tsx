import NotStartedIcon from '@mui/icons-material/AdjustOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorIcon from '@mui/icons-material/Error';
import PendingIcon from '@mui/icons-material/PauseCircleOutline';
import InProgressIcon from '@mui/icons-material/TimelapseOutlined';
import WarningIcon from '@mui/icons-material/Warning';
import { green, grey, orange, red } from '@mui/material/colors';
import blue from '@mui/material/colors/blue';

export default {
    created: {
        label: 'Not Started',
        color: grey[500],
        icon: <NotStartedIcon sx={{ color: grey[500] }} />,
        tooltip: 'has not started'
    },
    canceled: {
        label: 'Canceled',
        color: red[500],
        icon: <WarningIcon sx={{ color: red[500] }} />,
        tooltip: 'was canceled while in progress'
    },
    errored: {
        label: 'Failed',
        color: red[500],
        icon: <ErrorIcon sx={{ color: red[500] }} />,
        tooltip: 'returned an error'
    },
    finished: {
        label: 'Completed',
        color: green[400],
        icon: <CheckCircleIcon sx={{ color: green[400] }} />,
        tooltip: 'has completed'
    },
    pending: {
        label: 'Pending',
        color: orange[500],
        icon: <PendingIcon sx={{ color: orange[500] }} />,
        tooltip: 'is pending'
    },
    queued: {
        label: 'Queued',
        color: orange[500],
        icon: <PendingIcon sx={{ color: orange[500] }} />,
        tooltip: 'is queued'
    },
    running: {
        label: 'In Progress',
        color: blue[500],
        icon: <InProgressIcon sx={{ color: blue[500] }} />,
        tooltip: 'is in progress'
    },
    applied: {
        label: 'Applied',
        color: green[400],
        icon: <CheckCircleIcon sx={{ color: green[400] }} />,
        tooltip: 'has applied'
    },
    apply_queued: {
        label: 'Apply Queued',
        color: orange[500],
        icon: <PendingIcon sx={{ color: orange[500] }} />,
        tooltip: 'is queued'
    },
    applying: {
        label: 'Applying',
        color: blue[500],
        icon: <InProgressIcon sx={{ color: blue[500] }} />,
        tooltip: 'is applying'
    },
    plan_queued: {
        label: 'Plan Queued',
        color: orange[500],
        icon: <PendingIcon sx={{ color: orange[500] }} />,
        tooltip: 'is queued'
    },
    planned: {
        label: 'Applying',
        color: blue[500],
        icon: <InProgressIcon sx={{ color: blue[500] }} />,
        tooltip: 'is planned'
    },
    planned_and_finished: {
        label: 'Planned and Finished',
        color: green[400],
        icon: <CheckCircleIcon sx={{ color: green[400] }} />,
        tooltip: 'has planned and finished'
    },
    planning: {
        label: 'Planning',
        color: blue[500],
        icon: <InProgressIcon sx={{ color: blue[500] }} />,
        tooltip: 'is planning'
    }
} as any;
