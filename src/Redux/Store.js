import { configureStore} from "@reduxjs/toolkit";
import rootReducer from "../reducers/CombinedReducers";

export const store = configureStore({
    reducer: rootReducer,
})
