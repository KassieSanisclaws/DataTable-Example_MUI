import { createTheme } from '@mui/material/styles';


const theme = createTheme({
    palette: {
        mode: "light", //Default theme mode
        primary: {
            main: "#DAF7A6",
        },
        secondary: {
            main: '#FF2456',
            light: '#F5EBFF',
            dark: '#47008F',
        },
    },

    components: {
        MuiPagination: {
            styleOverrides: {
                root: {
                    '&.Mui-selected': {
                        
                        
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '10px', // Example: Customizing border radius
                    fontWeight: 'bold', // Example: Customizing font weight
                    boxShadow: 'none', // Example: Removing default box shadow
                    '&.MuiButton-containedPrimary': {
                        backgroundColor: '#DAF7A6', // Example: Customizing primary contained button color
                        color: 'black', // Example: Customizing text color
                        '&:hover': {
                            backgroundColor: '#C1E9A5', // Example: Customizing hover color
                        },
                    },
                    '&.MuiButton-containedSecondary': {
                        backgroundColor: '#FF2456', // Example: Customizing secondary contained button color
                        color: 'white', // Example: Customizing text color
                        '&:hover': {
                            backgroundColor: '#E01445', // Example: Customizing hover color
                        },
                    },
                },
            },
        },
        // Example: Customizing the style of the DataGrid:
        

    },
});

export default theme;