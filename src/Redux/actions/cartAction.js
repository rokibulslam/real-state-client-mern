import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/actionTypes"


export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product,
    }
}
export const remomveCart = (product) => {
    return {
        type: REMOVE_FROM_CART,
        payload: product
    }
}