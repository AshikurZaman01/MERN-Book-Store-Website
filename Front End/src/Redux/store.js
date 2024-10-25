import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../Redux/features/Cart/cartSlice.js';

export const store = configureStore({
    reducer: {
        cart: cartReducer, 
    },
});

export default store;
