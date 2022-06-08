import { configureStore } from '@reduxjs/toolkit';
import foodData from '../reducers/foodData';
import session from '../reducers/session';
import sliderDrawer from '../reducers/sliderDrawer';

export const store = configureStore({
  reducer: {
    foodData,
    session,
    sliderDrawer
  },
});
