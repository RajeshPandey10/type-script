import { useForm } from "react-hook-form";
import type { productFormType } from "../../types/productFormType";

const AddProductForm = () => {
  const {
    register,
    handleSubmit,
    formState,
    watch,
    setError,
  } = //setError for setting error when not using state management
    useForm<productFormType>({
      mode: "all",
    });
  const { errors } = formState;
  return (
    <div className="mt-10 flex justify-center">
      <div className="w-3/5 border px-10 py-8 rounded-xl">
        <form>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              //   ref={ref},
              //   name={name},
              //   onChange={onChnage},
              //   onBlur={onBlur}
              {...register("name", {
                required: "Name is required",
              })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
            <p className="text-sm text-red-600 mt-2" role="alert">
              {typeof errors.name?.message === "string"
                ? errors.name?.message
                : null}
            </p>
          </div>
          <div>
            <label
              htmlFor="brand"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Brand
            </label>
            <input
              type="text"
              id="brand"
              //   ref={ref},
              //   name={name},
              //   onChange={onChnage},
              //   onBlur={onBlur}
              {...register("brand", {
                required: "Brand is required",
              })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
            <p className="text-sm text-red-600 mt-2" role="alert">
              {typeof errors.name?.message === "string"
                ? errors.name?.message
                : null}
            </p>
          </div>
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Category
            </label>
            <input
              type="text"
              id="category"
              //   ref={ref},
              //   name={name},
              //   onChange={onChnage},
              //   onBlur={onBlur}
              {...register("category", {
                required: "Category is required",
              })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
            <p className="text-sm text-red-600 mt-2" role="alert">
              {typeof errors.name?.message === "string"
                ? errors.name?.message
                : null}
            </p>
          </div>
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              //   ref={ref},
              //   name={name},
              //   onChange={onChnage},
              //   onBlur={onBlur}
              {...register("price", {
                required: "Price is required",
              })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
            <p className="text-sm text-red-600 mt-2" role="alert">
              {typeof errors.name?.message === "string"
                ? errors.name?.message
                : null}
            </p>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-6 bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-200 text-center"
          >
            Add Product
          </button>
          <div></div>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;
