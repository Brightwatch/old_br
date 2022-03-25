import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productListReducer } from "./reducers/productReducer";
import { productSingleReducer } from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";
import { userLoginReducer, userDetailReducer } from "./reducers/userReducer";
import { OrderReducer, orderSingleReducer } from "./reducers/orderReducer";


const reducer = combineReducers({
  productList: productListReducer,
  singleProduct: productSingleReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userDetail: userDetailReducer,
  order: OrderReducer,
  singleOrder: orderSingleReducer
});
const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};
const paymentMethodFromStorage = localStorage.getItem("paymentMethod")
  ? JSON.parse(localStorage.getItem("paymentMethod"))
  : "";

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
    paymentMethod: paymentMethodFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
