import AppBar, { AppBarProps } from '@mui/material/AppBar';
import { Box, Button, Stack } from '@mui/material';
import { styled } from "@mui/material/styles";
import Toolbar from '@mui/material/Toolbar';
import React from 'react';
import AccountMenu from '../nav/AccountMenu';
import Link from '../routes/Link';
import { Link as RouterLink } from 'react-router-dom'
import AuthenticationService from '../auth/AuthenticationService';
import RegistryMenu from './RegistryMenu';

interface Props {
  authService: AuthenticationService
}

const StyledAppBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
  boxShadow: 'none',
  borderBottomStyle: 'solid',
  borderBottomWidth: 1,
  borderBottomColor: theme.palette.divider,
  zIndex: theme.zIndex.drawer + 1,
  backgroundImage: 'none'
}));

function AppHeader(props: Props) {
  return (
    <StyledAppBar position="fixed" color={"inherit"}>
      <Toolbar>
        <Box marginRight={4}>
          <Link underline="none" color="primary" variant="h5" sx={{ fontWeight: "bold" }} to="/">Tharsis</Link>
        </Box>
        <Box display="flex" flex="1" justifyContent="flex-end" alignItems="center">
          <Stack direction="row" spacing={1} alignItems="center" marginRight={3}>
            <Button
              color="inherit"
              sx={{ textTransform: "none", fontWeight: 600 }}
              component={RouterLink} to="/groups">
              Groups
            </Button>
            <Button
              color="inherit"
              sx={{ textTransform: "none", fontWeight: 600 }}
              component={RouterLink} to="/workspaces">
              Workspaces
            </Button>
            <RegistryMenu />
          </Stack>
          <AccountMenu authService={props.authService} />
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
}

export default AppHeader;
