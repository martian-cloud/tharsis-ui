import StateIcon from '@mui/icons-material/InsertDriveFileOutlined';
import MembersIcon from '@mui/icons-material/PeopleOutline';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import ActivityIcon from '@mui/icons-material/TimelineOutlined';
import VariablesIcon from '@mui/icons-material/WindowOutlined';
import { Avatar, List, styled, Toolbar } from '@mui/material';
import Box from '@mui/material/Box';
import teal from '@mui/material/colors/teal';
import MuiDrawer, { DrawerProps } from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AccountLockOutline as ManagedIdentityIcon, RocketLaunchOutline as RunIcon } from 'mdi-material-ui';
import { Link as LinkRouter } from 'react-router-dom';

interface Props {
  workspacePath: string
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
  { route: 'runs', label: 'Runs', icon: <RunIcon /> },
  { route: 'variables', label: 'Variables', icon: <VariablesIcon /> },
  { route: 'state_versions', label: 'State Versions', icon: <StateIcon /> },
  { route: 'managed_identities', label: 'Assigned Managed Identities', icon: <ManagedIdentityIcon /> },
  { route: 'members', label: 'Members', icon: <MembersIcon /> },
  { route: 'settings', label: 'Settings', icon: <SettingsIcon /> }
];

function WorkspaceDetailsDrawer(props: Props) {
  const { route, groupName, workspacePath } = props;

  return (
    <Drawer
      variant="permanent"
    >
      <Toolbar />
      <Box>
        <List>
          <ListItem button component={LinkRouter} selected={route === ''} replace to={`/groups/${workspacePath}`}>
            <ListItemAvatar>
              <Avatar sx={{ width: 24, height: 24, bgcolor: teal[200] }} variant="rounded">{groupName[0].toUpperCase()}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={groupName} />
          </ListItem>
          {LIST_ITEMS.map(item => (
            <ListItem key={item.route} button selected={route === item.route} component={LinkRouter} replace to={`/groups/${workspacePath}/-/${item.route}`}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

export default WorkspaceDetailsDrawer;
