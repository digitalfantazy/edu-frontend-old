import { configureStore, combineReducers } from "@reduxjs/toolkit";

import listReducer from "./listReducer";



const rootReducer = combineReducers({
    list: listReducer,
});

const store = configureStore({
    reducer: rootReducer
});

export default store;