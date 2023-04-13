import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./Overlay.scss";
import shirtCart from "../../icons/shirtCart.png";
import closeBtn from "../../icons/closebtn.png";

const Overlay = ({ onClose, onShowModal, onShowCart, onOverFlow }) => {
  const removeoverFlowHiddden = function () {
    document.documentElement.style.overflowY = `auto`;
  };

  useEffect(() => {
    document.documentElement.style.overflowY = `${onOverFlow}`;
    return removeoverFlowHiddden;
  }, [onOverFlow]);

  return ReactDOM.createPortal(
    <div className={`overlay-container ${onShowModal}`}>
      <div className="overlay" onClick={onClose}></div>
      <div className={`cart-details ${onShowCart}`}>
        <div className="close-btn-container">
          <button className="close-btn" onClick={onClose}>
            <img
              src={closeBtn}
              alt="closeBtn"
              width={"2.4rem"}
              height={"2.4rem"}
              className="close-btn-size"
            />
          </button>
        </div>

        <h2 className="overlay-header">My Cart</h2>
        <div className="grid-helper">
          <h3 className="overlay-secondary-header">Cart Summary</h3>
          <div className="cart-product">
            <div className="product-img">
              <img
                src={shirtCart}
                alt="shirtCart"
                width={"2.4rem"}
                height={"2.4rem"}
                className="product-img-size"
              />
            </div>
            <div className="product-details">
              <p className="product-description">
                Lorem ipsum dolor sit amet, consecte adipiscing elit.
              </p>
              <p className="product-quantity">Quantity: 1</p>
              <div className="price-remove">
                <span className="price">9,999 LE</span>
                <button className="btn-remove">remove</button>
              </div>
            </div>
          </div>
          <div className="total">Total: 19,999 LE</div>
          <div className="decision">
            <button className="btn-decision yellow">Review Cart</button>
            <button className="btn-decision violet">Complete Checkout</button>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
};

export default Overlay;
