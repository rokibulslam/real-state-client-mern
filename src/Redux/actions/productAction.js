import axios from "axios";
import { DELETE_A_PRODCUT_FAIL, DELETE_A_PRODCUT_REQUEST, DELETE_A_PRODCUT_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, UPDATE_PRODUCT_FAIL, UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS } from "../constants/actionTypes";

/*=========================
GET ALL PRODUCT LIST ACTION
=========================*/
export const productsListAction = () => async (dispatch) => {
    dispatch({ type: PRODUCT_LIST_REQUEST})
  try {
        const { data } = await axios.get(
          "https://pink-combative-kangaroo.cyclic.app/apartments"
        )
      
      dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })

    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    };
}
/*=========================
GET PRODUCT DETALIS ACTION
=========================*/
export const deleteProduct = (id) => async (dispatch) => {
  dispatch({ type: DELETE_A_PRODCUT_REQUEST });
  try {
    const { data } = await axios.delete(
      `https://pink-combative-kangaroo.cyclic.app/apartment/delete/${id}`
    );

    dispatch({ type: DELETE_A_PRODCUT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: DELETE_A_PRODCUT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateProduct = (id, product) => async (dispatch) => {
  console.log(id);
  try {
    dispatch({ type: UPDATE_PRODUCT_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.put(
      `https://pink-combative-kangaroo.cyclic.app/apartment/update/${id}`,
      product,
      config
    );
    dispatch({
      type: UPDATE_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PRODUCT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
