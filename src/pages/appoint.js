import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      margin: theme.spacing(2),
      width: 280
    }
  }));
  const classes = useStyles();

  return (
    <div>
      <Button variant="contained" color="default" onClick={handleClickOpen}>
        Book an Appointment
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">{"Book An Appointment"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            Choose a date and time according to your convienience!
          </DialogContentText>
        </DialogContent>
        <form className={classes.container} noValidate>
          <TextField
            id="datetime-local"
            label="Next appointment"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
          />

          <TextField
            id="email"
            label="Email-ID"
            className={classes.textField}
          />
        </form>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
