import React, { useState } from "react";
import Navbutton from "./Navbutton";
// import "./style.css";

const Navbar = ({ category, filterCategory }) => {
  return (
    <>
      <div className="nav-container">
        {category.map((title, indx) => {
          let id = indx + title;
          return (
            <Navbutton title={title} filterCategory={filterCategory} key={id} />
          );
        })}
      </div>
    </>
  );
};

export default Navbar;
