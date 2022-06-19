import { configureStore } from '@reduxjs/toolkit';
import foodData from '../reducers/foodData';
import session from '../reducers/session';
import sliderDrawer from '../reducers/sliderDrawer';
import cart from '../reducers/cart';

export const store = configureStore({
  reducer: {
    foodData,
    session,
    sliderDrawer,
    cart
  },
});
