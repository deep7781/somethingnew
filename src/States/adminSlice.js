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
export const deleteProduct = createAsyncThunk("deleteProduct", async (id) => {
  try {
    const response = await axios.delete(
      `https://65d726ed27d9a3bc1d7a5206.mockapi.io/mapProducts/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
});
export const registerUser = createAsyncThunk("registeruser", async (data) => {
  try {
    const response = await axios.post(
      `https://65d726ed27d9a3bc1d7a5206.mockapi.io/userInfo`,
      data,
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    console.error("Error registering User", error);
    throw error;
  }
});

export const loginUser = createAsyncThunk(
  "loginUser",
  async (_, { dispatch }) => {
    try {
      const repsonse = await axios.get(
        `https://65d726ed27d9a3bc1d7a5206.mockapi.io/userInfo`
      );
      dispatch(adminSlice.actions.getLoginData(repsonse.data));
    } catch (error) {
      console.error("Error getting user data from server", error);
      throw error;
    }
  }
);
export const updateProduct = createAsyncThunk(
  "updateProduct",
  async ({ data, id }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `https://65d726ed27d9a3bc1d7a5206.mockapi.io/mapProducts/${id}`,
        data,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error updating product:", error);
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  setUserData: [],
  getUserData: [],
  getLoginData: null,
  loading: false,
  error: null,
};
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
    getLoginData: (state, action) => {
      state.getLoginData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = true;
      });
  },
});

export const { addData, getData } = adminSlice.actions;
export default adminSlice.reducer;
