import { async } from "@firebase/util";
import axios from "axios";
import { CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, DELETE_A_ORDER_FAIL, DELETE_A_ORDER_REQUEST, DELETE_A_ORDER_SUCCESS, DELETE_CART, GET_ALL_ORDER_FAIL, GET_ALL_ORDER_REQUEST, GET_ALL_ORDER_SUCCESS, GET_MY_ORDER_FAIL, GET_MY_ORDER_REQUEST, GET_MY_ORDER_SUCCESS, RESET_ORDER, UPDATE_ORDER_STATUS_FAIL, UPDATE_ORDER_STATUS_REQUEST, UPDATE_ORDER_STATUS_SUCCESS } from "../constants/actionTypes";

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
export const getMyOrder = (query) => async (dispatch) => {
  console.log(query)
  try {
    dispatch({ type: GET_MY_ORDER_REQUEST })
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } =await axios.get(
      `https://pink-combative-kangaroo.cyclic.app/orders/${query}`,
      config
    );
    dispatch({
      type: GET_MY_ORDER_SUCCESS,
      payload: data,
    })
    console.log(data);
  } catch (error) {
    dispatch({
      type: GET_MY_ORDER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}
export const deleteAorder = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_A_ORDER_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.delete(
      `https://pink-combative-kangaroo.cyclic.app/order/delete/${id}`,
      config
    );
      dispatch({
        type: DELETE_A_ORDER_SUCCESS,
        payload: data,
      })
   
    console.log(data)
  } catch (error) {
    dispatch({
      type: DELETE_A_ORDER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const getALLOrder = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_ORDER_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(
      `https://pink-combative-kangaroo.cyclic.app/orders`,
      config
    );
    dispatch({
      type: GET_ALL_ORDER_SUCCESS,
      payload: data,
    });
    
  } catch (error) {
    dispatch({
      type: GET_ALL_ORDER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const updateAnOrder = (id, text) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_ORDER_STATUS_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.put(
      `https://pink-combative-kangaroo.cyclic.app/order/status/${id}`,
      {status:text},
      config
    );
    dispatch({
      type: UPDATE_ORDER_STATUS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_ORDER_STATUS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};