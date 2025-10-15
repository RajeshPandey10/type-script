import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { lazy } from "react";
import Layout from "../layout/Layout";
import AuthLayout from "../layout/AuthLayout";
import UnAuthLayout from "../layout/UnAuthLayout";

const Login = lazy(() => import("../pages/auth/Login"));
const Register = lazy(() => import("../pages/auth/Register"));
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const ProductsList = lazy(() => import("../pages/products/ProductsList"));
const AddProducts = lazy(() => import("../pages/products/AddProducts"));
const Contact = lazy(() => import("../pages/Contact"));
const NewArrivals = lazy(() => import("../pages/NewArrivals"));
const Routes = ({ user }: { user: boolean }) => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout user={user} />}>
        <Route element={<UnAuthLayout user={user} />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route element={<AuthLayout user={user} />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products">
            <Route index element={<ProductsList />} />
            <Route path="add" element={<AddProducts />} />
          </Route>
          <Route path="contact" element={<Contact />} />
          <Route path="new-arrivals" element={<NewArrivals />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Routes;
