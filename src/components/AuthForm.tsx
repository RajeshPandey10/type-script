import { useForm } from "react-hook-form";
import type { LoginFormType } from "../types/LoginFormType";
import { EMAIL_REGEX } from "../constants/regex";
import { Link } from "react-router-dom";
import { login,Register } from "../api/auth";

const AuthForm = ({ type }: any) => {
  const onSubmit = async(data: LoginFormType) => {
    if(type==="Login"){
        const response=await login(data)
         console.log(response)
    }
    else {const response =await Register(data)
         console.log(response)
    }
   
  };
  // const form =useForm();
  // const {register} =form
  const { register, handleSubmit, formState } = useForm<LoginFormType>({
    mode: "all",
  });
  const { errors } = formState;
  //   const { name, ref, onChange, onBlur } = register("email");
  return (
    <div className="min-h-[80vh] overflow-hidden  flex items-center justify-center px-4">
      <div className="bg-gray-100 shadow-xl rounded-2xl w-full max-w-md p-4 sm:p-8">
        {type === "Login" ? (
          <h2 className="text-2xl font-extrabold text-center text-gray-800 mb-6">
            Login
          </h2>
        ) : (
          <h2 className="text-2xl font-extrabold text-center text-gray-800 mb-6">
            Create an Account
          </h2>
        )}
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
       

          {/* Email */}
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
          {type === "Register" && (
            <>
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
                    required: { value:true, message: "confirmPassword is Required" },
                  })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
                <p className="text-sm text-red-600 mt-2" role="alert">
                  {typeof errors.name?.message === "string"
                    ? errors.name?.message
                    : null}
                </p>
              </div>
            </>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-200"
          >
            {type || "Register"}
          </button>

          {/* Redirect */}
          {type === "Register" ? (
            <p className="text-center text-sm text-gray-600 mt-4">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-600 font-medium hover:underline"
              >
                Login
              </Link>
            </p>
          ) : (
            <p className="text-center text-sm text-gray-600 mt-4">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-blue-600 font-medium hover:underline"
              >
                Register
              </Link>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
