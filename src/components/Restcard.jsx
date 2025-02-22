import React from "react";
import "./RestCard.css";

const RestCard = ({ name, image, rating, description }) => {
  return (
    <div>

        <div className="rest-card">

        <img src={image} alt={name} className="rest-image" />
        <h3 className="rest-name">{name}</h3>
        <p className="rest-rating">⭐ {rating}</p>
        <p className="rest-description">{description}</p>
        </div>
    </div>
  );
};

export default RestCard;
