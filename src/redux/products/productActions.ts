import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAll } from "../../api/products";

export const getAllProducts = createAsyncThunk("product/all",async()=>{
    const response = await getAll()
    return response.data
})




