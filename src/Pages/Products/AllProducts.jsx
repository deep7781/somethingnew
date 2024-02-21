import React, { useState, useRef, useEffect } from "react";
import { Footer, Navbar } from "../../Components";
import pageHeader from "../../Assets/PageHeaders.png";
import mapProducts from "../../Components/mapProducts";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setProductTypes } from "../../States/filterSlice";
import { category } from "../../Components/mapProducts";
import { FaArrowUp } from "react-icons/fa";
const AllProducts = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const topRef = useRef(null);
  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  const dispatch = useDispatch();
  const selectedProductTypes = useSelector(
    (state) => state.filters.selectedProductTypes
  );

  const handleCheckboxChange = (value) => {
    const newProductTypes = selectedProductTypes.includes(value)
      ? selectedProductTypes.filter((item) => item !== value)
      : [...selectedProductTypes, value];

    dispatch(setProductTypes(newProductTypes));
  };

  return (
    <div>
      <div
        ref={topRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: 0,
          width: 0,
          overflow: "hidden",
        }}
      />
      <Navbar />
      <div className="allProducts">
        <div className="pageHeader">
          <img src={pageHeader} alt="" />
        </div>
        <div className="productDetails">
          <div className="filters">
            <form>
              <div className="prType">
                <p> Product-Type</p>
                {category.map((value) => (
                  <span key={value}>
                    <input
                      type="checkbox"
                      name="products"
                      value={value}
                      onChange={() => handleCheckboxChange(value)}
                      checked={selectedProductTypes.includes(value)}
                    />
                    <label htmlFor={value}>{value}</label>
                  </span>
                ))}
              </div>
            </form>
          </div>
          <div className="productCards1">
            {mapProducts
              .filter(
                (item) =>
                  selectedProductTypes.length === 0 ||
                  selectedProductTypes.includes(item.category)
              )
              .map((item) => (
                <Link key={item.id} to={`/allProducts/${item.id}`}>
                  <div className="product1">
                    <img src={item.image} alt={item.name} />
                    <div className="details">
                      <p className="name">{item.name}</p>
                      <p className="pr">£{item.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
        {showScrollButton && (
          <div className="scrollToTop">
            <button onClick={scrollToTop}>
              <FaArrowUp />
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default AllProducts;
