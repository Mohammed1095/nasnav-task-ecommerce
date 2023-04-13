import { useState } from "react";
import "./quantityBox.scss";

const QuantityBox = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="quantity">
      <div className="quantity-box_label">Quantity</div>
      <div className="quantity-box">
        <button className="quantity-box__button" onClick={handleDecrease}>
          -
        </button>
        <span className="quantity-box__quantity">{quantity}</span>
        <button className="quantity-box__button" onClick={handleIncrease}>
          +
        </button>
      </div>
    </div>
  );
};

export default QuantityBox;
