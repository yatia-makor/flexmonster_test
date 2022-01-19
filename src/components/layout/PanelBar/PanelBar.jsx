import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';

import ThemeModeContext from '../../../styles/context/ThemeModeContext';
import { toggleMobileDrawer } from '../../../redux/slices/drawerSlice';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Button, Box } from '@mui/material';

// Icons 
import MenuIcon from '@mui/icons-material/Menu';


const PanelBar = (props) => {
  const { toggleThemeMode } = useContext(ThemeModeContext);
  const dispatch = useDispatch()

    return (
    <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => dispatch(toggleMobileDrawer())}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Enigma Labs
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button color="inherit" onClick={toggleThemeMode}>Theme</Button>
        </Toolbar>
      </AppBar>
    );
}   

export default PanelBar
