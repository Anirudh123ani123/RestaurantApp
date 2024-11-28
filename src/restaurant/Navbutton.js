import React, { useState } from "react";
const Navbutton = ({ title,filterCategory }) => {
    return (
      <>
        <button className="nav-button" onDoubleClick={()=>filterCategory(title)} >{title}</button>
      </>
    );
  };

  export default Navbutton;