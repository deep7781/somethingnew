import React from "react";
import { Navbar, Footer } from "../../Components";
import { Link, useNavigate } from "react-router-dom";
import rightImage from "../../Assets/Right Image.png";
import "../Home/Home.css";
import sprout from "../../Assets/Sprout.svg";
import purchase from "../../Assets/Purchase.svg";
import delivery from "../../Assets/Delivery.svg";
import check from "../../Assets/Checkmark--outline.svg";
import mapProducts from "../../Components/mapProducts";
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
  const navigate = useNavigate();

  const handleView = () => {
    navigate("/allProducts");
  };
  const firstFourProducts = mapProducts.slice(0, 4);
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
          {mapFeature.map((item) => {
            return (
              <div className="blocks">
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
          {firstFourProducts.map((item) => {
            return (
              <Link to={`/allProducts/${item.id}`}>
                <div className="product">
                  <img src={item.image} alt={item.name} />
                  <div className="details">
                    <p className="name">{item.name}</p>
                    <p className="pr">£{item.price}</p>
                  </div>
                </div>
              </Link>
            );
          })}
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
