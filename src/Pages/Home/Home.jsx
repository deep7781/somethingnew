import React from "react";
import { Navbar, Footer } from "../../Components";
import { Link, useNavigate } from "react-router-dom";
import rightImage from "../../Assets/Right Image.png";
import "../Home/Home.css";
import { mapProducts } from "../../Components/mapProducts";
import sprout from "../../Assets/Sprout.svg";
import purchase from "../../Assets/Purchase.svg";
import delivery from "../../Assets/Delivery.svg";
import check from "../../Assets/Checkmark--outline.svg";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getData } from "../../States/adminSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { getUser } from "../../States/adminSlice";

const mapFeature = [
  {
    logo: <img src={delivery} alt="logo" />,
    info: "Next day as standard",
    brief: "Order before 3pm and get your order the next day as standard",
  },
  {
    logo: <img src={check} alt="logo" />,
    info: "Made by true artisans",
    brief: "Handmade crafted goods made with real passion and craftmanship",
  },
  {
    logo: <img src={purchase} alt="logo" />,
    info: "Unbeatable prices",
    brief:
      "For our materials and quality you won't find better prices anywhere",
  },
  {
    logo: <img src={sprout} alt="logo" />,
    info: "Recycled packaging",
    brief:
      "We use 100% recycled packaging to ensure our footprint is manageable",
  },
];
const Home = () => {
  const data = useSelector((state) => state.admin.getUserData);
  console.log(data);

  const firstFourProducts = data.slice(0, 4);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleView = () => {
    navigate("/allProducts");
  };

  return (
    <div>
      <Navbar />
      <div className="Hero">
        <div className="container">
          <div className="left">
            <div className="top">
              <div className="head">
                The furniture brand for the future, with timeless designs
              </div>
              <button className="btn1" onClick={handleView}>
                View Collection
              </button>
            </div>
            <div className="bottom">
              A new era in eco friendly furniture with Avelon, the French luxury
              retail brand with nice fonts, tasteful colors and a beautiful way
              to display things digitally using modern web technologies.
            </div>
          </div>
          <div className="right">
            <img src={rightImage} alt={rightImage} />
          </div>
        </div>
      </div>
      <div className="features">
        <div className="que">What makes our brand different</div>
        <div className="fBlocks">
          {mapFeature.map((item, index) => {
            return (
              <div className="blocks" key={index}>
                {item.logo}
                <p className="info">{item.info}</p>
                <p className="brief">{item.brief}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="listings">
        <div className="productName">New Ceramics</div>
        <div className="products">
          {/* {data.map((item, index) => {
            return (
              <Link to={`/allProducts/${item.id}`}>
                <div className="product" key={index}>
                  <img src={[item.image]} alt="" />
                  <div className="details">
                    <p className="name">{item.name}</p>
                    <p className="pr">£{item.price}</p>
                  </div>
                </div>
              </Link>
            );
          })} */}

          {firstFourProducts.map((item) => (
            <Link to={`/allProducts/${item.id}`}>
              <div className="product">
                <img src={[item.image]} alt="" />
                <div className="details">
                  <p className="name">{item.name}</p>
                  <p className="pr">£{item.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="view">
          <Link to="/allProducts">
            <p>View Collection</p>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
