import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../redux/store';
import { getAllProducts } from '../redux/products/productActions';
import type { productQuery } from '../types/productRedux';


export const useProductFetch = (query?: productQuery) => {
    const dispatch = useDispatch<AppDispatch>();
    const { products, loading, error } = useSelector(
        (state: RootState) => state.product
    );


    useEffect(() => {
        dispatch(getAllProducts(query));
    }, [dispatch, query]);

    return { products, loading, error };
};
