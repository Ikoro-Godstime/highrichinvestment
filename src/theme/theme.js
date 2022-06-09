import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: ["Josefin Sans", "sans-serif"].join(","),
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
        },
      },
      defaultProps: {
        elevation: false,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
      defaultProps: {
        disableElevation: true,
      },
    },
  },
});

export const themeTwo = createTheme({
  palette: {
    mode: "dark",
    background: {
      paper: "#131722",
      default: "#131722",
    },
  },
  typography: {
    fontFamily: ["Josefin Sans", "sans-serif"].join(","),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
      defaultProps: {
        disableElevation: true,
      },
    },
  },
});
