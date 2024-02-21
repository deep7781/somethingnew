import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Footer, Navbar } from "../Components";
import { addToCart, removeItem, remove } from "../States/cartSlice";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  // const cart = useSelector((state) => state.cart);

  const cartItems = useSelector((state) => state.cart.cart);
  const grandTotal = Array.isArray(cartItems)
    ? cartItems.reduce((total, item) => total + item.amount, 0)
    : 0;

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="cart">
      <Navbar className="cartNav" />
      <div className="shoppingCart">
        <h1>Shopping Cart</h1>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th colSpan="2">Total</th>
            </tr>
          </thead>
          {Array.isArray(cartItems) &&
            cartItems.map((item) => (
              <tbody>
                <tr>
                  <td>
                    <div className="cartItems">
                      <div className="cartImg">
                        <img src={item.product.image} alt="" />
                      </div>
                      <div className="cartCont">
                        <p>{item.product.name}</p>
                        <p>£{item.product.price}</p>
                      </div>
                    </div>
                  </td>
                  <td className="quantity">
                    <button
                      className="incDec"
                      onClick={() =>
                        dispatch(removeItem({ productId: item.product.id }))
                      }>
                      -
                    </button>

                    {item.quantity}
                    <button
                      className="incDec"
                      onClick={() =>
                        dispatch(
                          addToCart({ product: item.product, quantity: 1 })
                        )
                      }>
                      +
                    </button>
                  </td>
                  <td>£{item.amount}</td>
                  <td>
                    <button
                      className="incDec"
                      onClick={() => dispatch(remove({ id: item.product.id }))}>
                      Remove
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}

          <tfoot>
            <tr>
              <td></td>
              <td colSpan="2">
                <div className="totalPrice">
                  {cartItems.length >= 1 && (
                    <>
                      <div>Grand Total:</div>
                      <div>£{grandTotal}</div>
                    </>
                  )}
                </div>
              </td>
            </tr>
          </tfoot>
        </table>

        {!cartItems.length && (
          <pre className="cartEmpty">
            Cart is Empty. Go to <Link to="/allProducts">Products</Link> and
            start shopping!
          </pre>
        )}
      </div>

      <Footer className="cartFoot" />
    </div>
  );
};

export default Cart;
