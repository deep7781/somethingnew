import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import search from "../../Assets/Search.svg";
import cart from "../../Assets/Shopping--cart.svg";
import profile from "../../Assets/User--avatar.svg";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import "../Navbar/Navbar.css";
import { useSelector } from "react-redux";
const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);
  const numberOfItems = Array.isArray(cartItems) ? cartItems.length : 0;
  // console.log(numberOfItems);

  return (
    <div>
      <div className="nav">
        <div className="txtLogo">
          <img src={search} alt="search" />

          <div className="logo">
            <Link className="linklogo" to="/">
              Avion
            </Link>
          </div>
          <Link to="/cart">
            <div className="cartDet">
              <img src={cart} className="cart" alt="cart" />
              <span>{numberOfItems}</span>
            </div>
          </Link>
          <img src={profile} alt="profile" />

          <div className={`prof ${toggle ? "show" : "hide"}`}></div>
          {toggle ? (
            <IoMdClose
              className="closebtn"
              onClick={() => {
                settoggle(!toggle);
              }}
            />
          ) : (
            <AiOutlineMenu
              className="openbtn"
              onClick={() => {
                settoggle(!toggle);
              }}
            />
          )}
        </div>
        <div className="other">
          <div className="category">
            <a href="#">Plant pots</a>
            <a href="#">Ceramics</a>
            <a href="#">Tables</a>
            <a href="#">Chairs</a>
            <a href="#">Crockery</a>
            <a href="#">Tableware</a>
            <a href="#">Cutlery</a>
          </div>
        </div>
        <div className={`smallRes ${toggle ? "visible" : ""}`}>
          <div>Plant pots</div>
          <div>Ceramics</div>
          <div>Tables</div>
          <div>Chairs</div>
          <div>Crockery</div>
          <div>Tableware</div>
          <div>Cutlery</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
