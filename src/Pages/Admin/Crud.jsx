import React, { useState, useRef, useEffect } from "react";
import { Footer, Navbar } from "../../Components";
import pageHeader from "../../Assets/PageHeaders.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, deleteProduct } from "../../States/adminSlice";

import {
  setProductTypes,
  setProductPrice,
  setProductByArtist,
} from "../../States/filterSlice";
import { FaArrowUp } from "react-icons/fa";
import Loader from "../../Components/Loader/Loader";

const Crud = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  // const [products, setProducts] = useState([]);

  const data = useSelector((state) => state.admin.getUserData);
  // console.log(data);
  const dispatch = useDispatch();

  //Category Mapped
  const cat = useSelector((state) => state.admin.getUserData);
  const items = cat.map((item) => item.category);
  const cata = new Set();
  for (let i = 0; i < items.length; i++) {
    cata.add(items[i]);
  }
  const category = Array.from(cata);
  // console.log("catg", cata);

  //Artists Mapped
  const artistItems = cat.map((item) => item.artist);
  const art = new Set();
  for (let i = 0; i < artistItems.length; i++) {
    art.add(artistItems[i]);
  }
  const artist = Array.from(art);

  //Price Mapped
  const priceRanges = ["0-99", "100-199", "200-299", "300+"];
  const productsPrice = data.map((item) => {
    const price = item.price;
    console.log("integer", parseInt(price));
    const priceRange =
      parseInt(price) < 100
        ? "0-99"
        : parseInt(price) < 200
        ? "100-199"
        : parseInt(price) < 300
        ? "200-299"
        : "300+";
    return { ...item, priceRange };
  });
  //getting data
  useEffect(() => {
    dispatch(getUser());

    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch]);
  //for Goto top arrow
  const topRef = useRef(null);
  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  //for selecting data from store
  const selectedProductTypes = useSelector(
    (state) => state.filters.selectedProductTypes
  );
  const selectedProductPrice = useSelector(
    (state) => state.filters.selectedProductPrice
  );
  const selectedArtists = useSelector((state) => state.filters.selectedArtists);

  //productType filter
  const handleCheckboxChange = (value) => {
    const newProductTypes = selectedProductTypes.includes(value)
      ? selectedProductTypes.filter((item) => item !== value)
      : [...selectedProductTypes, value];

    dispatch(setProductTypes(newProductTypes));
  };

  //priceFilter
  const handlePriceChange = (value) => {
    const newProductPrice = selectedProductPrice.includes(value)
      ? selectedProductPrice.filter((range) => range !== value)
      : [...selectedProductPrice, value];

    dispatch(setProductPrice(newProductPrice));
  };

  //Artist Filter
  const handleArtist = (value) => {
    const newArtist = selectedArtists.includes(value)
      ? selectedArtists.filter((item) => item !== value)
      : [...selectedArtists, value];

    dispatch(setProductByArtist(newArtist));
  };
  //handleRemove
  const handleRemove = (productId) => {
    dispatch(deleteProduct(productId))
      .then(() => {
        dispatch(getUser());
      })
      .catch((error) => {
        console.error("Error removing product:", error);
      });
  };
  //handle Update
  const handleUpdate = () => {
    console.log("Update Successfully");
  };
  const loading = useSelector((state) => state.admin.loading);

  {
    /*<-------------------------------Here Goes The UI Component ---------------------------------------------------->*/
  }
  return (
    <>
      {loading && <Loader />}
      <div className={loading ? "blur" : ""}>
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

        <div>
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
                      </div>
                    </div>
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
                </form>
              </div>
              <div className="productCards1">
                {productsPrice
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
                    <div className="allpro">
                      <Link key={item.id} to={`/allProducts/${item.id}`}>
                        <div className="product1">
                          <div className="productImage">
                            <img src={item.image} alt={item.name} />
                          </div>
                          {/* {console.log("image", item.image.image1)} */}
                          <div className="details">
                            <p className="name">{item.name}</p>
                            <p className="pr">£{item.price}</p>
                          </div>
                        </div>
                      </Link>
                      <div className="proBtn">
                        <button onClick={() => handleRemove(item.id)}>
                          Remove
                        </button>
                        <Link to="/admin/updateData">
                          <button onClick={() => handleUpdate(item.id)}>
                            Update
                          </button>
                        </Link>
                      </div>
                    </div>
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
        </div>
      </div>
    </>
  );
};

export default Crud;
