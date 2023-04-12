import React from "react";
import { LogoYeshtry, hambruger } from "../../../../icons/header-icons";
function Logo() {
  return (
    <div className="primary-header">
      <div className="logo">
        <button className="hambruger-btn">{hambruger}</button>
        <h1>{LogoYeshtry}</h1>
      </div>
    </div>
  );
}

export default Logo;
