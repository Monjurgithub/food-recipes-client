import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import Login from "../pages/Login"
import Register from "../pages/Register";
import ChefDetails from "../pages/ChefDetails";
import AllLayout from "../layout/AllLayout";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        }

      ]
    },
    {
      path:"chefs",
      element:<AllLayout></AllLayout>,
      children:[
        {
    
          path: ":id",
          element:<ChefDetails></ChefDetails>,
          loader: ({params})=> fetch(`http://localhost:5000/chefs/${params.id}`)
        
      }
      ]

    }
  ]);