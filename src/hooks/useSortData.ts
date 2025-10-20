import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../redux/products/productActions";
import type { AppDispatch } from "../redux/store";
import { type FilterState, type productQuery } from "../types/productRedux";

export const useSortData = () => {
    const [isAscending, setIsAscending] = useState(true);
    const [query, setQuery] = useState<productQuery>({})
    const [limit, setLimit] = useState(10);
    const [filters, setFilters] = useState<FilterState>({});
    const dispatch = useDispatch<AppDispatch>();

    const sortOrder = (key: string) => {
        const sort = { [key]: isAscending ? -1 : 1 } as { [key: string]: 1 | -1 }
        setIsAscending((prev) => !prev);
        setQuery({ ...query, sort })
    };
    const getLimitedData = (event: ChangeEvent<HTMLSelectElement>) => {
        const limit = Number(event.target.value);
        setQuery({ ...query, limit })
        setLimit(limit);

    };
    const getFilteredData = () => {
        // const filters = { [key]: e.target.value };
        console.log(filters)
        setQuery({ ...query, filters })


    };

    useEffect(() => {
        dispatch(getAllProducts(query))
    }, [query, dispatch])

    return { sortOrder, getLimitedData, limit, filters, setFilters, getFilteredData };
};