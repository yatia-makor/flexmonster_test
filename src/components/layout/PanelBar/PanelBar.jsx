import React, {useState} from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

// Icons 
import MenuIcon from '@mui/icons-material/Menu';


const PanelBar = () => {
    const [ isDrawerOpenMobile, setIsDrawerOpenMobile ] = useState(false);

    const handleDrawerToggle = () => {
        setIsDrawerOpenMobile(!isDrawerOpenMobile)
    }

    return (
    <AppBar
        position="fixed"
        sx={{/*
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        */}}
        style={{backgroundColor: '#222222'}}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Enigma Labs
          </Typography>
        </Toolbar>
      </AppBar>
    );
}   

export default PanelBar