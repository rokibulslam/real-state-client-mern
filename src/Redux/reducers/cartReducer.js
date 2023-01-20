import {
  ADD_TO_CART,
  CREATE_ORDER_SUCCESS,
  DELETE_CART,
  REMOVE_FROM_CART,
  SAVE_SHIPPING_ADRESS,
  SET_CART_TOTAL,
} from "../constants/actionTypes";

const initialState = {
  cart: [],
  grandTotal: 0,
  shippingAdress: {},

};

const cartReducer = (state = initialState, action) => {
  const selectedProduct = state.cart.find(
    (product) => product?._id === action.payload?._id
  );
  
  switch (action.type) {
    case ADD_TO_CART:
      if (selectedProduct) {
        // Remove previous existing Product from cart
        const newcart = state.cart.filter(
          (product) => product._id !== selectedProduct._id
        );
        // Add 1 for multiple product
        selectedProduct.quantity = selectedProduct.quantity + 1;

        return {
          ...state,
          cart: [...newcart, selectedProduct],
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case REMOVE_FROM_CART:
      if (selectedProduct.quantity > 1) {
        const newCart = state.cart.filter(
          (product) => product._id !== selectedProduct._id
        );
        selectedProduct.quantity = selectedProduct.quantity - 1;
        return {
          ...state,
          cart: [...newCart, selectedProduct],
        };
      }
      return {
        ...state,
        cart: state.cart.filter(
          (product) => product._id !== action.payload._id
        ),
      };
    case SET_CART_TOTAL:
      return {
        ...state,
        grandTotal: action.payload,
      };
    case SAVE_SHIPPING_ADRESS:
      return {
        ...state,
        shippingAdress: action.payload,
      };
    case DELETE_CART:
      return {
        ...state,
        cart: [],
        grandTotal: 0,
        shippingAdress:{}
      }
    default:
      return state;
  }
};

export default cartReducer;
