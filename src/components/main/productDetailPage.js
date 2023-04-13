import React from "react";
import "./ProductDetailPage.scss";
import RatingDisplay from "./components/ratingDisplay/RatingDisplay";

const ProductDetailPage = () => {
  return (
    <div className="product-detail">
      <div className="product-images">
        <div className="main-image">
          <img
            src={require("../../assets/images/Group 333/Group 333@2x.png")}
            alt="Product Image"
          />
        </div>
        <div className="preview-images">
          <img
            src={require("../../assets/images/Group 333/Group 333.png")}
            alt="Product Preview 1"
          />
          <img
            src={require("../../assets/images/Group 335/Group 335.png")}
            alt="Product Preview 2"
          />
          <img
            src={require("../../assets/images/Group 331/Group 331.png")}
            alt="Product Preview 3"
          />
          <img
            src={require("../../assets/images/Group 329/Group 329.png")}
            alt="Product Preview 4"
          />
        </div>
      </div>
      <div className="product-details">
        <div className="logo">
          <img
            src={require("../../assets/images/Group 346/Group 346.png")}
            alt="Logo"
          />
        </div>
        <div className="product-info">
          <p className="product-description">Adidas black t-shirt</p>
          <p className="product-category">Men</p>
          <div className="product-rate">
            <RatingDisplay />
            <p>4.9 of 5</p>
            <p>22 rates</p>
          </div>
          <div className="product-price">
            <p className="product-current-price">9,999 LE</p>
            <p className="product-discount-price">6,999 LE</p>
            <div className="product-discount-percentage">30% off</div>
          </div>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
