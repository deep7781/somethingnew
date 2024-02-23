import axios from "axios";
import { getData } from "../States/adminSlice";

export const fetchProducts = async (dispatch) => {
  try {
    const response = await axios.get(
      "https://65d726ed27d9a3bc1d7a5206.mockapi.io/mapProducts"
    );
    // console.log("response", response.data);
    dispatch(getData(response.data));
    // return result;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Propagate the error for handling in components
  }
};
