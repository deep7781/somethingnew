import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import { initializeCartFromLocalStorage } from "./cartSlice";
import filterReducer from "./filterSlice";
import adminSlice from "./adminSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    filters: filterReducer,
    admin: adminSlice,
  },
});

store.dispatch(initializeCartFromLocalStorage());
export default store;
