import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/restaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const AppLayout = () => {

  const [userInfo, setUserInfo] = useState();

  // Dummy Authentication Logic
  useEffect(()=> {
    // Make an API call & send username and password
    const data = {
      name: "Mohit Kataria"
    }
    setUserInfo(data.name);
  }, [])

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser: userInfo, setUserInfo}}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error/>,
    children:[
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
