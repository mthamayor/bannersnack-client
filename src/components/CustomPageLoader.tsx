import { CircularProgress, makeStyles } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/rootReducer';

const useStyles = makeStyles((theme) => ({
    root: {
      position: 'fixed',
      top: 100,
      right: 50,
    },
  }));

export const CustomPageLoader: React.FC = () => {
    const { pageLoading } = useSelector(
        (state: RootState) => state.settings
      );

    const classes = useStyles();

    return pageLoading ? (
        <div className={`${classes.root} d-flex align-items-center`}>
            <CircularProgress size={30} />
        </div>
    ) : <></>
}