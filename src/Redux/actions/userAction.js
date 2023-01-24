import axios from "axios";
import { GET_USER_LIST_FAIL, GET_USER_LIST_REQUEST, GET_USER_LIST_SUCCESS, UPDATE_USER_FAIL, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS } from "../constants/actionTypes";


export const getUsers = () =>async(dispatch)=> {
    try {
    dispatch({ type: GET_USER_LIST_REQUEST })
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(
      "https://pink-combative-kangaroo.cyclic.app/users",
      config
    );
      console.log(data)
    dispatch({ type: GET_USER_LIST_SUCCESS, payload: data });
    
    
  } catch (error) {
    dispatch({
      type: GET_USER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}
export const updateUserRole = (email, role) => async (dispatch) => {
  console.log(role);
  try {
    dispatch({ type: UPDATE_USER_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.put(
      `https://pink-combative-kangaroo.cyclic.app/update/user/${email}`,
      { role: role },
      config
    );
    dispatch({
      type: UPDATE_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_USER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};