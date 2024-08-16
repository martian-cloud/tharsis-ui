import {
    Avatar,
    Box,
    List,
    ListItem,
    ListItemAvatar,
    ListItemIcon,
    ListItemText,
    ListItemButton,
    styled,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme
} from '@mui/material';
import StateIcon from '@mui/icons-material/InsertDriveFileOutlined';
import MembersIcon from '@mui/icons-material/PeopleOutline';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import ActivityIcon from '@mui/icons-material/TimelineOutlined';
import VariablesIcon from '@mui/icons-material/WindowOutlined';
import { useNavigate } from 'react-router-dom';
import teal from '@mui/material/colors/teal';
import MuiDrawer, { DrawerProps } from '@mui/material/Drawer';
import { AccountLockOutline as ManagedIdentityIcon, RocketLaunchOutline as RunIcon } from 'mdi-material-ui';

interface Props {
    workspacePath: string
    workspaceName: string
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
    const { route, workspaceName, workspacePath } = props;
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
                        <Typography variant="subtitle2" color="textSecondary">Workspace</Typography>
                    </ListItem>}
                    <ListItemButton
                        onClick={() => navigate(`/groups/${workspacePath}`)}
                    >
                        <ListItemAvatar>
                            <Avatar sx={{ width: 24, height: 24, bgcolor: teal[200] }} variant="rounded">{workspaceName[0].toUpperCase()}</Avatar>
                        </ListItemAvatar>
                        {fullSize && <ListItemText sx={{ wordWrap: 'break-word' }} primary={workspaceName} />}
                    </ListItemButton>
                    {LIST_ITEMS.map(item => (
                        <ListItemButton
                            key={item.route}
                            selected={route === item.route}
                            onClick={() => navigate(`/groups/${workspacePath}/-/${item.route}`)}>
                            <ListItemIcon sx={{ mt: 0.5, mb: 0.5 }}>
                                {item.icon}
                            </ListItemIcon>
                            {fullSize && <ListItemText primary={item.label} />}
                        </ListItemButton>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
}

export default WorkspaceDetailsDrawer;
