
import { createBrowserRouter,} from "react-router-dom";
import Root from "../Components/Root";
import Home from "../Pages/Home";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        
      ]
    },
  ]);

export default router;