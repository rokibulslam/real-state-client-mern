import axios from "axios";
import { CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, DELETE_CART, RESET_ORDER } from "../constants/actionTypes";

export const createOrder = (order) => async (dispatch) => {
  console.log(order);
  try {
    dispatch({ type: CREATE_ORDER_REQUEST })
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
      console.log(data)
    dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
    dispatch({ type: DELETE_CART });
    
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
export const resetOrder = () => {
    return {
        type:RESET_ORDER
    }
}