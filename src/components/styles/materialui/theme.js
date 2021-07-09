import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#f3745a",
      main: "#bb4430",
      dark: "#850e08",
      contrastText: "#f5fbef",
    },
    secondary: {
      light: "#ffffb3",
      main: "#ffe082",
      dark: "#caae53",
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: ['"Oswald"', "sans-serif"].join(","),
  },
});

export default theme;
