import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    user: {}
};

const slice = createSlice({
    name: 'slice', 
    initialState,
    reducers: {
        login(state, action){
            state.isLoggedIn= true
            state.user = action.payload;
        },
        logout(state, action){
            state.isLoggedIn = false;
            state.user = null;
        }
    }
})

export const {login, logout} = slice.actions
export default slice.reducer