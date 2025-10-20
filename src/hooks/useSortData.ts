import { useState } from "react";
import type { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../redux/products/productActions";
import type { AppDispatch } from "../redux/store";

export const useSortData = () => {
    const [isAscending, setIsAscending] = useState(true);
    const [limit, setLimit] = useState(10);
    const dispatch = useDispatch<AppDispatch>();

    const sortOrder = (key: string) => {
        dispatch(
            getAllProducts({
                limit,
                sort: { [key]: isAscending ? -1 : 1 },
            })
        );
        setIsAscending((prev) => !prev);
    };
    const getLimitedData = (event: ChangeEvent<HTMLSelectElement>) => {
        const nextLimit = Number(event.target.value);
        setLimit(nextLimit);
        dispatch(getAllProducts({ limit: nextLimit }));
    };

    return { sortOrder, getLimitedData };
};