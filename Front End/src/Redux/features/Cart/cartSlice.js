import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    cartItems: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,

    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cartItems.find((item) => item._id === action.payload._id);

            if (!existingItem) {
                state.cartItems.push(action.payload);
                toast.success('Item added to cart');
            } else {
                toast.error('Item already in cart');
            }
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item._id !== action.payload._id);
            toast.success('Item removed from cart');

        },
        crearCart: (state) => {
            state.cartItems = [];
            toast.success('Cart cleared');
        }
    }



})

export const { addToCart, removeFromCart, crearCart } = cartSlice.actions;
export default cartSlice.reducer;