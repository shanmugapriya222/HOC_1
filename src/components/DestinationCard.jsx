// src/components/DestinationCard.jsx
import React from "react";

const DestinationCard = ({ destination }) => {
  const { name, location, image, description, price } = destination;

  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="card-content">
        <h3>{name}</h3>
        <p><strong>Location:</strong> {location}</p>
        <p>{description}</p>
        <span>{price}</span>
      </div>
    </div>
  );
};

export default DestinationCard;