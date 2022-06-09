import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart/reducer';
import bikeReducer from './bikes/reducer';
import userReducer  from "./auth/userSlice";

export const store = configureStore({
    reducer:{
        cart:cartReducer,
        bike:bikeReducer,
        user:userReducer,
    }
})
