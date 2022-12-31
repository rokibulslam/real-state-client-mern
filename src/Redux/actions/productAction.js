import axios from "axios"
import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants"

/*=========================
GET ALL PRODUCT LIST ACTION
=========================*/
export const productsListAction = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST })
        const { data } = await axios.get(
          "https://pink-combative-kangaroo.cyclic.app/apartments"
        );
      dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })
      console.log(data)
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    };
};
/*=========================
GET PRODUCT DETALIS ACTION
=========================*/

export const productDetailsAction = (id) => async(dispatch) => {
    try {
        console.log(id)
        dispatch({ type: PRODUCT_DETAILS_REQUEST })
        const data = axios.get(
          `https://pink-combative-kangaroo.cyclic.app/apartment/${id}`
        );
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
          type: PRODUCT_DETAILS_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
    }
}