const styles = (theme) => ({
  container: {
    background: "#bb4430",
    padding: "1rem",
    borderRadius: ".4rem",
    boxShadow: "#231f20 0px 5px 5px",
    "& *": {
      marginTop: theme.spacing(0.5),
    },
  },
  wrapper: {
    maxWidth: "680px",
  },
  messageContainer: {
    width: "100vw",
    maxWidth: "680px",
  },
});

export default styles;
