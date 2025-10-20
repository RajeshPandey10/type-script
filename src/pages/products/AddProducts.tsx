import AddProductForm from "../../components/products/AddProductForm";

const AddProducts = () => {
  return (
    <>
      <div>
        <div className="flex justify-center">
          <h1 className="text-4xl font-semibold border-b border-amber-300 ">
            Add Product
          </h1>
        </div>
      </div>
      <AddProductForm />
    </>
  );
};

export default AddProducts;
