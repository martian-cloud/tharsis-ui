import { Box, styled, Toolbar, Typography } from '@mui/material';
import MuiDrawer, { DrawerProps } from '@mui/material/Drawer';
import HomeWorkspaceList from './HomeWorkspaceList';
import HomeTeamList from './HomeTeamList';

const DRAWER_WIDTH = 350;

const Drawer = styled(MuiDrawer)<DrawerProps>(({ theme }) => ({
    flexShrink: 0,
    overflowX: 'hidden',
    [`& .MuiDrawer-paper`]: {
        overflowX: 'hidden',
        width: 0
    },
    width: 0,
    [theme.breakpoints.up('md')]: {
        width: DRAWER_WIDTH,
        [`& .MuiDrawer-paper`]: {
            width: DRAWER_WIDTH
        },
    }
}));

function HomeDrawer() {
    return (
        <Drawer
            variant="permanent"
        >
            <Toolbar />
            <Box padding={2}>
                <Box mb={4}>
                    <Typography mb={1} variant="subtitle1" fontWeight={600}>Workspaces</Typography>
                    <HomeWorkspaceList />
                </Box>
                <Box>
                    <Typography mb={1} variant="subtitle1" fontWeight={600}>Teams</Typography>
                    <HomeTeamList />
                </Box>
            </Box>
        </Drawer>
    );
}

export default HomeDrawer;
