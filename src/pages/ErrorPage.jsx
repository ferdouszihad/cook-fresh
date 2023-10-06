import React from "react";
import { useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";

const ErrorPage = () => {
  const obj = {
    status: 404,
    statusText: "Not Found",
    internal: true,
    data: 'Error: No route matches URL "/about-us"',
    error: {},
  };
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <Navbar></Navbar>
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-6xl text-red-500">{error?.data}</h1>
      </div>
    </>
  );
};

export default ErrorPage;
