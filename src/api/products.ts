
import type { productQuery } from "../types/productRedux";
import type { productFormType } from "../types/productFormType";
import api from "./interceptors";

export const getAll = async ({
    limit = 10,
    sort = { createdAt: -1 },
    filters = {},
    offset = 0,
}: productQuery = {}) => {
    const queryParams = `limit=${limit}&offset=${offset}&sort=${encodeURIComponent(
        JSON.stringify(sort)
    )}&filters=${encodeURIComponent(JSON.stringify(filters))}`;
    const response = await api.get(`/products?${queryParams}`);
    return response;
};


export const create = async (data: productFormType) => {
    const createProduct = await api.post(`/products`, data)
    return createProduct;
}
