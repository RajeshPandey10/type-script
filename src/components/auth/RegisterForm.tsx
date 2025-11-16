import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { EMAIL_REGEX } from "../../constants/regex";
import { Link } from "react-router-dom";

// import { Register } from "../../api/auth";
import type { registerFormType } from "../../types/authFormType";
// import { useState } from "react";
import Loader from "../Loader";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../redux/store";
import { registerUser } from "../../redux/auth/authActions";


import {toast, ToastContainer } from "react-toastify";
import { clearAuthStatus } from "../../redux/auth/authSlice";

const RegisterForm = () => {
  // const [loading, setLoading] = useState(false);
  // const [success, setSuccess] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, success } = useSelector(
    (state: RootState) => state.auth
  );
  const onSubmit = async (data: registerFormType) => {
    // try {
    //   setLoading(true);
    //   await Register(data);
    //   setSuccess(true);
    // } catch (error: any) {
    //   setError("root", { message: error.response.data });
    // } finally {
    //   setLoading(true);
    // }
    dispatch(registerUser(data));
  };
  // const form =useForm();
  // const {register} =form
  const {
    register,
    handleSubmit,
    formState,
    watch,
  } = //setError for setting error when not using state management
    useForm<registerFormType>({
      mode: "all",
    });
  const password = watch("password");
  const { errors } = formState;
  //   const { name, ref, onChange, onBlur } = register("email");
  useEffect(()=>{
     if(success){
       toast.success("successfully added product",{
         autoClose:1000,
         onClose:()=>dispatch(clearAuthStatus())
       })
     }
     if(error ) {toast.error(error,{
       autoClose:1000,
 
     })}
 
   },[error,success,dispatch])
  return (
    <>
      <div className="min-h-[80vh] overflow-hidden  flex items-center justify-center px-4">
        <div className="bg-gray-100 shadow-xl rounded-2xl w-full max-w-md p-4 sm:p-8">
          <h2 className="text-2xl font-extrabold text-center text-gray-800 mb-6">
            Create an Account
          </h2>
          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            {/* Name */}
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
                  required: { value: true, message: "Name is required" },
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
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                //   ref={ref},
                //   name={name},
                //   onChange={onChnage},
                //   onBlur={onBlur}
                {...register("email", {
                  required: { value: true, message: "Email is required" },
                  pattern: {
                    value: EMAIL_REGEX,
                    message: "Invalid Email address",
                  },
                })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
              <p className="text-sm text-red-600 mt-2" role="alert">
                {typeof errors.email?.message === "string"
                  ? errors.email?.message
                  : null}
              </p>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password", {
                  required: { value: true, message: "Password is required" },
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
              <p className="text-sm text-red-600 mt-2" role="alert">
                {typeof errors.password?.message === "string"
                  ? errors.password?.message
                  : null}
              </p>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                {...register("confirmPassword", {
                  required: {
                    value: true,
                    message: "Confirm password is required",
                  },
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
              <p className="text-sm text-red-600 mt-2" role="alert">
                {typeof errors.confirmPassword?.message === "string"
                  ? errors.confirmPassword?.message
                  : null}
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-200"
            >
              {loading ? <Loader /> : "Register"}
            </button>
            <div>
             <ToastContainer/>
            </div>
            {/* Redirect */}
            <p className="text-center text-sm text-gray-600 mt-4">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-600 font-medium hover:underline"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
