import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://kapusta-backend.goit.global';

export const newBalanceThunk = createAsyncThunk(
  'balance/new',
  async newBalance => {
    const { data } = await axios.patch('/user/balance', newBalance);
    console.log(data);
    return data;
  }
);
