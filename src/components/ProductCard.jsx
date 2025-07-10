// components/ProductCard.jsx
import React from "react";

const ProductCard = ({ title, description }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "1rem",
        width: "250px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h3 style={{ marginBottom: "0.5rem" }}>{title}</h3>
      <p style={{ color: "#555" }}>{description}</p>
    </div>
  );
};

export default ProductCard;
