import { createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../api/auth";
import type { loginFormType } from "../../types/authFormType";

//action ko name: "auth/login"
export const loginUser = createAsyncThunk("atuh/login", async (data:loginFormType,{rejectWithValue}) => {
    try {
        const response = await login(data)
        return response.data
    } catch (error:any) {
        return rejectWithValue(error.response.data)
    }
});
