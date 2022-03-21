import React, { useState, useMemo, useContext } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

import ThemeModeContext from './context/ThemeModeContext';
import getTheme from './theme/theme';


const ThemeProvider = ({ children }) => {
    const defaultThemeName = useContext(ThemeModeContext)
    const [mode, setMode] = useState(defaultThemeName)

    const themeMode = useMemo(() => ({
        toggleThemeMode: () => {
            setMode((prevStateMode) => prevStateMode === 'light' ? 'dark' : 'light')
        }
    }), [])

    const theme = useMemo(() => getTheme(mode), [mode])

    return (
    <ThemeModeContext.Provider value={themeMode}>
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </MuiThemeProvider>
    </ThemeModeContext.Provider>
    )    
}

export default ThemeProvider