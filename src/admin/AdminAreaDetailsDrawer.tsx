import { Box, List, ListItemButton, ListItemIcon, ListItemText, styled, Toolbar } from "@mui/material";
import MuiDrawer, { DrawerProps } from '@mui/material/Drawer';
import { useLocation, useNavigate } from 'react-router-dom';
import { RunnerIcon } from "../common/Icons";

const LIST_ITEMS = [
    { route: 'runners', label: 'Runner Agents', icon: <RunnerIcon /> },
]

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

function AdminAreaDetailsDrawer() {
    const navigate = useNavigate();
    const location = useLocation();
    const route = location.pathname as string;

    return (
        <Drawer
            variant="permanent"
        >
            <Toolbar />
            <Box>
                <List>
                    {LIST_ITEMS.map(item => (
                        <ListItemButton
                            key={item.route}
                            selected={route.includes(item.route)}
                            onClick={() => navigate(`${item.route}`)}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText>{item.label}</ListItemText>
                        </ListItemButton>)
                    )}
                </List>
            </Box>
        </Drawer>
    );
}

export default AdminAreaDetailsDrawer
