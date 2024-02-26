import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import search from "../../Assets/Search.svg";
import cart from "../../Assets/Shopping--cart.svg";
import profile from "../../Assets/User--avatar.svg";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import "../Navbar/Navbar.css";
import { useSelector } from "react-redux";
const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  const [proToggle, setProToggle] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);
  const numberOfItems = Array.isArray(cartItems) ? cartItems.length : 0;
  // console.log(numberOfItems);
  // const windowClick = () => {
  //   if (proToggle == true) {
  //     window.addEventListener("click", (e) => {
  //       setProToggle(false);
  //     });
  //   }
  // };

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
              <span className="noOfItems">{numberOfItems}</span>
            </div>
          </Link>

          <img
            src={profile}
            alt="profile"
            onClick={() => setProToggle(!proToggle)}
          />
          <div className={`prof ${proToggle ? "show" : ""}`}>
            <Link to="/profile">
              <div>Profile</div>
            </Link>
            <Link to="/login">
              <div>Login</div>
            </Link>
            <Link to="/register">
              <div>Sign Up</div>
            </Link>
          </div>
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
            <a href="/c">Plant pots</a>
            <a href="/c">Ceramics</a>
            <a href="/c">Tables</a>
            <a href="/c">Chairs</a>
            <a href="/c">Crockery</a>
            <a href="/c">Tableware</a>
            <a href="/c">Cutlery</a>
          </div>
        </div>
        <div className={`smallRes ${toggle ? "visible" : ""}`}>
          <Link to="/cart">
            <div className="cartDet">
              <div>Cart : {numberOfItems}</div>
            </div>
          </Link>
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
