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
  deleted: false,
  update:false,
};
export const productsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return {
        loading: true, products: []
      };
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false, products: action.payload
      };
    case PRODUCT_LIST_FAIL:
      return {
        loading: false, error: action.payload
      };
    case DELETE_A_PRODCUT_REQUEST:
      return {
        ...state,
        loading: true,
        deleted: false,
        error: null,
        products: [],
      }
    case DELETE_A_PRODCUT_SUCCESS:
      return {
        ...state,
        loading: false,
        deleted: true,
      }
    case DELETE_A_PRODCUT_FAIL:
      return {
        ...state,
        loading: false,
        delete: false,
        error:action.payload
      }
    case UPDATE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        update: false,
        error: null,
        products:[]
      }
    case UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        update:true,
      }
    case UPDATE_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        update: false,
        error:action.payload
      }
    default:
      return state;
  }
};
