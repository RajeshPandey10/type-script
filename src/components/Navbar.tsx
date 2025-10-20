import Logo from "./Logo";
import navMenu from "../constants/navMenu";
import { NavLink } from "react-router-dom";
// import { logout } from "../api/auth";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/auth/authSlice";
const Navbar = ({ user }: { user?: boolean }) => {
  const dispatch = useDispatch();
  const logout =()=>{
    dispatch(logoutUser())
  }
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const classForNavLink = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
      : "block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 sticky z-100 top-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-10 py-4 px-2">
          <Logo />
          <button
            data-collapse-toggle="navbar-default"
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <svg
                className="w-5 h-5"
                fill="white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            )}
          </button>
          <div
            className={` w-full md:block md:w-auto ${
              isMobileMenuOpen ? "" : "hidden"
            }`}
            id="navbar-default"
          >
            <ul className="font-medium flex items-center sticky flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {navMenu
                .filter(({ auth }) => (user ? auth : !auth))
                .map(({ label, route }: any) => (
                  <li key={label}>
                    <NavLink to={route} className={classForNavLink}>
                      {label}
                    </NavLink>
                  </li>
                ))}
              {user ? (
                <li>
                  <button
                    // onClick={logout}
                    onClick={logout}
                    className="bg-red-700 text-white py-2 px-5 rounded-xl cursor-pointer"
                  >
                    Logout
                  </button>
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
