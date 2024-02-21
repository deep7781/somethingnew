import { createSlice } from "@reduxjs/toolkit";
import { mapProducts } from "../Components/mapProducts";

const initialState = {
  cart: [],
  items: mapProducts,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity = 1 } = action.payload;

      const existingItem = state.cart.find(
        (item) => item.product.id === product.id
      );

      if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.amount = existingItem.quantity * product.price;
      } else {
        state.cart.push({
          product,
          quantity,
          amount: quantity * product.price,
        });
      }
    },
    removeItem: (state, action) => {
      const { productId } = action.payload;
      const existingItem = state.cart.find(
        (item) => item.product.id === productId
      );
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
          existingItem.amount =
            existingItem.quantity * existingItem.product.price;
        } else {
          state.cart = state.cart.filter(
            (item) => item.product.id !== productId
          );
        }
      }
    },

    remove: (state, action) => {
      const productIdToRemove = action.payload.id;

      state.cart = state.cart.filter(
        (item) => item.product.id !== productIdToRemove
      );
    },
    initializeCartFromLocalStorage: (state, action) => {
      const storedData = localStorage.getItem("cart");
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        if (Array.isArray(parsedData)) {
          state.cart = parsedData;
        } else {
          // Handle the case where the data from local storage is not an array
          console.error("Invalid data format in local storage");
        }
      }
    },
  },
});

export const { addToCart, removeItem, remove, initializeCartFromLocalStorage } =
  cartSlice.actions;
export default cartSlice.reducer;
