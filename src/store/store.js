import { configureStore, combineReducers } from "@reduxjs/toolkit";

// import listReducer from "../store/reducers/listReducer";
import { authSlice } from "../modules/Auth/index";
import { catalogSlice } from "../modules/Catalog/index";




const rootReducer = combineReducers({
    auth: authSlice,
    catalog: catalogSlice
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;