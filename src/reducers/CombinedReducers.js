import { combineReducers } from "@reduxjs/toolkit";
import cartReducers from './CartSlice';
import wishListReducers from './WishListSlice';

const rootReducer = combineReducers({
    products: cartReducers,
    wishList: wishListReducers,
});

export default rootReducer;