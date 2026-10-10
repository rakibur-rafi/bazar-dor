import React from "react";
import NavTop from "./NavTop";
import NavCategories from "./NavCategories";
import Marquee from "./Marquee";

const Navbar = () => {
  return (
    <header className="w-full bg-white/90 backdrop-blur-xl top-0 sticky z-10">
      <div className="flex flex-col">
        <NavTop />
        <NavCategories />
        <Marquee/>
      </div>
    </header>
  );
};

export default Navbar;