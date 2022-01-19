import { Grid, Box, Typography } from '@mui/material';
import React from 'react'


const PanelPage = () => {
    return (
        <Grid container style={{height: '100vh'}}>
            <Grid item xs={12} md={3}>
                instruments
            </Grid>
            <Grid item xs={12} md={6}>
                trading panel
            </Grid>
            <Grid item xs={12} md={3}>
                time and sales
            </Grid>
            <Box style={{ position: 'absolute', bottom: 0}}>
                <Typography>
                    totallll
                </Typography>
            </Box>
        </Grid>
    )
}

export default PanelPage;