import { createSlice } from "@reduxjs/toolkit";
import { account } from '../appwrite/appwriteConfig'
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
            state.user = {};
        },

    }
})

export const {login, logout} = slice.actions
export default slice.reducer

export function fetchUser () {
    return async function getUser(dispatch, getState) {
        const userData = await account.get()
        .then(
            function(response) {
                dispatch(login(response))
            },
            function(error) {
                console.log('user not found!')
            }
        )
    }
}