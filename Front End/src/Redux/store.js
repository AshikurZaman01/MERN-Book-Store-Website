import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../Redux/features/Cart/cartSlice.js';
import bookApi from './features/book/bookApi.js';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        [bookApi.reducerPath]: bookApi.reducer,
    },

    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(bookApi.middleware)
    },
});

export default store;
