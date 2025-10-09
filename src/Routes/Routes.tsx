import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { lazy } from "react";
import Layout from "../layout/Layout";
import AuthLayout from "../layout/AuthLayout";
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const ProductsList = lazy(() => import("../pages/products/ProductsList"));
const AddProducts = lazy(() => import("../pages/products/AddProducts"));
const Contact = lazy(()=>import("../pages/Contact"))
const Routes = ({user}:{user:boolean}) => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
     <Route element = {<AuthLayout user={user}/>}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products">
          <Route index element={<ProductsList />} />
          <Route path="add" element={<AddProducts />} />
        </Route>
        <Route path="contact" element={<Contact/>}/>
     </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Routes;
