import React, { useState } from 'react';

import Box from '@mui/material/Box';

import PanelBar from '../PanelBar/PanelBar';
import PanelDrawer from '../PanelDrawer/PanelDrawer';

const PanelWrapper = ({children}) => {
    const [ isMobileDrawerOpen, setIsMobileDrawerOpen ] = useState(false);

    return (
        <React.Fragment>
            <PanelBar setIsMobileDrawerOpen={setIsMobileDrawerOpen} />
            <Box style={{display: 'flex'}}>
            <PanelDrawer IsMobileDrawerOpen={isMobileDrawerOpen} setIsMobileDrawerOpen={setIsMobileDrawerOpen} />
            <Box  sx={{ flexGrow: 1, bgcolor: 'background.default' }} >
                <Box sx={{width: '100%', height: 64}}></Box>
                {children}
            </Box>
            </Box>
            
            
        </React.Fragment>
    )
}

export default PanelWrapper
