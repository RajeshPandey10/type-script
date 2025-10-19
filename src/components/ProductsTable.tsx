import productsTableHead from "../constants/productsTableHead";
import type { productTypes } from "../types/productType";
//never fetch data on components keep in mind you were going to do this mistake here so this is remainder for you --->keep it in mind rajesh sir
const ProductsTable = ({ products }: { products: productTypes[] }) => {
  return (
    <div className="py-10 px-12 border border-gray-300 rounded-xl border-dashed my-8 mx-10">
      <table className="w-full text-left">
        <thead>
          <tr>
            {productsTableHead.map((tableHead) => (
              <th className="pb-3" key={tableHead}>
                {tableHead}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((product,index) => (
            <tr
              key={index}
              className="border-b border-dashed last:border-b-0 border-gray-300"
            >
              <td className="py-3 text-left">{index+1}</td>
              <td className="py-3 text-left">{product.name}</td>
              <td className="py-3 text-left">{product.brand}</td>
              <td className="py-3 text-left">{product.category}</td>
              <td className="py-3 text-left">Rs.{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
