import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import toolkitModule from "./toolkitModule";

const rootReducer = combineReducers({
    counter: toolkitModule.reducer
});

export const setupStore = () => {
    const store = configureStore({
        reducer: rootReducer
    });
    return store
}
