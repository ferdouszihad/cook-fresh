import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  return (
    <>
      <nav>
        <Navbar></Navbar>
      </nav>

      <main style={{ minHeight: "calc(100vh - 263px)" }}>
        <Outlet></Outlet>
      </main>

      <footer>
        <ToastContainer />
        <Footer></Footer>
      </footer>
    </>
  );
};

export default Layout;
