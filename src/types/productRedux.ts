import type { productTypes } from "./productType"

export type productState = {
    loading: boolean;
    error: string | null;
    products: productTypes[];
}