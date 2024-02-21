import React from "react";
import "./Footer.css";
import {
  FaFacebookSquare,
  FaPinterest,
  FaSkype,
  FaTwitter,
} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="upper">
          <div className="lft">
            <div className="cat">
              Categories
              <a href="/">Crockery</a>
              <a href="/">Furniture</a>
              <a href="/">Homeware</a>
              <a href="/">Plant pots</a>
              <a href="/">Chairs</a>
              <a href="/">Crockery</a>
            </div>

            <div className="comp">
              Our Company
              <a href="/">About us</a>
              <a href="/">Vacancies</a>
              <a href="/">Contact us</a>
              <a href="/">Privacy</a>
              <a href="/">Returns policy</a>
            </div>
            <div className="menu">
              Menu
              <a href="/">New arrivals</a>
              <a href="/">Best sellers</a>
              <a href="/">Recently </a>
              <a href="/">Popular </a>
              <a href="/allProducts">All Products</a>
            </div>
          </div>
          <div className="rg">
            <div className="sign">
              <div className="join">Join our mailing list</div>
              <div className="signup">
                <input type="email" name="email" placeholder="your@email.com" />
                <div className="but">Signup</div>
              </div>
            </div>
          </div>
        </div>
        <div className="lower">
          <div className="copy">Copyright 2022 Avion LTD</div>
          <div className="social">
            <FaLinkedin />
            <FaFacebookSquare />
            <FaInstagram />
            <FaSkype />
            <FaTwitter />
            <FaPinterest />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
