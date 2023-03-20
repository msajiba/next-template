import cartSlice from "@/redux/cartSlice";
import productReducer from "@/redux/productSlice";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist/es/";

 let store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartSlice,
    },
});

 store.__persistor = persistStore(store);

 export default store;