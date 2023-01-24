import {
  DELETE_A_PRODCUT_FAIL,
  DELETE_A_PRODCUT_REQUEST,
  DELETE_A_PRODCUT_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  UPDATE_PRODUCT_FAIL,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
} from "../constants/actionTypes";

const initialState = {
  products: [],
  loading: true,
  error: null,
  isSuccess:false
};
export const productsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    case DELETE_A_PRODCUT_REQUEST:
      return {
        ...state,
        loading: true,
        isSuccess: false,
        error: null,
        products:[]
      }
    case DELETE_A_PRODCUT_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
      }
    case DELETE_A_PRODCUT_FAIL:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        error:action.payload
      }
    case UPDATE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        isSuccess: false,
        error: null,
        products:[]
      }
    case UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess:true,
      }
    case UPDATE_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        error:action.payload
      }
    default:
      return state;
  }
};
