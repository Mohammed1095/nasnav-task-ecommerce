import React, { useState } from "react";
import {
  addidas,
  cartIcon,
  loginIcon,
  wishListIcon,
} from "../../../assets/icons/header-icons";
import SearchComponent from "./components/SearchComponent";
import Cta from "./components/Cta";
import Overlay from "../../overLay/Overlay";

function CtaContainer() {
  const [modal, setModal] = useState("");
  const [cart, setCart] = useState("");
  const [overflow, setOverflow] = useState("auto");

  const handleClick = (event) => {
    event.preventDefault();
    setModal("show");
    setCart("showCart");
    setOverflow("hidden");
  };

  const handleClose = (event) => {
    event.preventDefault();
    setCart("");
    setModal("");
    setOverflow("auto");
  };
  return (
    <div className="background-color-white">
      <div className="container cta-container">
        <div className="cta flex-center">
          <SearchComponent />
          <div className="logo">{addidas}</div>
          <div className="cta-btns-list flex-center">
            <ul className="cta-btns-ul flex-center">
              <div onClick={handleClick}>
                <Cta icon={cartIcon}>Cart</Cta>
              </div>
              <Overlay
                onClose={handleClose}
                onShowModal={modal}
                onShowCart={cart}
                onOverFlow={overflow}
              />
              <div>
                <Cta icon={wishListIcon}>Wishlist</Cta>
              </div>
              <div>
                <Cta icon={loginIcon}>Login</Cta>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CtaContainer;
