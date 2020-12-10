import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import rootReducer, { RootState } from './reducers/rootReducer';

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>

const store = configureStore({
  reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch

export default store