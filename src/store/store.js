import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from './createSlice';

const store = configureStore({
    reducer: sliceReducer
})

export default store;