import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    background: "#bb4430",
    width: "80%",
    padding: "1rem",
    "& *": {
      marginTop: theme.spacing(0.5),
    },

    "&::before": {
      content: "hello",
    },
  },
  buttons: {},
}));

export default useStyles;
