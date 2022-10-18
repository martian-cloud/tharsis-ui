import DeleteIcon from '@mui/icons-material/Delete';
import { Alert, Avatar, Box, IconButton, List, ListItem, ListItemText, styled, Typography } from '@mui/material';
import teal from '@mui/material/colors/teal';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import { MutationError } from '../../../common/error';
import Gravatar from '../../../common/Gravatar';
import PrincipalAutocomplete, { Option, ServiceAccountOption, TeamOption, UserOption } from './PrincipalAutocomplete';

const StyledAvatar = styled(
    Avatar
)(() => ({
    width: 24,
    height: 24,
    marginRight: 2,
    backgroundColor: teal[200],
}));

const RUN_STAGES = [
    { name: 'plan', label: 'Plan' },
    { name: 'apply', label: 'Apply' }
];

interface Props {
    groupPath: string;
    rule: any;
    disabledRunStages: string[];
    onChange: (rule: any) => void
    editMode?: boolean
    error?: MutationError
}

function ManagedIdentityPolicyRuleForm(props: Props) {
    const { groupPath, rule, disabledRunStages, onChange, editMode, error } = props

    const theme = useTheme();

    const handleDelete = (principal: any) => {
        function deletePrincipal(field: string) {
            const copy = [...rule[field]];
            const index = copy.findIndex(item => item.id === principal.id);
            if (index !== -1) {
                copy.splice(index, 1);
                onChange({ ...rule, [field]: copy });
            }
        }

        switch (principal.type) {
            case 'user': {
                deletePrincipal('allowedUsers');
                break;
            }
            case 'team': {
                deletePrincipal('allowedTeams');
                break;
            }
            case 'serviceaccount': {
                deletePrincipal('allowedServiceAccounts');
                break;
            }
        }
    }

    const onSelected = (value: Option | null) => {
        if (value) {
            switch (value.type) {
                case 'user': {
                    const user = value as UserOption;
                    onChange({ ...rule, allowedUsers: [...rule.allowedUsers, { id: user.id, email: user.email, username: user.username }] });
                    break;
                }
                case 'team': {
                    const team = value as TeamOption;
                    onChange({ ...rule, allowedTeams: [...rule.allowedTeams, { id: team.id, name: team.name }] });
                    break;
                }
                case 'serviceaccount': {
                    const sa = value as ServiceAccountOption;
                    onChange({ ...rule, allowedServiceAccounts: [...rule.allowedServiceAccounts, { id: sa.id, name: sa.name, resourcePath: sa.resourcePath }] });
                    break;
                }
            }
        }
    };

    const onRunStageChange = (event: SelectChangeEvent) => {
        onChange({ ...rule, runStage: event.target.value });
    };

    const principals = [
        ...rule.allowedUsers.map((user: any) => ({ id: user.id, type: 'user', label: user.email, tooltip: user.email, name: user.username })),
        ...rule.allowedTeams.map((team: any) => ({ id: team.id, type: 'team', label: team.name[0].toUpperCase(), tooltip: team.name, name: team.name })),
        ...rule.allowedServiceAccounts.map((sa: any) => ({ id: sa.id, type: 'serviceaccount', label: sa.name[0].toUpperCase(), tooltip: sa.resourcePath, name: sa.resourcePath }))
    ];

    const selectedIds = principals.reduce((accumulator: Set<string>, item: any) => {
        accumulator.add(item.id);
        return accumulator;
    }, new Set());

    const runStages = RUN_STAGES.filter(stage => !disabledRunStages.includes(stage.name));

    return (
        <Box>
            {error && <Alert sx={{ marginTop: 2, marginBottom: 2 }} severity={error.severity}>
                {error.message}
            </Alert>}
            <Box marginBottom={2}>
                <Typography sx={{ mb: 1 }} variant="body1">Run Stage</Typography>
                <Select
                    disabled={editMode}
                    sx={{ minWidth: 120 }}
                    size="small"
                    value={rule.runStage}
                    onChange={onRunStageChange}
                >
                    {runStages.map(stage => <MenuItem key={stage.name} value={stage.name}>{stage.label}</MenuItem>)}
                </Select>
            </Box>
            <Typography sx={{ mb: 1 }} variant="body1">Add Principals</Typography>
            <Box sx={{ border: `1px solid ${theme.palette.divider}`, borderRadius: '4px' }} marginBottom={4} padding={2}>
                <Box sx={{ marginBottom: 2 }}>
                    <PrincipalAutocomplete
                        groupPath={groupPath}
                        onSelected={onSelected}
                        filterOptions={(options: Option[]) => options.filter(option => !selectedIds.has(option.id))}
                    />
                </Box>
                <Typography color="textSecondary">
                    {principals.length} principal{principals.length === 1 ? '' : 's'} selected
                </Typography>
                <List dense>
                    {principals?.map((pr: any) => (
                        <ListItem
                            disableGutters
                            secondaryAction={<IconButton onClick={() => handleDelete(pr)}>
                                <DeleteIcon />
                            </IconButton>}
                            key={pr.id}>
                            {pr.type === 'user' && <Gravatar sx={{ marginRight: 1 }} width={24} height={24} email={pr.label} />}
                            {pr.type !== 'user' &&
                                <StyledAvatar sx={{ marginRight: 1 }}>{pr.label}</StyledAvatar>}
                            <ListItemText primary={pr.name} primaryTypographyProps={{ noWrap: true }} />
                        </ListItem>))}
                </List>
            </Box>
        </Box>
    )
}

export default ManagedIdentityPolicyRuleForm;
