import { Link } from "react-router-dom";
import ProductsTable from "../../components/ProductsTable";
import { useProductFetch } from "../../hooks/useProductFetch";
import LoadingSpinner from "../../components/LoadingSpinner";

const ProductsList = () => {
  const { products,loading,error} = useProductFetch();
  if(loading) return <div className="text-center mt-50"><LoadingSpinner/></div>
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
     {error?<div className="text-center text-red-500 mt-10">{error}</div>: <ProductsTable products={products}/>}
    </div>
  );
};

export default ProductsList;
