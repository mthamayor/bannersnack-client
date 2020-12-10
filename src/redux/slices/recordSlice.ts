import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Api from '../../api';
import { AppThunk } from '../store';
import { openAlert, setPageLoading } from './settingsSlice';

interface IRecord {
    id: number,
    title: string,
    user: {
      id: number,
      firstName: string,
      lastName: string
    }
    createdAt: string
}

interface IInitialState {
    records: IRecord[]
}

let initialState: IInitialState = {
    records: [
    ]
}

const recordSlice = createSlice({
  name: 'records',
  initialState,
  reducers: {
    setRecords(state, action: PayloadAction<IRecord[]>) {
        state.records = action.payload;
    }
  }
})

export const {
  setRecords
} = recordSlice.actions

export default recordSlice.reducer

export const getRecords = (): AppThunk => async dispatch => {
    dispatch(setPageLoading(true));
    try {
      const res = await Api.getRecords();
      const { data } = res;
      const { getRecords } = data;
      dispatch(setRecords(getRecords))
    } catch (err) {
        dispatch(openAlert({message: err.message, severity: 'error'}));
    }
    dispatch(setPageLoading(false));
  }

  export const createRecord = (title: string): AppThunk => async dispatch => {
    dispatch(setPageLoading(true));
    try {
      const res = await Api.createRecord({title});
      const { data } = res;
      const { createRecord } = data;
      dispatch(setRecords(createRecord));
      dispatch(openAlert({message: 'Entry added', severity: 'success'}));
    } catch (err) {
        dispatch(openAlert({message: err.message, severity: 'error'}));
    }
    dispatch(setPageLoading(false));
  }