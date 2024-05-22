import Basket from "../pages/site/Basket/Basket";
import Detail from "../pages/site/Detail/Detail";
import Home from "../pages/site/Home/Home";
import Siteroot from "../pages/site/Siteroot";
import Adminroot from "../pages/admin/Adminroot";
import Add from "../pages/admin/Add/Add"
const ROUTES = [
  {
    path: "/",
    element: <Siteroot/>,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "detail/:id",
        element: <Detail />,
      },{
        path: "basket",
        element: <Basket/>
      },
    ],
  },
  {
    path: "/admin",
    element: <Adminroot/>,
    children: [
      {
        path: "",
        element: <Add/>,
      },
    ],
  },
];

export default ROUTES;