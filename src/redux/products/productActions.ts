import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAll } from "../../api/products";
import type { productQuery } from "../../types/productRedux";

export const getAllProducts = createAsyncThunk("product/all",async(query?:productQuery)=>{
    const response = await getAll(query??{})
    return response.data
})




