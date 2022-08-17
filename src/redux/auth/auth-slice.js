import { createSlice } from '@reduxjs/toolkit';

import { signIn, logIn, logOut, getCurrentUser } from './auth-operations';

import { newBalanceThunk } from 'redux/transaction/transaction-operations';

const initialState = {
  userData: {
    email: '',
    balance: 0.0,
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
      state.userData = payload.userData;
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
      state.sid = payload.sid;
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
    [newBalanceThunk.fulfilled]: (state, { payload }) => {
      state.userData.balance = Number(payload.newBalance);
    },
  },
});

export default authSlice.reducer;
