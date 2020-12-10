import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/rootReducer';
import { closeAlert } from '../redux/slices/settingsSlice';

const Alert = (props: AlertProps) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const AlertSnackBar = () => {
  const { open, severity, message } = useSelector(
    (state: RootState) => state.settings
  );

  const dispatch = useDispatch();

  const classes = useStyles();

  const handleClose = () => {

    dispatch(closeAlert());
  };

  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AlertSnackBar;
