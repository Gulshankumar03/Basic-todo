import React from "react";
import Header from "./Header";
import { ModeToggle } from "../ui/ModeToggle";

const Navbar = () => {
  return (
    <div className="w-full mx-auto sticky top-0 z-50 shadow-sm  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10  bg-slate-300 flex items-center  px-8 py-4">
      <Header />
      <ModeToggle />
    </div>
  );
};

export default Navbar;
