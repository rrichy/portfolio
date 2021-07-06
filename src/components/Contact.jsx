import React from "react";
import {
  CssBaseline,
  Box,
  Container,
  Grid,
  Button,
  TextField,
  Typography,
  ThemeProvider,
} from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";

import "./styles/css/Contact.css";
import useStyles from "./styles/materialui/Contact";

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

const Contact = ({ page, initial }) => {
  const classes = useStyles();
  return (
    <div
      id="contact"
      className={
        initial ? "" : page === "contact" ? "show-contact" : "hide-contact"
      }
    >
      {/* <CssBaseline /> */}
      <ThemeProvider theme={theme}>
        <Container align="center" className={classes.container}>
          <Typography variant="h3" component="h2" gutterBottom>
            Leave a Message
          </Typography>
          <form
            action="https://app.99inbound.com/f/824d5495-4a99-454a-bbf7-140ede97c573/api/forms/5399/entries" /* className={classes.form} */
          >
            <TextField
              label="Name"
              name="name"
              variant="filled"
              color="secondary"
              fullWidth
              required
            />
            <TextField
              label="E-mail"
              name="email"
              variant="filled"
              color="secondary"
              fullWidth
              required
            />
            <TextField
              label="Website"
              name="site"
              variant="filled"
              color="secondary"
              fullWidth
            />
            <TextField
              label="Message"
              name="message"
              multiline
              rows={4}
              variant="filled"
              color="secondary"
              fullWidth
              required
            />
            <Grid container className={classes.buttons} spacing={2}>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button variant="contained" color="secondary" fullWidth>
                  Clear
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default Contact;
