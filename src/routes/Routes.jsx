import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import NotFound from "../pages/NotFound/NotFound";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import OurShop from "../pages/OurShop/OurShop/OurShop";

import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Cart from "../pages/Cart/Cart";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../pages/AllUser/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItem from "../pages/AddItem/AddItem";
import ManageItem from "../pages/ManageItem/ManageItem";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "shop/:category",
        element: <OurShop />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "allUsers",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "addItem",
        element: (
          <AdminRoute>
            <AddItem />
          </AdminRoute>
        ),
      },
      {
        path: "manageItems",
        element: (
          <AdminRoute>
            <ManageItem />
          </AdminRoute>
        ),
      },
      {
        path: "updateItem/:id",
        element: <UpdateProduct />,
        loader: ({ params }) =>
          fetch(
            `https://special-food-restaurant-server.vercel.app/menu/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);
export default Routes;
