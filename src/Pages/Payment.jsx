import React from "react";
import { Footer, Navbar } from "../Components";
import "./Payment.css";
import { mapProducts } from "../Components/mapProducts";
import chair from "../Assets/chair.png"

const Payment = () => {
  return (
    <div>
      <Navbar />
      {mapProducts.map((item)=>(
        <>
       <img src={item.image} alt="" />
       
        </>
      ))}
 
      <div className="paymentPage">
        {/* <img src={chair} alt="" /> */}
      </div>
      <Footer />
    </div>
  );
};

export default Payment;
