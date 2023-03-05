import { createTheme } from "@mui/material";




export const customTheme = createTheme({
    palette: {
        mode: 'light', // TODO: Más adelante configurar el modo dark
        primary: {
            light: '#516b75',
            main: '#264653',
            dark: '#1a313a',
        },
        secondary: {
            light: '#edcf87',
            main: '#E9C46A',
            dark: '#a3894a',
        },
        success: {
            light: '#54b0a5',
            main: '#2A9D8F',
            dark: '#1d6d64',
        },
        error: {
            light: '#eb8b73',
            main: '#E76F51',
            dark: '#a14d38',
        },
        info: {
            light: '#f6b480',
            main: '#F4A261',
            dark: '#aa7143',
        },
    },
    typography: {
        fontFamily: [
            'Montserrat',
            'Open Sans'
        ],
        h1: {
            fontFamily: 'Montserrat',
            fontWeight: 800,
        },
        h2: {
            fontFamily: 'Montserrat',
            fontWeight: 700,
        },
        h3: {
            fontFamily: 'Montserrat',
            fontWeight: 600,
        },
        h4: {
            fontFamily: 'Montserrat',
            fontWeight: 500,
        }
    }
})