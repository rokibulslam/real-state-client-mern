import axios from "axios";
import { ADD_TO_CART, SET_CART_TOTAL, REMOVE_FROM_CART, SAVE_SHIPPING_ADRESS, DELETE_CART, CREATE_ORDER_SUCCESS, CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST } from "../constants/actionTypes"


export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product,
    }
}
export const remomveCart = (product) => {
    return {
      type: REMOVE_FROM_CART,
      payload: product,
    };
}
export const setCartTotal = (cart) => {
    return {
      type: SET_CART_TOTAL,
      payload: cart,
    };
}
export const deletCart = () => {
  return {
    type:DELETE_CART
  } 
}
export const saveShippingAdress = (data) => {
  return {
    type: SAVE_SHIPPING_ADRESS,
    payload: data,
  }
}
