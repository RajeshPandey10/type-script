import axios from "axios";
import config from "../config/config";
import type { productQuery } from "../types/productRedux";

export const getAll = async ({
    limit = 10,
    sort = { createdAt:-1 },
    filters = {},
    offset = 0,
}: productQuery = {}) => {
    const queryParams = `limit=${limit}&offset=${offset}&sort=${encodeURIComponent(
        JSON.stringify(sort)
    )}&filters=${encodeURIComponent(JSON.stringify(filters))}`;
    const response = await axios.get(`${config.apiUrl}/products?${queryParams}`);
    return response;
};

