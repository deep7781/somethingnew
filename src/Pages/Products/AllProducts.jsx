import React, { useState } from "react";
import { Footer, Navbar } from "../../Components";
import pageHeader from "../../Assets/PageHeaders.png";
import mapProducts from "../../Components/mapProducts";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setProductTypes } from "../../States/filterSlice";
import { category } from "../../Components/mapProducts";

const AllProducts = () => {
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
      </div>
      <Footer />
    </div>
  );
};

export default AllProducts;
