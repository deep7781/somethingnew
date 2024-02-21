import React, { useState, useRef, useEffect } from "react";
import { Footer, Navbar } from "../../Components";
import pageHeader from "../../Assets/PageHeaders.png";
import { mapProducts, priceRanges } from "../../Components/mapProducts";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setProductTypes,
  setProductPrice,
  setProductByArtist,
} from "../../States/filterSlice";
import { category, artist } from "../../Components/mapProducts";
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
  const selectedProductPrice = useSelector(
    (state) => state.filters.selectedProductPrice
  );
  const selectedArtists = useSelector((state) => state.filters.selectedArtists);
  const handleCheckboxChange = (value) => {
    const newProductTypes = selectedProductTypes.includes(value)
      ? selectedProductTypes.filter((item) => item !== value)
      : [...selectedProductTypes, value];

    dispatch(setProductTypes(newProductTypes));
  };
  const handlePriceChange = (value) => {
    const newProductPrice = selectedProductPrice.includes(value)
      ? selectedProductPrice.filter((range) => range !== value)
      : [...selectedProductPrice, value];

    dispatch(setProductPrice(newProductPrice));
  };
  const handleArtist = (value) => {
    const newArtist = selectedArtists.includes(value)
      ? selectedArtists.filter((item) => item !== value)
      : [...selectedArtists, value];

    dispatch(setProductByArtist(newArtist));
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
                <div className="prPrice">
                  <p>Price</p>
                  <div className="prCheck">
                    {priceRanges.map((range) => (
                      <span key={range}>
                        <input
                          type="checkbox"
                          name="price"
                          value={range}
                          onChange={() => handlePriceChange(range)}
                          checked={selectedProductPrice.includes(range)}
                        />
                        <label htmlFor={range}>{range}</label>
                      </span>
                    ))}
                    <div className="prArtist">
                      <p>Designer</p>
                      <div className="prCheck">
                        {artist.map((value) => (
                          <span key={value}>
                            <input
                              type="checkbox"
                              name="price"
                              value={value}
                              onChange={() => handleArtist(value)}
                              checked={selectedArtists.includes(value)}
                            />
                            <label htmlFor={value}>{value}</label>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="productCards1">
            {mapProducts
              .filter(
                (item) =>
                  (selectedProductTypes.length === 0 ||
                    selectedProductTypes.includes(item.category)) &&
                  (selectedProductPrice.length === 0 ||
                    selectedProductPrice.includes(item.priceRange)) &&
                  (selectedArtists.length === 0 ||
                    selectedArtists.includes(item.artist))
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
