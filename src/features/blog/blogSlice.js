import { createSlice } from "@reduxjs/toolkit";
import { blogs } from "../../data";

const initialState = {
    blogs: blogs
}

export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {

    }
})

export default blogSlice.reducer