import {
    createAsyncThunk,
    createSlice
} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    isLoading: false,
    products: [],
    error: null,
}

export const fetchProduct = createAsyncThunk(('products'), async () => {
    const res = await axios.get("");
    return res.data;
})

export const productSlice = createSlice({
    name: 'counter',
    initialState,
    extraReducers: (builder) => {
        // builder.addCase();
    },

    reducers: {
        increment: (state, action) => {

        },
        decrement: (state, action) => {},

    },
})

// Action creators are generated for each case reducer function
export const {
    increment,
    decrement
} = productSlice.actions

export default productSlice.reducer