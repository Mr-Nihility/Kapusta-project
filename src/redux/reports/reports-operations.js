import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const dateNow = {
	month: 'december',
	year: 2020,
}
console.log(dateNow.month);
console.log(dateNow.year);

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
