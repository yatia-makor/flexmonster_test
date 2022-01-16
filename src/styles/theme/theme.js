import { createTheme } from '@mui/material/styles';

const getDesignTheme = (mode) =>  createTheme({
    palette: mode === 'dark' ? darkThemePalette : lightTherePalette,
    typography: {
        fontFamily: ['Poppins', 'sans-serif'].join(),
      },
      overrides: {
        MuiCssBaseline: {
          '@global': {
            body: {
              margin: "0",
              width: "100vw",
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
