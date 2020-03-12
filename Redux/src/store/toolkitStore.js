import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import toolkitModule from "./toolkitModule";

// ここで他のredusersをつなげてrootReducerを作る
const rootReducer = combineReducers({
    counter: toolkitModule.reducer
});

export const setupStore = () => {
    const store = configureStore({
        reducer: rootReducer
    });
    return store
}
