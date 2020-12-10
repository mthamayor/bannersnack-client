import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import storage from './lib/storage';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function AppTopBar() {
  const classes = useStyles();

  const links = !storage.getUser() ? (
    <>
      <Link to="/login" className="text-white mx-2" >Login</Link>
      <Link to="/signup" className="text-white mx-2" >Sign Up</Link>
    </>
  ) :
    (
      <Link to="/logout" className="text-white mx-2" >Logout</Link>
    );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Assessment
          </Typography>
          {links}
        </Toolbar>
      </AppBar>
    </div>
  );
}
