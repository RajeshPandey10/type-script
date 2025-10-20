import type { productTypes } from "./productType"

export interface productQuery {
    filters?: {
        [key: string]: string; // filter by name, brand etc.
    };
    sort?: {
        [key: string]: 1 | -1;
    };
    limit?: number;
    offset?: number;
}

export type productState = {
    loading: boolean;
    error: string | null;
    products: productTypes[];
    query:productQuery
}

export type FilterState = {
  [key: string]: string;
};