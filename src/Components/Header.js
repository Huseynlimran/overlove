import React from "react";
import Navigation from "./Navigation";
import Home from "./Home";
import Works from "./Works";

const Header = () => {
  return (
    <div className="header">
      <Navigation />
      <Home />
      <Works />
    </div>
  );
};

export default Header;
