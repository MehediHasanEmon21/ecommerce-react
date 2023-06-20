import { configureStore } from "@reduxjs/toolkit";
import  productStore  from "../features/product/ProductSlice";
import blogStore from "../features/blog/blogSlice";

const store = configureStore({
    reducer: {
        product: productStore,
        blog: blogStore
    }
})

export default store;