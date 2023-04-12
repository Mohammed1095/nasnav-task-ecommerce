import React from "react";

function Cta({ children, icon }) {
  return (
    <a href="#" className="cta-btns flex-center">
      {icon}
      <span className="cta-btns-text">{children}</span>
    </a>
  );
}

export default Cta;
