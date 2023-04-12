import React from "react";
import "./Footer.css";
import cashOnDelivery from "../../assets/icons/cashOnDelivery.png";
import visa from "../../assets/icons/visa.png";
import mastercard from "../../assets/icons/mastercard.png";
import poweredby from "../../assets/icons/poweredby.png";
import linkedin from "../../assets/icons/linkedin.png";
import twitter from "../../assets/icons/twitter.png";
import instagram from "../../assets/icons//instagram.png";
import facebook from "../../assets/icons/facebook.png";

import { submitIcon, yeshtryLogoH2 } from "../../assets/icons/footer-icons";

function Footer() {
  return (
    <footer>
      <div className="container footer-container">
        <div className="about-description">
          <h2>{yeshtryLogoH2}</h2>
          <p className="about-para">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed dia m
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit
          </p>
        </div>
        <div className="vertical-line"></div>
        <div className="footer-navigation-container">
          <div className="subscribe">
            <label className="newsletter-label" htmlFor="input-mail">
              supscribe to our newsletter
            </label>
            <div className="relative-helper">
              <input
                type="email"
                id="input-mail"
                className="newsletter-input"
              />
              <button className="subscribe-btn">
                subscribe
                {submitIcon}
              </button>
            </div>
          </div>
          <nav className="footer-navigation">
            <ul className="footer-navigation-list">
              <a href="#" className="footer-navigation-anchors">
                About Us
              </a>
              <a href="#" className="footer-navigation-anchors">
                Contact Us
              </a>
              <a href="#" className="footer-navigation-anchors">
                Track Order
              </a>
              <a href="#" className="footer-navigation-anchors">
                Terms & Conditions
              </a>
              <a href="#" className="footer-navigation-anchors">
                Privacy Policy
              </a>
              <a href="#" className="footer-navigation-anchors">
                Sell With Us
              </a>
              <a href="#" className="footer-navigation-anchors">
                Shipping And Returns
              </a>
            </ul>
          </nav>
          <div className="vertical-line"></div>
          <div className="sites">
            <ul className="sites-list">
              <a href="#" className="sites-anchors">
                <img
                  src={facebook}
                  alt="facebook"
                  width={"2.4rem"}
                  height={"2.4rem"}
                  className="social-media-size"
                />
                /YESHTERY
              </a>
              <a href="#" className="sites-anchors">
                <img
                  src={linkedin}
                  alt="linkedin"
                  width={"2.4rem"}
                  height={"2.4rem"}
                  className="social-media-size"
                />
                /YESHTERY
              </a>
              <a href="#" className="sites-anchors">
                <img
                  src={instagram}
                  alt="instagram"
                  width={"2.4rem"}
                  height={"2.4rem"}
                  className="social-media-size"
                />
                /YESHTERY
              </a>
              <a href="#" className="sites-anchors">
                <img
                  src={twitter}
                  alt="twitter"
                  width={"2.4rem"}
                  height={"2.4rem"}
                  className="social-media-size"
                />
                /YESHTERY
              </a>
            </ul>
          </div>
        </div>
        <div className="horizontal-line"></div>
        <div className="footer-copyrights">
          <div className="copyrights">
            &copy; 2021 yeshtery, all rights reserved.
          </div>
        </div>
        <div className="payment-methods-powered-by">
          <div className="img-list">
            <img
              src={cashOnDelivery}
              alt="cash on delivery"
              className="img-list-size cash-size"
              width={"8rem"}
              height={"4rem"}
            />
            <img
              src={visa}
              alt="visa"
              className="img-list-size"
              width={"8rem"}
              height={"4rem"}
            />
            <img
              src={mastercard}
              alt="mastercard"
              className="img-list-size"
              width={"8rem"}
              height={"4rem"}
            />
          </div>
          <div className="powered-by">
            Powered By
            <img
              src={poweredby}
              alt="poweredby nasnav"
              className="powered-by-size"
              width={"8rem"}
              height={"4rem"}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
