import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAlert {
    open?: boolean,
    severity: "success" | "info" | "warning" | "error" | undefined
    message: string
}

interface ILoading {
    pageLoading: boolean
}

type ISettingsState = {
} & IAlert & ILoading

let initialState: ISettingsState = {
    open: false,
    message: '',
    severity: 'success',
    pageLoading: false,
}

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    closeAlert(state) {
        state.open = false;
        state.message = '';
    },

    openAlert(state, action: PayloadAction<IAlert>){
        const {payload} = action;
        state.open = true;
        state.message = payload.message;
        state.severity = payload.severity;
    },

    setPageLoading(state, action: PayloadAction<boolean>){
        state.pageLoading = action.payload;
    }
  }
})

export const {
  closeAlert,
  openAlert,
  setPageLoading
} = settingsSlice.actions

export default settingsSlice.reducer
