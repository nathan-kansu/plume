import { createTheme } from "@mui/material";
import "@fontsource/poppins";

export const theme = createTheme({
  palette: {
    background: {
      default: "#efefef",
    },
    primary: {
      main: "#131212",
      light: "#ffffff",
    },
    secondary: {
      main: "#ff0100",
    },
  },
  typography: {
    fontFamily: "Poppins",
  },
});
