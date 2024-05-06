import { configureStore } from "@reduxjs/toolkit";
import cartReducers from '../cartState/CartSlice'

export const store = configureStore({
    reducer: cartReducers
})