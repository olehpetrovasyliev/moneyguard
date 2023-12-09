import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCurrencyRates } from 'services/api/api';

export const fetchCurrencyRatesAsync = createAsyncThunk(
  'currency/fetchCurrencyRates',
  async () => {
    const response = await fetchCurrencyRates();
    return response;
  }
);
