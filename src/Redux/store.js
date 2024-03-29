import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import cartReducer from "./reducers/cartReducer";
import { productsListReducer } from "./reducers/productReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { manageOrderReducer, orderReducer } from "./reducers/orderReducer";
import { userReducer } from "./reducers/userReducer";


const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  // Reducers
  productList: productsListReducer,
  cart: cartReducer,
  order: orderReducer,
  manageOrder: manageOrderReducer,
  users:userReducer
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
 
const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export const persistor = persistStore(store);

export default store;