import fakeStoreApi from '../../apis/fakeStoreApi';
import { ActionTypes } from "../constants/action-types";


export const fetchProducts = () => {
  return async function(dispatch, getState) {
    const response = await fakeStoreApi.get("/products"); 

    dispatch({type:ActionTypes.FETCH_PRODUCTS, payload: response.data})
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