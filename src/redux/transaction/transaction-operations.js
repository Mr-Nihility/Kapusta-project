import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchExpenceTransaction = createAsyncThunk(
  'transaction/fetchExpenseTransactions', //под капотом создаст статусы
  async (_, { rejectedWithValue }) => {
    try {
      const { data } = await axios.get('/transaction/expense');
      console.log(data);
      return data;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);

export const addExpenseTransaction = createAsyncThunk(
  'trancaction/addExpenseTransaction',
  async (trancactionItem, { rejectedWithValue }) => {
    try {
      const { data } = await axios.post(
        '/transaction/expense',
        trancactionItem
      );
      return data;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);
export const fetchIncomeTransaction = createAsyncThunk(
  'transaction/fetchIncomeTransaction', //под капотом создаст статусы
  async (_, { rejectedWithValue }) => {
    try {
      const { data } = await axios.get('/transaction/income');

      return data;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);

export const addIncomeTransaction = createAsyncThunk(
  'trancaction/addIncomeTransaction',
  async (trancactionItem, { rejectedWithValue }) => {
    try {
      const { data } = await axios.post('/transaction/income', trancactionItem);
      return data;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
)





export const newBalanceThunk = createAsyncThunk(
  'balance/new',
  async newBalance => {
    const { data } = await axios.patch('/user/balance', newBalance);
    console.log(data);
    return data;
  }
);


// export const deleteTrancaction = createAsyncThunk(
//     'trancaction/deleteTrancaction',

//     async (id, { rejectedWithValue }) => {
//         try {
//             await axios.delete(`/trancaction/${id}`)
//             return id
//         } catch (error) {
//             return rejectedWithValue(error)
//         }

//     }

// )
