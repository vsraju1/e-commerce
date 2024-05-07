import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addItem: (state,action)=>{
            const checkProduct = state.find(item=> item.id === action.payload.id)
            if (checkProduct){
                checkProduct.quantity+=action.payload.quantity;
            } else {
                state.push(action.payload)
            }
        },
        removeItem: (state,action)=>{
           return state = state.filter(item=> item.id !== action.payload)
        },
        resetCart: (state)=>{
            return []
        }
    }
})

export const {addItem, removeItem, resetCart} = cartSlice.actions
export default cartSlice.reducer