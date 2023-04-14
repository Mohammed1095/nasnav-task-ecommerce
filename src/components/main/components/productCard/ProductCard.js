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
          <div className="product-card__info__price-logo__price">
            <div className="product-card__info__price-logo__price__current">
              {price}LE
            </div>
            <div className="product-card__info__price-logo__price__discount-price">
              {parseInt(price * 0.7).toFixed(2)}LE
            </div>
          </div>
          <div className="product-card__info__price-logo__percentage">30%</div>
          <div className="product-card__info__price-logo__brand-logo">
            {adidas}
          </div>
        </div>
        <div className="product-card__info__rating">
          <RatingDisplay />
          <p>4.2 of 5</p>
          <p>22 rates</p>
        </div>
      </div>
      <div className="product-card__footer">Pickup From: Genena Mall</div>
    </div>
  );
};

export default ProductCard;
