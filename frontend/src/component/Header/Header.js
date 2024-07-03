import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <header className="header flex justify-between bg-white px-20 border py-4">
      <Link to="/" className="font-bold text-xl">Add Resturant</Link>
      <Link to="/add-resturant" className="underline">Add Resturant</Link>
    </header>
  );
};

export default Header;
