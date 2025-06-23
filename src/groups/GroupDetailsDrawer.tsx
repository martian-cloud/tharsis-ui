import ActivityIcon from '@mui/icons-material/TimelineOutlined';
import MembersIcon from '@mui/icons-material/PeopleOutline';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import VariablesIcon from '@mui/icons-material/WindowOutlined';
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, ListItemButton, styled, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import teal from '@mui/material/colors/teal';
import MuiDrawer, { DrawerProps } from '@mui/material/Drawer';
import { AccountLockOutline as ManagedIdentityIcon, LanConnect as ServiceAccountIcon, KeyVariant as KeyIcon, SourceMerge as VCSProviderIcon, RobotOutline as RunnersIcon, ServerNetwork as FederatedRegistryIcon } from 'mdi-material-ui';

interface Props {
  groupPath: string
  groupName: string
  route: string
}

const DRAWER_WIDTH = 240;

const Drawer = styled(MuiDrawer)<DrawerProps>(({ theme }) => ({
  flexShrink: 0,
  overflowX: 'hidden',
  [`& .MuiDrawer-paper`]: {
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    boxSizing: 'border-box'
  },
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('md')]: {
    width: DRAWER_WIDTH,
    [`& .MuiDrawer-paper`]: {
      width: DRAWER_WIDTH
    },
  }
}));

const LIST_ITEMS = [
  { route: 'activity', label: 'Activity', icon: <ActivityIcon /> },
  { route: 'variables', label: 'Variables', icon: <VariablesIcon /> },
  { route: 'managed_identities', label: 'Managed Identities', icon: <ManagedIdentityIcon /> },
  { route: 'runners', label: 'Runner Agents', icon: <RunnersIcon /> },
  { route: 'service_accounts', label: 'Service Accounts', icon: <ServiceAccountIcon /> },
  { route: 'vcs_providers', label: 'VCS Providers', icon: <VCSProviderIcon /> },
  { route: 'federated_registries', label: 'Federated Registries', icon: <FederatedRegistryIcon /> },
  { route: 'members', label: 'Members', icon: <MembersIcon /> },
  { route: 'keys', label: 'GPG Keys', icon: <KeyIcon /> },
  { route: 'settings', label: 'Settings', icon: <SettingsIcon /> }
];

function GroupDetailsDrawer(props: Props) {
    const { route, groupName, groupPath } = props;
    const navigate = useNavigate();
    const theme = useTheme();
    const fullSize = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Drawer
            variant="permanent"
        >
            <Toolbar />
            <Box>
                <List>
                    {fullSize && <ListItem dense>
                        <Typography variant="subtitle2" color="textSecondary">Group</Typography>
                    </ListItem>}
                    <ListItemButton
                        onClick={() => navigate(`/groups/${groupPath}`)}
                    >
                        <ListItemAvatar>
                            <Avatar sx={{ width: 24, height: 24, bgcolor: teal[200] }} variant="rounded">{groupName[0].toUpperCase()}</Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={groupName} />
                    </ListItemButton>
                    {LIST_ITEMS.map(item => (
                        <ListItemButton
                            key={item.route}
                            selected={route === item.route}
                            onClick={() => navigate(`/groups/${groupPath}/-/${item.route}`)}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.label} />
                        </ListItemButton>)
                    )}
                </List>
            </Box>
        </Drawer>
    );
}

export default GroupDetailsDrawer;
