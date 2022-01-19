import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toggleMobileDrawer } from '../../../redux/slices/drawerSlice';
import drawerController from '../../../controllers/drawerController';

import Toolbar from '@mui/material/Toolbar';
import { ListItem, List, ListItemIcon, ListItemText } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const PanelDrawer = (props) => {
    const isMobileDrawerOpen = useSelector(state => state.drawer.isMobileDrawerOpen);
    const dispatch = useDispatch();

    const drawer = (
        <div>
          <Toolbar />
          <Divider />
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      );
    
    return (
    <Box
        component="nav"
        sx={{ width: { sm: drawerController.DRAWER_WIDTH }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
    >
      <Drawer
          variant="temporary"
          open={isMobileDrawerOpen}
          onClose={() => dispatch(toggleMobileDrawer())}
          ModalProps={{
          keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerController.DRAWER_WIDTH },
          }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
        display: { xs: 'none', sm: 'block' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerController.DRAWER_WIDTH },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
    )
}

export default PanelDrawer