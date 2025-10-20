import productsTableHead from "../../constants/productsTableHead";
import { useProductFetch } from "../../hooks/useProductFetch";
import { useSortData } from "../../hooks/useSortData";

import LoadingSpinner from "../LoadingSpinner";
import FilterData from "./FilterData";
import Limits from "./Limits";

//never fetch data on components keep in mind you were going to do this mistake here so this is remainder for you --->keep it in mind rajesh sir
const ProductsTable = () => {
  const { products, loading, error } = useProductFetch();
  const { sortOrder } = useSortData();
  if (error) {
    return <div className="text-center text-red-500 mt-10">{error}</div>;
  }
  return (
    <div className="flex">
      <FilterData />
      <div className="py-10 px-12 border border-gray-300 rounded-xl border-dashed my-8 mx-10 w-5/6">
        <table className="w-full text-left">
          <thead>
            <tr>
              {productsTableHead.map(({ key, label }, index) => (
                <th
                  className="pb-3 cursor-pointer"
                  key={index}
                  onClick={() => sortOrder(key)}
                >
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          {loading ? (
            <tbody>
              <tr>
                <td
                  colSpan={productsTableHead.length}
                  className="py-6 text-center"
                >
                  <LoadingSpinner />
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {products.map((product, index) => (
                <tr
                  key={index}
                  className="border-b border-dashed last:border-b-0 border-gray-300"
                >
                  <td className="py-3 text-left">{index + 1}</td>
                  <td className="py-3 text-left">{product.name}</td>
                  <td className="py-3 text-left">{product.brand}</td>
                  <td className="py-3 text-left">{product.category}</td>
                  <td className="py-3 text-left">Rs.{product.price}</td>
                </tr>
              ))}
            </tbody>
          )}
        </table>

        <Limits />
      </div>
    </div>
  );
};

export default ProductsTable;
