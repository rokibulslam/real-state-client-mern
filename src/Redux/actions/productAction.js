import axios from "axios";
import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/actionTypes";

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

