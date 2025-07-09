import React, { useState } from "react";
import Navbar from "./Navbar";
import Cardgrid from "./Cardgrid";
import { Menu } from "./apiData";
import "./style.css";
const Restaurant = () => {
  let [itemsTodisplay, setDisplayItems] = useState(Menu);
  let category = [...new Set(Menu.map((card) => card.category)), "All"];

  const filterCategory = (category) => {
    if (category == "All") {
      setDisplayItems(Menu);
      return;
    }
    let filteredItems = Menu.filter((card) => {
      return card.category == category;
    });
    setDisplayItems([...filteredItems]);
  };

  console.log("category:", category);
  return (
    <>
      <div className="container">
        <Navbar category={category} filterCategory={filterCategory} />
        <Cardgrid itemsTodisplay={itemsTodisplay} />
      </div>
    </>
  );
};

export default Restaurant;
