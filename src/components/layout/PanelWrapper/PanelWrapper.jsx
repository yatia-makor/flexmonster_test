import React from 'react';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import PanelBar from '../PanelBar/PanelBar';
import PanelDrawer from '../PanelDrawer/PanelDrawer';

const PanelWrapper = ({children}) => {
    return (
        <React.Fragment>
            <PanelBar />
            <PanelDrawer />
            <Box  sx={{ flexGrow: 1, bgcolor: 'background.default' }} >
                
                {children}
            </Box>
            
        </React.Fragment>
    )
}

export default PanelWrapper
