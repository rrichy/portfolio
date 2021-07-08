import React from "react";
import {
  Container,
  Grid,
  Button,
  TextField,
  Typography,
  ThemeProvider,
} from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import axios from "axios";

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

const Submit = (e) => {
  const fields = [...e.target.elements].map((a) => a.value);
  const [name, email, website, message] = fields;
  // console.log({ name, email, website, message });
  e.preventDefault();

  axios({
    method: "post",
    url: "https://app.99inbound.com/api/e/_wTr9EZA",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: { name, email, website, message },
  }).then((response) => {
    console.log(response);
  });
};

const Clear = () => {
  const input = [...document.querySelectorAll("input")];
  const textarea = document.querySelector("textarea");

  input.forEach((i) => (i.value = ""));
  textarea.value = "";
};

const Contact = () => {
  const classes = useStyles();
  return (
    <div id="contact" className="show-contact">
      <ThemeProvider theme={theme}>
        <Container align="center" className={classes.container}>
          <Typography variant="h3" component="h2" gutterBottom>
            Leave a Message
          </Typography>
          <form onSubmit={Submit} autoComplete="off">
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
              name="website"
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
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={Clear}
                  fullWidth
                >
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
