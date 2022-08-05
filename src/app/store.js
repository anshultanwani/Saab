import { configureStore } from '@reduxjs/toolkit';
import foodData from '../reducers/foodData';
import session from '../reducers/session';
import sliderDrawer from '../reducers/sliderDrawer';
import cart from '../reducers/cart';
import paymentData from '../reducers/paymentData';

export const store = configureStore({
  reducer: {
    foodData,
    session,
    sliderDrawer,
    cart ,
    paymentData
  },
});
