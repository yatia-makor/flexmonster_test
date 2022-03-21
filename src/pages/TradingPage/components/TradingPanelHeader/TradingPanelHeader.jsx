import React from 'react';
import PropTypes from 'prop-types';
import { Grid, ButtonGroup, Button, Typography, Select, InputLabel, MenuItem } from '@mui/material';
import useStyles from './styles';

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];



const TradingPanelHeader = (props) => {
    const { panelType, panelTypeChangeHandler, provider, providerChangeHandler } = props // can be from redux
    const classes = useStyles()

  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center'>
        <Grid item>
            <Typography variant='h5' className={classes.root}>
                Coinbase
            </Typography>
            <Select
            value={'Oliver Hansen'}
            >
            {names.map((name) => (
                <MenuItem
                key={name}
                value={name}
                >
                {name}
                </MenuItem>
            ))}
            </Select>
        </Grid>       
        <Grid item>
            <ButtonGroup variant="outlined" aria-label="outlined button group">
                <Button>Exchanges</Button>
                <Button>OTC LP's</Button>
                <Button>Aggregated</Button>
            </ButtonGroup>
        </Grid>  
        <Grid item />   
    </Grid>
  );
};

TradingPanelHeader.propTypes = {

};

export default TradingPanelHeader;
