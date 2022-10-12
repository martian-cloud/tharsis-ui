import { Box, Tooltip } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import RunStageStatusTypes from './RunStageStatusTypes';

interface Props {
  runPath: string
  planStatus: string
  applyStatus?: string
}

function RunStageIcons(props: Props) {
  const { runPath, planStatus, applyStatus } = props;
  return (
    <Box display="flex">
      <Tooltip title={`Plan ${RunStageStatusTypes[planStatus].tooltip}`}>
        <RouterLink to={`${runPath}/plan`} style={{ lineHeight: 0 }}>
          {RunStageStatusTypes[planStatus].icon}
        </RouterLink>
      </Tooltip>

      {!!applyStatus && <Tooltip title={`Apply ${RunStageStatusTypes[applyStatus].tooltip}`}>
        <RouterLink to={`${runPath}/apply`} style={{ lineHeight: 0 }}>
          {RunStageStatusTypes[applyStatus].icon}
        </RouterLink>
      </Tooltip>}
    </Box>
  );
}

export default RunStageIcons;
