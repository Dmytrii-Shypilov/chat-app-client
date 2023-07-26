import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./user/user-slice";

const reducer = combineReducers({
    user: userReducer
})

export const store = configureStore({
    reducer,
})
