import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import cartReducer from "./reducers/cartReducer";

import { productsListReducer } from "./reducers/productReducer";


const rootReducer = combineReducers({
  // Reducers
  productList: productsListReducer,
  cart: cartReducer
});

const store = createStore(
  rootReducer, composeWithDevTools(applyMiddleware(thunk))
);

export default store;