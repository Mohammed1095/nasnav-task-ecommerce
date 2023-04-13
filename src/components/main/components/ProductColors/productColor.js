import React, { useState } from "react";
import "./productColor.scss";

const ProductColors = () => {
  const colors = [
    {
      id: 1,
      image: "../../../../assets/images/Group 331/Group 331.png",
    },
    {
      id: 2,
      image: "../../../../assets/images/Group 331/Group 331.png",
    },
  ];
  return (
    <div className="colors-component">
      <div className="colors-component__label">Color</div>
      <div className="colors-component__options">
        {colors.map((color, index) => (
          <div key={index} className="colors-component__option">
            <img
              src={require("../../../../assets/images/Group 331/Group 331.png")}
              alt={color.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductColors;
