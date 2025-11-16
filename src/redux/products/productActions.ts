import { createAsyncThunk } from "@reduxjs/toolkit";
import { create, getAll } from "../../api/products";
import type { productQuery } from "../../types/productRedux";
import type { productFormType } from "../../types/productFormType";
import type { AxiosError } from "axios";

export const getAllProducts = createAsyncThunk("product/all",async(query?:productQuery)=>{
    const response = await getAll(query??{})
    return response.data
})
export const createProducts = createAsyncThunk("product/add",async(data:productFormType,{rejectWithValue})=>{
    try {
        const response = await create(data)
    return response.data
    } catch (error) {
        const axiosError = error as AxiosError
        return rejectWithValue(axiosError.response?.data)   
    }
})




