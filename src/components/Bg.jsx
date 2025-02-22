import React from "react";
import "./Bg.css"; // Import CSS for styling

const Bg = () => {
  return (
    <div className="bg-container">
     
      <div className="search-container">
        <h2>Zomato Clone</h2>
        <div>
        <input type="text" placeholder="Search for restaurants..." className="search-input" />
        <button className="search-btn">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Bg;
