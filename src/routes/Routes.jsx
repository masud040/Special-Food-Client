import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import NotFound from "../pages/NotFound/NotFound";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import OurShop from "../pages/OurShop/OurShop/OurShop";

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
]);
export default Routes;
