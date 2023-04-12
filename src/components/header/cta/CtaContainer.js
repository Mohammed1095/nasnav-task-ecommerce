import React from "react";
import {
  addidas,
  cartIcon,
  loginIcon,
  wishListIcon,
} from "../../../icons/header-icons";
import SearchComponent from "./components/SearchComponent";
import Cta from "./components/Cta";

function CtaContainer() {
  return (
    <div className="container cta-container">
      <div className="cta flex-center">
        <SearchComponent />
        <div className="logo">{addidas}</div>
        <div className="cta-btns-list flex-center">
          <ul className="cta-btns-ul flex-center">
            <Cta icon={cartIcon}>Cart</Cta>
            <Cta icon={wishListIcon}>Wishlist</Cta>
            <Cta icon={loginIcon}>Login</Cta>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CtaContainer;
