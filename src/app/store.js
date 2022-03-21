import { configureStore } from '@reduxjs/toolkit';
import foodData from '../reducers/index';

export const store = configureStore({
  reducer: {
    foodData
  },
});
