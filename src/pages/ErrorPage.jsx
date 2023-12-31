import React from "react";
import { Link, useRouteError } from "react-router-dom";
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
      <div className="h-screen flex flex-col items-center justify-center gap-10">
        <h1 className="text-6xl text-red-500">
          {error?.data?.length ? error.data : "No Data Found"}
        </h1>

        <Link to="/" className="btn btn-primary">
          Go to Home
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
