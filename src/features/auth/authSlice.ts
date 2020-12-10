import { createSlice } from '@reduxjs/toolkit'


const authSlice = createSlice({
  name: 'user',
  initialState: {
    token: null,
    firstName: null,
    lastName: null,
    email: null
  },
  reducers: {
    setUser(state, action) {
      const { user } = action.payload
      state.token = user.token;
      state.firstName = user.firstName;
      state.email = user.email;
      state.lastName = user.lastName;
    },
  }
})

export const { setUser } = authSlice.actions

export default authSlice.reducer