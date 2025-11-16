import { createSlice } from "@reduxjs/toolkit";
import type { productState } from "../../types/productRedux";
import { createProducts, getAllProducts } from "./productActions";




const initialState: productState = {
    loading: false,
    error: null,
    products: [],
    query: {},
}


export const productSlice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {
        sort: (state, action) => {
            state.query = {
                ...state.query,
                sort: action.payload as { [key: string]: 1 | -1 },
            };
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state) => {
            state.loading = true
            state.error = null

        })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload

            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.payload as string
            })
            .addCase(createProducts.pending, (state) => {
                state.loading = true
                state.error = null

            })
            .addCase(createProducts.fulfilled, (state) => {
                state.loading = false

            })
            .addCase(createProducts.rejected, (state,action) => {
                state.loading = false
                state.error = action.payload as string

            })

    }
})
export const { sort } = productSlice.actions
export default productSlice.reducer