import { createSlice } from "@reduxjs/toolkit";

export const WishListSlice = createSlice({
    name: 'wishList',
    initialState: [],
    reducers: {
        addtoWishList: (state,action)=>{
            const checkProduct = state.find(item=> item.id === action.payload.id)
            if (checkProduct){
                checkProduct.quantity+=action.payload.quantity;
            } else {
                state.push(action.payload)
            }
        },
        removeWishList: (state,action)=>{
            return state= state.filter(item=> item.id !== action.payload)
        },
        resetWishList: (state)=>{
            return []
        }
    }
})

export const {addtoWishList, removeWishList, resetWishList} = WishListSlice.actions
export default WishListSlice.reducer