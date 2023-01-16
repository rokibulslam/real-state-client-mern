import { CREATE_ORDER_SUCCESS } from "../constants/actionTypes"

const initialState = {
    paymentStatus: {},
}
export const orderReducer = (state=initialState, action) => {
    console.log(action)
    switch (action.type) {
        case CREATE_ORDER_SUCCESS:
            return {
                ...state,
                paymentStatus:action.payload
            }
        default: return state
    }
}