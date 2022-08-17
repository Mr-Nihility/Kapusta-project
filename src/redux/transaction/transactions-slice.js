import { createSlice } from '@reduxjs/toolkit';
import {
  fetchExpenceTransaction,
  addExpenseTransaction,
  fetchIncomeTransaction,
  addIncomeTransaction,
  newBalanceThunk,
} from './transaction-operations';
import { combineReducers } from '@reduxjs/toolkit';

const initialState = {
  transaction: {
    expenses: {
      expenses: [],
      monthsStats: {},
    },
    income: {
      income: [],
      monthsStats: {},
    },
  },
};

const transaction = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: {
    [addExpenseTransaction.fulfilled]: (state, { payload }) => {
      state.expenses.expenses = payload.expenses;
      state.expenses.monthsStats = payload.monthsStats;
    },

    [addIncomeTransaction.fulfilled]: (state, { payload }) => {
      state.income.income = payload.income;
      state.income.monthsStats = payload.monthsStats;
    },
    [fetchExpenceTransaction.fulfilled]: (state, { payload }) => {
      state.expenses.expenses = payload.expenses;
      state.expenses.monthsStats = payload.monthsStats;
    },

    [fetchIncomeTransaction.fulfilled]: (state, { payload }) => {
      state.income.income = payload.income;
      state.income.monthsStats = payload.monthsStats;
    },
    [newBalanceThunk.fulfilled]: (state, { payload }) => {
      state.newBalance = payload.newBalance;
    },
  },
});

const loading = createSlice({
  name: 'loading',
  initialState: {
    loading: false,
  },
  extraReducers: {
    [fetchExpenceTransaction.pending]: (state, { payload }) => true,
    [fetchExpenceTransaction.fulfilled]: (state, { payload }) => false,
    [fetchExpenceTransaction.rejected]: (state, { payload }) => false,
    [fetchIncomeTransaction.pending]: (state, { payload }) => true,
    [fetchIncomeTransaction.fulfilled]: (state, { payload }) => false,
    [fetchIncomeTransaction.rejected]: (state, { payload }) => false,
    [addExpenseTransaction.pending]: (state, { payload }) => true,
    [addExpenseTransaction.fulfilled]: (state, { payload }) => false,
    [addExpenseTransaction.rejected]: (state, { payload }) => false,
    [addIncomeTransaction.pending]: (state, { payload }) => true,
    [addIncomeTransaction.fulfilled]: (state, { payload }) => false,
    [addIncomeTransaction.rejected]: (state, { payload }) => false,
    [newBalanceThunk.pending]: (state, { payload }) => true,
    [newBalanceThunk.fulfilled]: (state, { payload }) => false,
    [newBalanceThunk.rejected]: (state, { payload }) => false,
  },
});

export default combineReducers({ transaction, loading });
