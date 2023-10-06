import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layouts/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import RecipiePage from "./pages/RecipiePage.jsx";
import RecipieDetail from "./pages/RecipieDetail.jsx";
import MyKitchen from "./pages/MyKitchen.jsx";
import Statistics from "./pages/Statistics.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "",
        element: <HomePage></HomePage>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/recipies",
        element: <RecipiePage></RecipiePage>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/recipies/:id",
        element: <RecipieDetail></RecipieDetail>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/my-kitchen",
        element: <MyKitchen></MyKitchen>,
      },
      {
        path: "/my-statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("/data.json"),
      },
      // {
      //   path: "/*",
      //   element: <ErrorPage></ErrorPage>,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
