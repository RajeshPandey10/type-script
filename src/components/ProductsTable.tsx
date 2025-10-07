import productsTableHead from "../constants/productsTableHead";
import type { productTypes } from "../types/productType";
//never fetch data on components keep in mind you were going to do this mistake here so this is remainder for you --->keep it in mind rajesh sir
const ProductsTable = ({ products }: productTypes) => {
  return (
    <div className="py-10 px-12 border border-gray-300 rounded-xl border-dashed my-8 mx-10">
      <table className="w-full text-left">
        <thead>
          <tr>
            {productsTableHead.map((tableHead) => (
              <th className="pb-3" key={tableHead}>{tableHead}</th>
            ))}
          </tr>
        </thead>
        <tbody>
            {products.map((product) => (
            <tr key={product.SN} className="border-b border-dashed last:border-b-0 border-gray-300">
              <td className="py-3 text-left">{product.SN}</td>
              <td className="py-3 text-left">{product.Name}</td>
              <td className="py-3 text-left">{product.Brand}</td>
              <td className="py-3 text-left">{product.Category}</td>
              <td className="py-3 text-left">Rs.{product.Price}</td>
            </tr>
          ))}
      
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
