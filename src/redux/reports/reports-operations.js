import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://62f3b001a84d8c96812999e0.mockapi.io';

export const getDataTransaction = createAsyncThunk(
  'trancaction/getDataTransaction',
  async (_, { rejectedWithValue }) => {
    try {
      const { data } = await axios.get('/transaction/period-data');
			console.log(data);
      return data;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
)
