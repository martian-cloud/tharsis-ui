import { Box, Tooltip } from '@mui/material';
import Typography, { TypographyProps } from '@mui/material/Typography';
import React, { useMemo } from 'react';
import moment from 'moment-timezone';

interface Props {
    timestamp: string;
}

function RelativeTimestamp({ timestamp, ...other }: Props & TypographyProps) {
    const formattedTimestamp = useMemo(() => {
        const zoneName = moment.tz(moment.tz.guess()).zoneName();
        return `${moment(timestamp as moment.MomentInput).format('MMMM Do YYYY, h:mm:ss A')} ${zoneName}`;
    }, [timestamp]);

    return (
        <Tooltip title={formattedTimestamp}>
            <Box component="span">
                <Typography variant="inherit" color="inherit" {...other}>
                    {moment(timestamp as moment.MomentInput).fromNow()}
                </Typography>
            </Box>
        </Tooltip>
    );
}

export default RelativeTimestamp;
