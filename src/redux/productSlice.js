import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  products: [],
  product: {},
  error: null,
  cartItem : []
};

export const fetchProducts = createAsyncThunk("products", async () => {
  const { data } = await axios.get("/api/product");
  return data;
});

export const fetchSingleProduct = createAsyncThunk("product", async (id) => {
  const { data } = await axios.get(`/api/product/${id}`);
  return data;
});

export const productSlice = createSlice({
  name: "products",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = [...action.payload];
      state.error = null;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.products = [];
      state.error = action.error.message;
    });

    // SINGLE_PRODUCT
    builder.addCase(fetchSingleProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.product =action.payload
      state.error = null;
    });
    builder.addCase(fetchSingleProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.product = {};
      state.error = action.error.message;
    });
  },

  reducers: {
    increment: (state, action) => {},
    decrement: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = productSlice.actions;

export default productSlice.reducer;
