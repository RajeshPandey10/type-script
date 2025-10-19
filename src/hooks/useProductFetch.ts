import { useQuery } from '@tanstack/react-query';
import { getAll } from '../api/products';
import type { productTypes } from '../types/productType';


export const useProductFetch = () => {
    const { data: products = [], isLoading: loading, error } = useQuery<productTypes[]>({
        queryKey: ['products'],
        queryFn: async () => {
            const response = await getAll();
            return response.data;
        },
        staleTime: 1000 * 60 * 5, // 5 minutes
        gcTime: 1000 * 60 * 10, // 10 minutes (formerly cacheTime)
        retry: 2, // Retry failed requests 2 times
    });

    return {
        loading,
        error: error ? (error as Error).message : null,
        products,
    };
};
