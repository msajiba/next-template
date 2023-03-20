import { createSlice } from "@reduxjs/toolkit";
import { persistReducer} from "redux-persist";

import storage from "redux-persist/lib/storage";

const initialState = {
  cartItem : []
};


export const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action) => {
        state.cartItem = [...state.cartItem, action.payload];
    },
    removeCart: (state, action) => {
        
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = cartSlice.actions;

const persistConfig = {
    keyPrefix: `next-template-`,
    key: "cart",
    storage,
  };
  
export default persistReducer(persistConfig, cartSlice.reducer);

