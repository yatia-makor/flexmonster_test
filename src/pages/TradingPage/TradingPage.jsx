import React from 'react'
import { Grid, Box, Typography, Card, CardContent } from '@mui/material';

import TradingPanelHeader from './components/TradingPanelHeader/TradingPanelHeader';


const TradingPage = () => {
    console.log('panel created');
    return (
        <Grid container>
            <Grid item xs={12}>
                <TradingPanelHeader />
            </Grid>
            <Grid item xs={12} md={3}>
                <Box>
                    <Card variant="outlined">
                        <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography variant="h5" component="div">
                            sdsdsd
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            adjective
                        </Typography>
                        <Typography variant="body2">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                        </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <Box>
                    <Card variant="outlined">
                        <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography variant="h5" component="div">
                            sdsdsd
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            adjective
                        </Typography>
                        <Typography variant="body2">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                        </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Grid>
            <Grid item xs={12} md={3}>
                <Box>
                    <Card variant="outlined">
                        <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography variant="h5" component="div">
                            sdsdsd
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            adjective
                        </Typography>
                        <Typography variant="body2">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                        </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Grid>
        </Grid>
        
    )
}

export default TradingPage;