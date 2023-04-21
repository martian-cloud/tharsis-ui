import { List, ListItem, ListItemButton, ListItemText, Link } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { Launch } from '@mui/icons-material';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../auth/UserContext';
import Gravatar from '../common/Gravatar';
import AuthenticationService from '../auth/AuthenticationService';
import config from '../common/config';

interface Props {
  authService: AuthenticationService;
}

function AccountMenu(props: Props) {
  const navigate = useNavigate();
  const user = useContext<any>(UserContext);
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);

  function onMenuOpen(event: React.MouseEvent<HTMLButtonElement>) {
    setMenuAnchorEl(event.currentTarget);
  }

  function onMenuClose() {
    setMenuAnchorEl(null);
  }

  function onShowGraphiql() {
    onMenuClose();
    navigate('graphiql');
  }

  return (
    <div>
      <IconButton onClick={onMenuOpen}><Gravatar width={32} height={32} email={user.email} /></IconButton>
      <Popover
        id="account-menu"
        open={Boolean(menuAnchorEl)}
        anchorEl={menuAnchorEl}
        onClose={onMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <div>
          <Box padding={2}>
            <Typography>{user.email}</Typography>
          </Box>
          <Divider />
          <List dense sx={{}}>
            <ListItemButton onClick={onShowGraphiql}>
              <ListItemText primary="GraphQL Editor" />
            </ListItemButton>
            <ListItem secondaryAction={
              <IconButton LinkComponent={Link}
                          edge='end'
                          href={config.docsUrl}
                          target='_blank'
                          rel='noopener noreferrer'
                          disableRipple
                >
                  <Launch fontSize='small' />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton LinkComponent={Link} href={config.docsUrl} target='_blank' rel='noopener noreferrer' dense>
                <ListItemText primary="Documentation" />
              </ListItemButton>
            </ListItem>
            <ListItemButton onClick={()=> (props.authService.signOut())}>
              <ListItemText primary="Sign Out" />
            </ListItemButton>
          </List>
        </div>
      </Popover>
    </div>
  );
}

export default AccountMenu;
