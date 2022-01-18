import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Container } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import ThemeModeContext from '../../styles/context/ThemeModeContext';
import { login } from '../../redux/slices/authSlice';

const Login = () => {
    const { toggleThemeMode } = useContext(ThemeModeContext);
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    return (
        <Grid container>
                <Button variant='contained' color='secondary'>ggg</Button>
                <h3 onClick={() => dispatch(login())}>Click me to login</h3>
                <h1>{JSON.stringify(auth)}</h1>
                <Button onClick={toggleThemeMode}>Change theme mode</Button>

                <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
                    </Typography>
                    <Typography variant="h5" component="div">
                    sdfsdfsdfsd
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
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
                </Card>
        </Grid>
           
            
    )
}

export default Login;