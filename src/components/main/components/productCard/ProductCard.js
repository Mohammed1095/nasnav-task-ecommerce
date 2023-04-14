import React from "react";
import "./ProductCard.scss";
import { adidas } from "../../../../assets/icons/adidas-logo";
import RatingDisplay from "../ratingDisplay/RatingDisplay";

const ProductCard = ({ product }) => {
  const { image, name, description, price, rating, brandLogo } = product;

  return (
    <div className="product-card">
      <img className="product-card__image" src={image} alt={name} />
      <div className="product-card__info">
        <div className="product-card__info__description">{description}</div>
        <div className="product-card__info__price-logo">
          <div className="product-card__info__price"> {price}</div>
          <div className="product-card__info__brand-logo">{adidas}</div>
        </div>
        <div className="product-card__info__rating">
          <RatingDisplay />
          <p>4.2 of 5</p>
          <p>22 rates</p>
        </div>
        <p></p>
      </div>
    </div>
  );
};

export default ProductCard;
