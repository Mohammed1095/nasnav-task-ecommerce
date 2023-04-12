import React from "react";
import starIcon from "../../images/stars-rate.svg";
import starIconEmpty from "../../images/stars-rate-empty.svg";
import "./ProductDetailPage.scss";

const RatingDisplay = () => {
  const filledStarCount = 4;
  const emptyStarCount = 5 - filledStarCount;

  return (
    <div className="rating-display">
      {[...Array(filledStarCount)].map((_, index) => (
        <img key={index} src={starIcon} alt="Filled Star" />
      ))}
      {[...Array(emptyStarCount)].map((_, index) => (
        <img
          key={index + filledStarCount}
          src={starIconEmpty}
          alt="Empty Star"
          className="empty-star"
        />
      ))}
    </div>
  );
};

export default RatingDisplay;
