import { createSlice } from '@reduxjs/toolkit'
import { loginUser, registerUser } from './authActions'
import type { authReduxType } from '../../types/authReduxType';



const initialState: authReduxType = {
    loading: false,
    error: null,
    user: null,
    isAuth: false,
    success: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        logoutUser: (state) => {
            state.user = null;
            state.isAuth = false
            state.success = false
            state.error = null
        },
        clearAuthStatus: (state) => {
            state.success = false
            state.error = null
        }
    },//reducers use only for the synchronous function..so we use another extrareducers for the asynchronous function
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state) => {
            state.loading = true
            state.error = null
        }).addCase(loginUser.fulfilled, (state, action) => {//1.state parameter(pending ,rejected,fullfilled),2.function for the state and the action
            state.loading = false,
                state.user = action.payload,
                state.isAuth = true
        }).addCase(loginUser.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload as string //playload means the data from state or when you are doing action action.playod is the response..
        }).addCase(registerUser.pending, (state) => {
            state.loading = true
            state.error = null
            state.success = false
        }).addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false,
                state.user = action.payload,
                state.isAuth = true
            state.success = true
        }).addCase(registerUser.rejected, (state, action) => {
            state.loading = false
            state.success = false
            state.error = action.payload as string
        });
    },
})



export const { logoutUser, clearAuthStatus } = authSlice.actions

export default authSlice.reducer