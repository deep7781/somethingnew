import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import "./Products.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../States/cartSlice";
import { getData, getUser } from "../../States/adminSlice";
import { fetchProducts } from "../../Components/Api";
const Products = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.admin.getUserData);
  const product = products.find((p) => p.id === id);
  console.log("product", product);
  useEffect(() => {
    const fetchData = async () => {
      if (!products.length) {
        try {
          const products = await fetchProducts(dispatch);
          console.log(products);
        } catch (error) {
          console.error("Error in Products component:", error);
        }
      }
    };

    fetchData();
  }, [dispatch, products.length]);

  const [notification, setNotification] = useState(false);

  // const cartItems = useSelector((state) => state.cart.cart);
  // const numberOfItems = Array.isArray(cartItems) ? cartItems.length : 0;

  // console.log(numberOfItems);
  const [quantity, setQuantity] = useState(1);

  const handleCart = () => {
    dispatch(addToCart({ product, quantity }));
    setNotification(!notification);
    setTimeout(() => {
      setNotification(false);
    }, 2000);
  };

  const handleDec = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };
  const handleInc = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  return (
    <div className="pro">
      <Navbar />
      <div className="page">
        <p className={notification ? "show" : "hide"}> Item Added</p>
        <div className="pgleft">
          <img src={product?.image} alt={product?.name} />
        </div>
        {/* {console.log(product.image.props.src)} */}
        <div className="pgright">
          <div className="wrapper">
            <p className="wrap1">{product?.name}</p>
            <p className="wrap2">£{product?.price}</p>
            <p className="wrap3">
              Description
              <br />
              <br />
              {product?.description}
            </p>
            <div className="quan">
              <span>Quantity</span>
              <div className="inpBtn">
                <button
                  className="incDec"
                  disabled={quantity == 1}
                  onClick={handleDec}>
                  -
                </button>
                {quantity}
                <button className="incDec" onClick={handleInc}>
                  +
                </button>
              </div>
            </div>
            <button className="addToCart" onClick={handleCart}>
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
