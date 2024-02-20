import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import "./Products.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../States/cartSlice";
const Products = ({ products }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = products.find((product) => product.id === id);
  const [notification, setNotification] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);
  const numberOfItems = Array.isArray(cartItems) ? cartItems.length : 0;

  console.log(numberOfItems);
  const handleCart = () => {
    dispatch(addToCart({ product, quantity }));
    setNotification(!notification);
    setTimeout(() => {
      setNotification(false);
    }, 2000);
  };

  const [quantity, setQuantity] = useState(1);

  const handleDec = () => {
    if (quantity <= 1) {
      setQuantity(1);
    } else {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="pro">
      <Navbar />
      <div className="page">
        <p className={notification ? "show" : "hide"}> Item Added</p>
        <div className="pgleft">
          <img src={product.image} alt={product.name} />
        </div>
        {/* {console.log(product.image.props.src)} */}
        <div className="pgright">
          <div className="wrapper">
            <p className="wrap1">{product.name}</p>
            <p className="wrap2">£{product.price}</p>
            <p className="wrap3">
              Description
              <br />
              <br />
              {product.description}
            </p>
            <div className="quan">
              <span>Quantity</span>
              <div className="inpBtn">
                <button className="incDec" onClick={handleDec}>
                  -
                </button>
                {quantity}
                <button
                  className="incDec"
                  onClick={() => setQuantity(quantity + 1)}>
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
