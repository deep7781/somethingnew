// filtersSlice.js
import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    selectedProductTypes: [],
  },
  reducers: {
    setProductTypes: (state, action) => {
      state.selectedProductTypes = action.payload;
    },
  },
});

export const { setProductTypes } = filtersSlice.actions;
export default filtersSlice.reducer;
