import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state,action)=>{
            const checkProduct = state.products.find(item=> item.id === action.payload.id)
            if (checkProduct){
                checkProduct.quantity+=action.payload.quantity;
            } else {
                state.products.push(action.payload)
            }
        },
        removeItem: (state,action)=>{
            state.products = state.products.filter(item=> item.id !== action.payload)
        },
        resetCart: (state)=>{
            state.products = []
        }
    }
})

export const {addItem, removeItem, resetCart} = cartSlice.actions
export default cartSlice.reducer