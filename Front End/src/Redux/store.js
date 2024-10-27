import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../Redux/features/Cart/cartSlice.js';
import bookApi from './features/book/bookApi.js';
import orderApi from './features/Order/orderApi.js';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        [bookApi.reducerPath]: bookApi.reducer,
        [orderApi.reducerPath]: orderApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(bookApi.middleware)
            .concat(orderApi.middleware);
    }
});

export default store;
