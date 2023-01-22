import { CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, RESET_ORDER } from "../constants/actionTypes"

const initialState = {
    loading: false,
    error: '',
    orderData:[]
}
export const orderReducer = (state = initialState, action) => {
    console.log(action.payload)
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
                orderData:action.payload
            }
        case CREATE_ORDER_FAIL:
            return {
                ...state,
                error:action.payload
            }
        case RESET_ORDER:
            return {
                ...state,
              loading: false,
              error: "",
              orderData: [],
            };
       default: return state     
    }
}