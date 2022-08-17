import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getDataTransaction = createAsyncThunk(
  'trancaction/getDataTransaction',
  async (_, { rejectedWithValue }) => {
    try {
      const { data } = await axios.get('/transaction/period-data');
      return data;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
)