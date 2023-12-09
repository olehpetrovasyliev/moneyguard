import { createSlice, isAnyOf } from '@reduxjs/toolkit/dist';
import {
  addTransactionThunk,
  getTransactionsCategoriesThunk,
  getAllTransactionsThunk,
  delTransactionThunk,
  getSummaryThunk,
  editTransactionThunk,
} from './transactionOperations';

const initialState = {
  transactions: [],
  categories: [],
  categoriesSummary: [],
  incomeSummary: 0,
  expenseSummary: 0,
  periodTotal: 0,
  isLoading: false,
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
};
const handleAllTransactions = (state, { payload }) => {
  state.transactions = payload;
  state.isLoading = false;
};
const handlePending = state => {
  state.isLoading = true;
};

const handleCategories = (state, { payload }) => {
  state.categories = payload;
  state.isLoading = false;
};
const handleSummary = (state, { payload }) => {
  state.categoriesSummary = payload.categoriesSummary;
  state.expenseSummary = payload.expenseSummary;
  state.incomeSummary = payload.incomeSummary;
  state.periodTotal = payload.periodTotal;
  state.isLoading = false;
};

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllTransactionsThunk.fulfilled, handleAllTransactions)
      .addCase(getTransactionsCategoriesThunk.fulfilled, handleCategories)
      .addCase(getSummaryThunk.fulfilled, handleSummary)

      .addMatcher(
        isAnyOf(
          getAllTransactionsThunk.rejected,
          editTransactionThunk.rejected,
          addTransactionThunk.rejected,
          delTransactionThunk.rejected,
          getTransactionsCategoriesThunk.rejected,
          getSummaryThunk.rejected
        ),
        handleRejected
      )
      .addMatcher(
        isAnyOf(
          getAllTransactionsThunk.pending,
          editTransactionThunk.pending,
          addTransactionThunk.pending,
          delTransactionThunk.pending,
          getTransactionsCategoriesThunk.pending,
          getSummaryThunk.pending
        ),
        handlePending
      );
  },
});

export const transactionsReducer = transactionSlice.reducer;
