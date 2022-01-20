import React from 'react';

import Box from '@mui/material/Box';

import PanelBar from '../PanelBar/PanelBar';
import PanelDrawer from '../PanelDrawer/PanelDrawer';

const PanelWrapper = ({children}) => {

    return (
    <React.Fragment>
        <PanelBar />
        <Box style={{display: 'flex'}}>
            <PanelDrawer />
            <Box component='main' sx={{ flexGrow: 1 }} >
                <Box sx={(theme) => ({...theme.mixins.toolbar})} />
                {children}
            </Box>
        </Box>
    </React.Fragment>
    )
}

export default PanelWrapper
