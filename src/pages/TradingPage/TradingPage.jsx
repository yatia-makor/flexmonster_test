import { Grid, Box, Typography, Card, CardContent } from '@mui/material';
import React from 'react'


const PanelPage = () => {
    return (
            <Grid container>
                        <Grid xs={12}>
                            <Box display='flex' style={{height: 80}}>
                                top option
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={3} style={{padding: 5}}>
                            <Box >
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
                            trading panel
                        </Grid>
                        <Grid item xs={12} md={3}>
                            time and sales
                        </Grid>
                    </Grid>
        
    )
}

export default PanelPage;