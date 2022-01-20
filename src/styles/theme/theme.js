import { createTheme } from '@mui/material/styles';

const getDesignTheme = (mode) =>  createTheme({
    palette: mode === 'dark' ? darkThemePalette : lightTherePalette,
    mixins: {
      toolbar: {
        minHeight: 56,
        '@media (min-width:600px)': {
          minHeight: 64
        }
      }
    },
    typography: {
        fontFamily: ['Poppins', 'sans-serif'].join(),
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
            body: {
              margin: "0",
              height: "100vh"
            },
            /* width */
            "::-webkit-scrollbar ": {
              width: "10px",
              height: "10px"
            },
            /* Track */
            "::-webkit-scrollbar-track": {
              background: "#888",
            },
            /* Handle */
            "::-webkit-scrollbar-thumb": {
              background: "#555",
              "border-radius": "10px",
              outline: '1px solid slategrey'
            },
            /* Handle on hover */
            "::-webkit-scrollbar-thumb:hover": {
              background: "#424242",
            },
            "a:-webkit-any-link": {
              "text-decoration": "none"
            }
          
        }
        
      }
    },
    zIndex: {
      drawer: 1099
    }
});

const darkThemePalette = {
    mode: 'dark',
    secondary: {
        main: '#000000'
    }
}

const lightTherePalette = {
    mode: 'light',
}

export default getDesignTheme
