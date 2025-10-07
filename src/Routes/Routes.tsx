import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { lazy } from "react";
import Layout from "../layout/Layout";
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const ProductsList = lazy(() => import("../pages/products/ProductsList"));
const AddProducts = lazy(() => import("../pages/products/AddProducts"));
const Contact = lazy(()=>import("../pages/Contact"))
const Routes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products">
          <Route index element={<ProductsList />} />
          <Route path="add" element={<AddProducts />} />
        </Route>
        <Route path="contact" element={<Contact/>}/>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Routes;
