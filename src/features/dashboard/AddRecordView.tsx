import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createRecord } from '../../redux/slices/recordSlice';


export default function AddRecordView() {
    const dispatch = useDispatch();
    const [record, setRecord] = useState('');

    const handTitleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setRecord(event.target.value);
    }

    const handleClick = () => {
        dispatch(createRecord(record));
    }
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center my-4">
                <div className="col-7 col-md-6">
                    <TextField id="outlined-basic" fullWidth variant="outlined" onChange={handTitleChange} />
                </div>
                <div className="col-3 col-md-2">
                    <Button disabled={record.length <= 0 ? true : false} variant="contained" size="large" color="primary" onClick={handleClick}>
                        Add
        </Button>
                </div>
            </div>
        </div>
    )
}