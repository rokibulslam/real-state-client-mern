import { GET_USER_LIST_FAIL, GET_USER_LIST_REQUEST, GET_USER_LIST_SUCCESS, UPDATE_USER_FAIL, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS } from "../constants/actionTypes"

const initialState = {
    loading: false,
    users: [],
    update: false,
    error:''
}
export const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_USER_LIST_REQUEST:
            return {
                ...state,
                loading: true,
                update: false,
                error: false,
                users: [],
            }
        case GET_USER_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                users:action.payload
            }
        case GET_USER_LIST_FAIL:
            return {
                ...state,
                loading: false,
                error:action.payload
            }
        case UPDATE_USER_REQUEST:
            return {
                ...state,
                loading: true,
                update: false,
                error: '',
            }
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                update:true,
            }
        case UPDATE_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
                update:false
            }
        default: return state
    }
}