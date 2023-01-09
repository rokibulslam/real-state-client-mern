
import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/actionTypes";


const initialState = {
    cart:[]
}

const cartReducer = (state = initialState, action) => {
    const selectedProduct = state.cart.find(
      (product) => product._id === action.payload._id
    );
    switch (action.type) {

        case ADD_TO_CART:
            if (selectedProduct) {
                // Remove previous existing Product from cart
                const newcart = state.cart.filter((product) => product._id !== selectedProduct._id);
                // Add 1 for multiple product
                selectedProduct.quantity = selectedProduct.quantity + 1;

                return {
                    ...state,
                    cart: [...newcart, selectedProduct]
                };
            }
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, quantity:1}]
            }
        case REMOVE_FROM_CART:
            if (selectedProduct.quantity > 1) {
                const newCart = state.cart.filter((product) => product._id !== selectedProduct._id)
                selectedProduct.quantity = selectedProduct.quantity - 1;
                return {
                    ...state,
                    cart: [...newCart, selectedProduct]
                };
            }
            return {
                ...state,
                cart:state.cart.filter((product)=>product._id!== action.payload._id)
            }
        default:
            return state;
    }
}

export default cartReducer;