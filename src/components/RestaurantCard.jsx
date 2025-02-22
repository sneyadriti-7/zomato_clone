import React from "react";

const RestaurantCard = ({ name, image, rating }) => {
  return (
    <div className="restaurant-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

export default RestaurantCard;
