import React, { useEffect } from "react";
import Home from "./Pages/Home/Home";
import Admin from "./Pages/Admin/Admin";
import Crud from "./Pages/Admin/Crud";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Products } from "./Pages";
import { Login } from "./Components";
import { lazy, Suspense } from "react";
// import AllProducts from "./Pages/Products/AllProducts";
import Payment from "./Pages/Payment";
import Loader from "./Components/Loader/Loader";

const Cart = lazy(() => import("./Pages/Cart"));
const AllProducts = lazy(() => import("./Pages/Products/AllProducts"));

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/admin/updateData" element={<Admin />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/loading" element={<Loader />} />
          <Route path="/admin/addOrDelete" element={<Crud />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/allProducts/:id"
            element={
              <Suspense fallback={<Loader />}>
                <Products />
              </Suspense>
            }
          />
          <Route
            path="/cart"
            element={
              <Suspense fallback={<div>loadinggg.....</div>}>
                <Cart />
              </Suspense>
            }
          />
          <Route path="/allProducts" element={<AllProducts />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
