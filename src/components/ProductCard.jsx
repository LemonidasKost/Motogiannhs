import React from "react";

const ProductCard = ({ title, description, image }) => {
  return (
    <div className="product-card">
      {image && <img src={image} alt={title} className="product-image" />}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProductCard;
