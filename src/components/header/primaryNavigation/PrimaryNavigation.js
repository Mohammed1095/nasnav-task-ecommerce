import React from "react";
import {
  contactUs,
  findaStore,
  trackOrder,
} from "../../../assets/icons/header-icons";
import CtaShopNow from "./components/CtaShopNow";
import Logo from "./components/Logo";
import PrimaryNavigationAnchor from "./components/PrimaryNavigationAnchor";

function PrimaryNavigation() {
  return (
    <div className="background-color-yellow">
      <div className="container primary-navigation-container">
        <div className="primary-navigation">
          <Logo></Logo>
          <CtaShopNow></CtaShopNow>

          <div className="primary-navigation-anchors flex-center">
            <ul className="primary-navigation-anchors-list">
              <PrimaryNavigationAnchor icon={contactUs}>
                Contact Us
              </PrimaryNavigationAnchor>
              <PrimaryNavigationAnchor icon={trackOrder}>
                track order
              </PrimaryNavigationAnchor>
              <PrimaryNavigationAnchor icon={findaStore}>
                Find Store
              </PrimaryNavigationAnchor>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrimaryNavigation;
