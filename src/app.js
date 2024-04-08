import React, { Suspense ,lazy , useContext, useEffect, useState} from "react"
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client"
import Header from "./components/header";
import Footer from "./components/footer";
import Body from "./components/body";
import About from "./components/about";
import Error from "./components/error";
import RestaurantDetail from "./components/restaurantdetail";
import Login from "./components/login";
import Shimmer from "./components/shimmer";
import Faq from  "./components/Faq";
import Contact from "./components/contact";
import ProfileContext from "./utils/profileContext";
import { Provider } from "react-redux";
import Store from "./utils/Store";
import Cart from "./components/Cart";

const Service= lazy(() => import("./components/ServiceV2"));
const root = ReactDOM.createRoot(document.getElementById('root'));

const AppLayout = () => {
  const[userlocation,setUserlocation]=useState({
    state:'New york',
    country:'United States'
  })
  const user={
    name:'megha',
    email:'megha@reactdev.com',
  }
  return (
    <>
    <Provider store={Store}>
    <ProfileContext.Provider value={{
      user:user,
      userlocation:userlocation,
      setUserlocation:setUserlocation
    }}>
      <Header />
      <Outlet/>
      <Footer />
      </ProfileContext.Provider>
      </Provider>
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
        element:<Contact/>
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
        path:"/faq",
        element:<Faq/>
      },
      {
        path:"/service",
        element:(
          <Suspense fallback={<Shimmer/>}>
            <Service/>
          </Suspense>
          )
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ])
  },
  
])

// root.render(<RouterProvider router={WebRouter}/>);
root.render(
  <React.StrictMode>
    <RouterProvider router={WebRouter} />
  </React.StrictMode>,  
);
