import { configureStore, combineReducers } from "@reduxjs/toolkit";

import listReducer from "../store/reducers/listReducer";
import authSlice from "../store/reducers/authSlice";




const rootReducer = combineReducers({
    auth: authSlice,
    list: listReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;