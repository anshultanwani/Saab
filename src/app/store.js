import { configureStore } from '@reduxjs/toolkit';
import countryData from '../reducers/index';

export const store = configureStore({
  reducer: {
    countryData
  },
});
