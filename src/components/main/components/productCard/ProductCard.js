import React from "react";
import "./ProductCard.scss";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image-placeholder">
        <img
          src={require("../../../../assets/images/Group 346/Group 346.png")}
          alt="Logo"
        />
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
