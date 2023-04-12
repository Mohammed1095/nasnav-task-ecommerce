import React from "react";
import { arrowLeft, arrowRight } from "../../../../icons/header-icons";

function CtaShopNow() {
  return (
    <div className="cta-shop-now">
      {arrowLeft}
      <p>
        Valentine's Day Offers! Buy two get one free
        <a href="#" className="shop-now-btn">
          Shop Now
        </a>
      </p>
      {arrowRight}
    </div>
  );
}

export default CtaShopNow;
