import { configureStore } from '@reduxjs/toolkit';
import foodData from '../reducers/foodData';
import session from '../reducers/session';

export const store = configureStore({
  reducer: {
    foodData,
    session
  },
});
