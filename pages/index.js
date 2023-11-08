import React from "react";
import Sidenav from "@/components/Sidenav/Sidenav";
import Home from "@/components/Home/Home";
import About from "@/components/About/About";
import Portfolio from "@/components/Portfolio/Portfolio";
import Contact from "@/components/Contact/Contact";
import Sidenav2 from "@/components/Sidenav2/Sidenav2";

function index() {
  return (
    <>
      <Sidenav />
      <div className="full-content">
        <Sidenav2 />
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </div>
    </>
  );
}

export default index;
