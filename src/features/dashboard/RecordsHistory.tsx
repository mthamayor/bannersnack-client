import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';
import { getRecords } from '../../redux/slices/recordSlice';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function RecordsHistory() {
    const classes = useStyles();
    const { records } = useSelector(
        (state: RootState) => state.records
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRecords());
    }, [dispatch]);

    return (
        <div className="container">
            <div className="row justify-content-center my-4">
                <div className="col-10 col-md-8">
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant="body1">
                                            ID
                                    </Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Typography variant="body1">
                                            Title
                                    </Typography>
                                    </TableCell>
                                    <TableCell align="right"><Typography variant="body1">
                                        Author
                                    </Typography></TableCell>
                                    <TableCell align="right"><Typography variant="body1">
                                        Date
                                    </Typography></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {records.map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell component="th" scope="row">
                                            {row.id}
                                        </TableCell>
                                        <TableCell align="right">{row.title}</TableCell>
                                        <TableCell align="right">{row.user.firstName}{' '}{row.user.lastName}</TableCell>
                                        <TableCell align="right">{(new Date(row.createdAt)).toUTCString()}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    )
}