import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import HeaderLogo from "./HeaderLogo";

const Layout = () => {
  return (
    <div>
      <HeaderLogo />
      <Navbar />
      <main className="p-4">
        <Outlet /> {/* This is where child pages get rendered */}
      </main>
    </div>
  );
};

export default Layout;
