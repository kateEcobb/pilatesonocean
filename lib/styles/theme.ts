import "@fontsource/sen";
import { createTheme } from "@mui/material/styles";

const colors = ["#22223b", "#4a4e69", "#9a8c98", "#c9ada7", "#f2e9e4"];

declare module "@mui/material/styles" {
  interface Theme {
    colors: string[];
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    colors?: string[];
  }
}
// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: ["Sen", "Arial"].join(","),
  },
  colors,
  palette: {
    primary: {
      main: colors[0],
    },
    secondary: {
      main: colors[2],
    },
    text: {
      primary: colors[0],
      secondary: colors[1],
    },
    background: {
      default: colors[5],
    },
  },
});

export default theme;
