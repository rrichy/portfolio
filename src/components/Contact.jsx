import React, { Component } from "react";
import { Container, Typography, ThemeProvider } from "@material-ui/core";
import axios from "axios";
import { withStyles, withTheme } from "@material-ui/core/styles";

import Form from "./Form";
import "./styles/css/Contact.css"; // if possible, migrate all css styles to material-ui
import styles from "./styles/materialui/Contact";
import theme from "./styles/materialui/theme";

class Contact extends Component {
  state = {
    message: "",
  };

  submit = (e) => {
    const fields = [...e.target.elements].map((a) => a.value);
    const [name, email, website, message] = fields;
    e.preventDefault();

    axios({
      method: "post",
      url: "https://app.99inbound.com/api/e/_wTr9EZA",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      data: { name, email, website, message },
    }).then(({ data }) => {
      const message = data.submission_text;
      this.setState({ message });
    });
  };

  clear = () => {
    const input = [...document.querySelectorAll("input")];
    const textarea = document.querySelector("textarea");

    input.forEach((i) => (i.value = ""));
    textarea.value = "";
  };

  render() {
    const { classes } = this.props;
    return (
      <div id="contact" className="show-contact">
        <div id="contact-wrapper" className={classes.wrapper}>
          <ThemeProvider theme={theme}>
            <Container align="center" className={classes.container}>
              <Typography variant="h3" component="h2" gutterBottom>
                Leave a Message
              </Typography>
              {this.state.message === "" && (
                <Form submit={this.submit} clear={this.clear} />
              )}
              {this.state.message && (
                <div className={classes.messageContainer}>
                  <Typography variant="h4" component="h3" gutterBottom>
                    {this.state.message}
                  </Typography>
                </div>
              )}
            </Container>
          </ThemeProvider>
        </div>
      </div>
    );
  }
}

export default withTheme(withStyles(styles)(Contact));
