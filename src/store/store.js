import { configureStore, combineReducers } from "@reduxjs/toolkit";

import listReducer from "../store/reducers/listReducer";
import { authSlice } from "../modules/Auth/index";
import pdfReducer from "../store/reducers/pdfSlice";




const rootReducer = combineReducers({
    auth: authSlice,
    list: listReducer,
    pdf: pdfReducer
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;