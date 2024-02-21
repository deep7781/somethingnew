import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import { initializeCartFromLocalStorage } from "./cartSlice";
import filterReducer from "./filterSlice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    filters: filterReducer,
  },
});

store.dispatch(initializeCartFromLocalStorage());
export default store;
