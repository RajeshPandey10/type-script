import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, Register } from "../../api/auth";
import type { loginFormType, registerFormType } from "../../types/authFormType";

//action ko name: "auth/login"
export const loginUser = createAsyncThunk("atuh/login", async (data:loginFormType,{rejectWithValue}) => {
    try {
        const response = await login(data)
        return response.data
    } catch (error:any) {
        return rejectWithValue(error.response.data)
    }
});

export const registerUser = createAsyncThunk("auth/register",async(data:registerFormType,{rejectWithValue})=>{
    try {
        const response = await Register(data)
        return response.data
    } catch (error:any) {
        return rejectWithValue(error.response.data)
    }
})