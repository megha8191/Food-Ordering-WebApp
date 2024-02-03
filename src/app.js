import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/header";
import Footer from "./components/footer";
import Body from "./components/body";
import About from "./components/about";
import Error from "./components/error";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import RestaurantDetail from "./components/restaurantdetail";
import Login from "./components/login";
import { lazy ,Suspense} from "react";
import Shimmer from "./components/shimmer";


const Servicek= lazy(() => import("./components/service"));

const root = ReactDOM.createRoot(document.getElementById('root'));

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  )
}

const WebRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement:<Error/>,
    children:([
      {
        path:"about",
        element:<About/>
      },
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/contact",
        element:<About/>
      },
      
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/restaurant/:Id",
        element:<RestaurantDetail/>
      },
      {
        path:"/service",
        element:(
          <Suspense fallback={<Shimmer/>}>
            <Servicek/>
          </Suspense>
          )
      }
    ])
  },
  
])

root.render(<RouterProvider router={WebRouter}/>);

