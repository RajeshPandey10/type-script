import { Link } from "react-router-dom";
import ProductsTable from "../../components/ProductsTable";

import products from "../../data/products.json";
const ProductsList = () => {
  return (
    <div className="">
      <div className="flex justify-between">
        <h1 className="text-4xl font-semibold border-b border-amber-300 text-center">
          Products List
        </h1>
        <div className="text-right rounded-xl bg-slate-100 p-4 text-slate-800">
          <Link to="/products/add">Add products +</Link>
        </div>
      </div>
      <ProductsTable products={products} />
    </div>
  );
};

export default ProductsList;
