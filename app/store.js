import productReducer from '@/redux/productSlice'
import {
    configureStore
} from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        products: productReducer,
    },
})