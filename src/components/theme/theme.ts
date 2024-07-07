import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    mode: "light", //Default theme mode
    primary: {
      main: "#DAF7A6",
    },
    secondary: {
      main: "#FF2456",
      light: "#F5EBFF",
      dark: "#47008F",
    },
  },

  components: {
    // MuiTablePagination: {
    //   styleOverrides: {
    //     root: {
    //       "& .MuiSelect-select": {
    //         backgroundColor: "#FF2456", // Background color of the select box
    //         color: "white", // Text color
    //         borderRadius: "10px", // Example: Customizing border radius
    //         fontWeight: "bold", // Example: Customizing font weight
    //         boxShadow: "none", // Example: Removing default box shadow
    //         "&:hover": {
    //           backgroundColor: "#FF2456", // Hover background color
    //         },
    //         "&.Mui-selected": {
    //           "&:hover": {
    //             backgroundColor: "#FF2456", // Maintain background color when selected and hovered
    //           },
    //         },
    //       },
    //       "& .MuiSelect-icon": {
    //         color: "white", // Color of the dropdown icon
    //       },
    //     },
    //   },
    // },
    MuiPagination: {
      styleOverrides: {
        root: {
          "& .MuiPaginationItem-root": {
            "&.Mui-selected": {
              "&:hover": {
                backgroundColor: "#FF2456", // Maintain background color when selected and hovered
              },
            },
            "&:hover": {
              backgroundColor: "#FF2456", // Example: Customizing hover color
              color: "white", // Example: Customizing hover text color
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px", // Example: Customizing border radius
          fontWeight: "bold", // Example: Customizing font weight
          boxShadow: "none", // Example: Removing default box shadow
          "&.MuiButton-containedPrimary": {
            backgroundColor: "#DAF7A6", // Example: Customizing primary contained button color
            color: "black", // Example: Customizing text color
            "&:hover": {
              backgroundColor: "#C1E9A5", // Example: Customizing hover color
            },
          },
          "&.MuiButton-containedSecondary": {
            backgroundColor: "#FF2456", // Example: Customizing secondary contained button color
            color: "white", // Example: Customizing text color
            "&:hover": {
              backgroundColor: "#E01445", // Example: Customizing hover color
            },
          },
        },
      },
    },
    // Example: Customizing the style of the DataGrid:
  },
});

export default theme;