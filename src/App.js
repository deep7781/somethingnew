// App.js
import React from "react";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Products } from "./Pages";
import mapProducts from "./Components/mapProducts";
import { Login } from "./Components";
import { lazy, Suspense } from "react";
import AllProducts from "./Pages/Products/AllProducts";

const Cart = lazy(() => import("./Pages/Cart"));

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/allProducts/:id"
            element={<Products products={mapProducts} />}
          />
          <Route
            path="/cart"
            element={
              <Suspense fallback={<div>loadinggg.....</div>}>
                <Cart />
              </Suspense>
            }
          />
          <Route
            path="/allProducts"
            element={<AllProducts products={mapProducts} />}
          />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
