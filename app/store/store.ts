import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../reducers/search";

/**
 * Redux store instance.
 */
export const store = configureStore({
    reducer: {
        search: searchReducer,
    }
})