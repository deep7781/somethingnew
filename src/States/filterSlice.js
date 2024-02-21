// filtersSlice.js
import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    selectedProductTypes: [],
    selectedProductPrice: [],
    selectedArtists: [],
  },
  reducers: {
    setProductTypes: (state, action) => {
      state.selectedProductTypes = action.payload;
    },
    setProductPrice: (state, action) => {
      state.selectedProductPrice = action.payload;
    },
    setProductByArtist: (state, action) => {
      state.selectedArtists = action.payload;
    },
  },
});

export const { setProductTypes, setProductPrice, setProductByArtist } =
  filtersSlice.actions;
export default filtersSlice.reducer;
