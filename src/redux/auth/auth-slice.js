import { createSlice } from '@reduxjs/toolkit';

import { signIn, logIn, logOut, getCurrentUser } from './auth-operations';

const initialState = {
  userData: {
    email: '',
    balance: '',
    id: '',
    transactions: [],
  },
  refreshToken: '',
  accessToken: '',
  sid: '',
  isLogged: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signIn.fulfilled]: (state, { payload }) => {
      state.isLogged = true;
    },
    [logIn.fulfilled]: (state, { payload }) => {
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
      state.sid = payload.sid;
      state.isLogged = true;
      state.userData = payload.userData;
    },
    [logOut.fulfilled]: (state, { payload }) => {
      state.isLogged = false;
      state.accessToken = '';
      state.refreshToken = '';
      state.userData.email = '';
    },
    [getCurrentUser.fulfilled]: (state, { payload }) => {
      state.refreshToken = payload.newRefreshToken;
      state.accessToken = payload.newAccessToken;
      state.sid = payload.newSid;
      state.isLogged = true;
    },
    [getCurrentUser.rejected]: (state, _) => {
      state.refreshToken = '';
      state.accessToken = '';
    },
  },
});

export default authSlice.reducer;
