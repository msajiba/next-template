import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

const initialState = {
  cartItem: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload, "addToCart");

      let find = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log("find", find);
      if (find >= 0) {
        state.cartItem[find].quantity += 1;
      } else {
        state.cartItem.push(action.payload);
      }
    },
    removeCart: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, decrement } = cartSlice.actions;

const persistConfig = {
  keyPrefix: `next-template-`,
  key: "cart",
  storage,
};

export default persistReducer(persistConfig, cartSlice.reducer);
