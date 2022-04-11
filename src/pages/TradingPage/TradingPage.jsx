import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { Grid, Box, Typography, Card, CardContent } from '@mui/material';
import * as FlexmonsterReact from 'react-flexmonster';

import TradingPanelHeader from './components/TradingPanelHeader/TradingPanelHeader';
import * as flexMonsterTestReport from '../../reports/flex_monster_test_report.json';
import * as productBaseCurrencyReport from '../../reports/product_base_currency_pie.json';
import * as productQuoteCurrencyReport from '../../reports/product_quote_currency_pie.json';

import 'https://cdn.flexmonster.com/lib/flexmonster.highcharts.js';
import Highcharts from 'highcharts';



const TradingPage = () => {
    const pivotRef = useRef();

    const createHighChart = () => {
        pivotRef.current.flexmonster.off('reportcomplete');
        pivotRef.current.flexmonster.highcharts.getData(
            {
             type: "pie"
            },
            function(data) {
              console.log(data);
              Highcharts.chart("highcharts-container", data);
            },
            function(data) {
              Highcharts.chart("highcharts-container", data);
            }
        );
    }

    const addEnigmaxDatasource = (report) => {
        return {
            dataSource:  {
                type: "api",
                url: 'http://localhost:9500',
                index: `products`
            },
            ...report
        }
    }
    return (
        <Grid container>
            <Grid item xs={12}>
                <TradingPanelHeader />
            </Grid>
            <Grid item xs={12} md={3}>
                <Box>
                <FlexmonsterReact.Pivot 
                    ref={pivotRef}
                    toolbar={false}
                    componentFolder="https://cdn.flexmonster.com/"
                    width="100%"
                    report={addEnigmaxDatasource(productBaseCurrencyReport)}
                    licenseKey={process.env.REACT_APP_FLEX_MONSTER_LICENSE_KEY}
                    reportcomplete={createHighChart}
                />
                </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <Box>
                <FlexmonsterReact.Pivot 
                    toolbar={true}
                    componentFolder="https://cdn.flexmonster.com/"
                    width="100%"
                    report={addEnigmaxDatasource(flexMonsterTestReport)}
                    licenseKey={process.env.REACT_APP_FLEX_MONSTER_LICENSE_KEY}
                />
                </Box>
            </Grid>
            <Grid item xs={12} md={3}>
                <Box>
                    <FlexmonsterReact.Pivot 
                        toolbar={false}
                        componentFolder="https://cdn.flexmonster.com/"
                        width="100%"
                        report={addEnigmaxDatasource(productQuoteCurrencyReport)}
                        licenseKey={process.env.REACT_APP_FLEX_MONSTER_LICENSE_KEY}
                    />
                </Box>
            </Grid>
            <Grid item xs={12} md={3}>
                <Box>
                    <div id='highcharts-container'></div>
                </Box>
            </Grid>
        </Grid>
        
    )
}

export default TradingPage;