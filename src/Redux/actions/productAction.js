import axios from "axios";
import { DELETE_A_PRODCUT_FAIL, DELETE_A_PRODCUT_REQUEST, DELETE_A_PRODCUT_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/actionTypes";

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
