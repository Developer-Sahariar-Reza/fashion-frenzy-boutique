import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./comonents/Layout/Root";
import ErrorPage from "./comonents/ErrorPage/ErrorPage";
import Home from "./comonents/Home/Home";
import Shop from "./comonents/Shop/Shop";
import Cart from "./comonents/Cart/Cart";
import About from "./comonents/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
        loader: () => fetch("Products.json"),
      },
      {
        path: "/cart",
        element: <Cart />,
        loader: () => fetch("Products.json"),
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
