import { createSlice } from "@reduxjs/toolkit";

import { products } from "../../data";

const initialState = {
    products: products,
    cart: []
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        getCart: (state) => {
            state.cart = JSON.parse(localStorage.getItem('shopping-carts')) ?? [];
        }
    }

});

export const { getCart } = productSlice.actions

export default productSlice.reducer;
