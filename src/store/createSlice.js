import { createSlice } from "@reduxjs/toolkit";
import { account } from '../appwrite/appwriteConfig'
import { useNavigate } from "react-router-dom";
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
        const navigate = useNavigate()
        const userData = await account.get()
        .then(
            function(response) {
                dispatch(login(response))
                console.log(response)
                navigate('/home')
            },
            function(error) {
                console.log('user not found!')
            }
        )
    }
}