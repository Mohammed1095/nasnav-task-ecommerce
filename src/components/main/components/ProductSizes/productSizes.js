import React from "react";
import "./productSizes.scss";

const ProductSizes = () => {
  const sizes = ["Small", "Medium", "Large", "X-Large", "XX-Large"];

  return (
    <div className="size-container">
      <div className="size-component__label">Size</div>
      <div className="sizes">
        {sizes.map((size) => (
          <div key={size} className="size">
            {size}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSizes;
