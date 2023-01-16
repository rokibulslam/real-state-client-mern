import axios from "axios";
import { ADD_TO_CART, SET_CART_TOTAL, REMOVE_FROM_CART, SAVE_SHIPPING_ADRESS, DELETE_CART, CREATE_ORDER_SUCCESS, CREATE_ORDER_FAIL } from "../constants/actionTypes"


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
  };
};

export const createOrder = (order) => async (dispatch) => {
  console.log(order);

  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "http://localhost:5000/orders",
      order,
      config
    );

    dispatch({ type: CREATE_ORDER_SUCCESS, payload: data })
    dispatch({ type: DELETE_CART })
    console.log(data)
  } catch (error) {
    dispatch({
      type: CREATE_ORDER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};