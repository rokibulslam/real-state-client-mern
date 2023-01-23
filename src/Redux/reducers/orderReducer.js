import { CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, DELETE_A_ORDER_FAIL, DELETE_A_ORDER_REQUEST, DELETE_A_ORDER_SUCCESS, GET_ALL_ORDER_FAIL, GET_ALL_ORDER_REQUEST, GET_ALL_ORDER_SUCCESS, GET_MY_ORDER_FAIL, GET_MY_ORDER_REQUEST, GET_MY_ORDER_SUCCESS, RESET_ORDER, UPDATE_ORDER_STATUS_FAIL, UPDATE_ORDER_STATUS_REQUEST, UPDATE_ORDER_STATUS_SUCCESS } from "../constants/actionTypes"

const initialState = {
    loading: false,
    error: '',
    orderData:[]
}
export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_ORDER_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case CREATE_ORDER_SUCCESS:
        console.log(action.payload);
        return {
          ...state,
          loading: false,
          orderData: action.payload,
        };
      case CREATE_ORDER_FAIL:
        return {
          ...state,
          error: action.payload,
        };
      case RESET_ORDER:
        return {
          ...state,
          loading: false,
          error: "",
          orderData: [],
        };
      default:
        return state;
    }
}
const myOrder = {
    loading: false,
    isSuccess: false,
    orderData: [],
  error: '',
    update:false
}
export const manageOrderReducer = (state=myOrder,action) => {
    switch (action.type) {
      case GET_MY_ORDER_REQUEST:
        return {
          ...state,
          loading: true,
          isSuccess: false,
        };
      case GET_MY_ORDER_SUCCESS:
        return {
          ...state,
          loading: false,
          orderData: action.payload,
        };
      case GET_MY_ORDER_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case DELETE_A_ORDER_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DELETE_A_ORDER_SUCCESS:
        console.log(action.payload);
        return {
          ...state,
          loading: false,
          isSuccess: true,
        };
      case DELETE_A_ORDER_FAIL:
        return {
          ...state,
          loading: false,
          isSuccess: false,
          error: action.payload,
        };
      case GET_ALL_ORDER_REQUEST:
        return {
          ...state,
          loading: true,
          isSuccess:false,
          update: false,
          orderData: [],
          error:''
        }
      case GET_ALL_ORDER_SUCCESS:
        return {
          ...state,
          loading: false,
          orderData:action.payload,
        }
      case GET_ALL_ORDER_FAIL:
        return {
          ...state,
          loading: false,
          error:action.payload,
        }
      case UPDATE_ORDER_STATUS_REQUEST:
        return {
          ...state,
          loading: true,
          update: false,
          error: '',
          orderData:[]
        }
      case UPDATE_ORDER_STATUS_SUCCESS:
        return {
          ...state,
          loading: false,
          update: true,
        }
      case UPDATE_ORDER_STATUS_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        }
      default:
        return state;
    }
}
