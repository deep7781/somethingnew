import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import { initializeCartFromLocalStorage } from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

store.dispatch(initializeCartFromLocalStorage());
export default store;
