import React from "react";
import NavTop from "./NavTop";
import NavCategories from "./NavCategories";
import Marquee from "./Marquee";

const Navbar = () => {
  return (
    <header className="w-full bg-white">
      <div className="flex flex-col">
        <NavTop />
        <NavCategories />
        <Marquee/>
      </div>
    </header>
  );
};

export default Navbar;