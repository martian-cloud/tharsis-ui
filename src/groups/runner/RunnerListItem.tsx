import { Box, ListItemButton, ListItemText, Typography, useTheme } from "@mui/material";
import graphql from 'babel-plugin-relay/macro';
import { RunnerIcon } from "../../common/Icons";
import moment from 'moment';
import { useFragment } from "react-relay";
import { Link as RouterLink } from 'react-router-dom';
import { RunnerListItemFragment_runner$key } from "./__generated__/RunnerListItemFragment_runner.graphql";

interface Props {
    fragmentRef: RunnerListItemFragment_runner$key
}

function RunnerListItem({ fragmentRef }: Props) {
    const theme = useTheme()

    const data = useFragment<RunnerListItemFragment_runner$key>(graphql`
        fragment RunnerListItemFragment_runner on Runner {
            id
            name
            description
            groupPath
            metadata {
                updatedAt
            }
        }
    `, fragmentRef);

    return (
        <ListItemButton
            dense
            component={RouterLink}
            to={`/groups/${data.groupPath}/-/runner_agents/${data.id}`}
            sx={{
                borderBottom: `1px solid ${theme.palette.divider}`,
                borderLeft: `1px solid ${theme.palette.divider}`,
                borderRight: `1px solid ${theme.palette.divider}`,
                '&:last-child': {
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 4
                }
            }}>
            <Box sx={{ mr: 2 }}>
                <RunnerIcon />
            </Box>
            <ListItemText
                primary={<Typography>{data.name}</Typography>}
                secondary={data.description} />
            <Typography variant="body2" color="textSecondary">
                {moment(data.metadata.updatedAt as moment.MomentInput).fromNow()}
            </Typography>
        </ListItemButton>
    );
}

export default RunnerListItem
