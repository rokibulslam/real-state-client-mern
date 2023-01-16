import { ADD_TO_CART, SET_CART_TOTAL, REMOVE_FROM_CART, SAVE_SHIPPING_ADRESS } from "../constants/actionTypes"


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
export const saveShippingAdress = (data) => {
  return {
    type: SAVE_SHIPPING_ADRESS,
    payload: data,
  };
};