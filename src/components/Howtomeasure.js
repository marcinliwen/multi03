import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Slide from '@material-ui/core/Slide';
import Close from '../assets/close.svg'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const ColorButton = withStyles((theme) => ({
    root: {
      color: '#fff',
      textTransform: 'inherit',
      backgroundColor: '#2D2D2F',
      '&:hover': {
        backgroundColor: '#2D2D2F',
      },
    },
  }))(Button);
export default function Howtomeasure() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ColorButton variant="outlined"  onClick={handleClickOpen}>
       Jak prawidłowo zmierzyć okno?
      </ColorButton>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            <Close width="24px"/>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
