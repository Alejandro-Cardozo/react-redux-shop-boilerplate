import axios from "axios";
import { ActionTypes } from "../constants/action-types";

// this isn't a plain object. Use thunk
export const fetchProducts = async () => {
  const response = await axios.get("/products");
  console.log(response);
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: response,
  }
}

export const selectedProduct = (products) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: products,
  }
}

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  }
}