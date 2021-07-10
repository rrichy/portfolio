import { Grid, Button, TextField } from "@material-ui/core";

const Form = ({ submit, clear }) => {
  return (
    <form onSubmit={submit} autoComplete="off">
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
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Button variant="contained" color="secondary" type="submit" fullWidth>
            Submit
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="secondary"
            onClick={clear}
            fullWidth
          >
            Clear
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Form;
