import { combineReducers } from '@reduxjs/toolkit';
import recordReducer from '../slices/recordSlice';
import settingsReducer from '../slices/settingsSlice';

const rootReducer = combineReducers({
    records: recordReducer,
    settings: settingsReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer