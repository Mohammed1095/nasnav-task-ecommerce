import React from "react";
import "./ProductDetailPage.scss";
import RatingDisplay from "./components/ratingDisplay/RatingDisplay";
import ProductSizes from "./components/ProductSizes/productSizes";
import ProductColors from "./components/ProductColors/productColor";
import QuantityBox from "./components/productQuantity/quantityBox";

const ProductDetailPage = (props) => {
  return (
    <div className="product-detail">
      <div className="product-images">
        <div className="main-image">
          <img
            src={require("../../assets/icons/shirtCart.png")}
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
          <div className="product-sizes">
            <ProductSizes />
          </div>
          <div className="product-colors">
            <ProductColors />
          </div>
          <div className="product-quantity">
            <QuantityBox />
          </div>
          <div className="product-actions">
            <button
              className="add-to-cart-btn"
              onClick={() => props.onAddToCart()}
            >
              Add to Cart
            </button>
            <button className="pick-from-store-btn">Pickup From Store</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
