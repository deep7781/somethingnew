import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createUser = createAsyncThunk("createUser", async (data) => {
  try {
    const response = await axios.post(
      "https://65d726ed27d9a3bc1d7a5206.mockapi.io/mapProducts",
      data,
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
});

export const getUser = createAsyncThunk("getUser", async (_, { dispatch }) => {
  try {
    const response = await axios.get(
      "https://65d726ed27d9a3bc1d7a5206.mockapi.io/mapProducts"
    );
    dispatch(adminSlice.actions.getData(response.data));
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
});

// export const getUser = createAsyncThunk(
//   "getUser",
//   async (data, { rejected }) => {
//     const response = await fetch(
//       "https://65d726ed27d9a3bc1d7a5206.mockapi.io/mapProducts"
//     );
//     const result = await response.json();
//     console.log(result);
//   }
// );

const initialState = { setUserData: [], getUserData: [] };
const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.setUserData.push(action.payload);
    },

    getData: (state, action) => {
      state.getUserData = action.payload;
    },
  },
});

export const { addData, getData } = adminSlice.actions;
export default adminSlice.reducer;
