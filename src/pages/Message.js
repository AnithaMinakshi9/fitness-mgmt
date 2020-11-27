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
      width: 350
    }
  }));
  const classes = useStyles();

  return (
    <div>
      <Button variant="contained" color="default" onClick={handleClickOpen}>
        Message us here
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">{"Reach out to us here!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            Send us a message by entering your email ID, and we'll get back to
            you
          </DialogContentText>
        </DialogContent>
        <form className={classes.container} noValidate>
          <TextField id="name" label="Name" className={classes.textField} />
          <TextField
            id="email"
            label="Email-ID"
            className={classes.textField}
          />
          <TextField
            id="standard-textarea"
            label="Type message here"
            className={classes.textField}
            multiline
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
