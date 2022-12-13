import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { productDetailsReducer, productsListReducer } from "./reducers/productReducer";


const rootReducer = combineReducers({
    // Reducers
  productList: productsListReducer,
  productDetails: productDetailsReducer
});

const store = createStore(
  rootReducer, composeWithDevTools(applyMiddleware(thunk))
);

export default store;