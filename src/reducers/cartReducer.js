import { ADD_TO_CART, REMOVE_FROM_CART, CART_SAVE_SHIPPING_ADDRESS, CART_SAVE_PAYMENT_METHOD, CART_CLEAR_ITEMS } from "../utils/constants";

const initialState = {
  cartItems: [],
  shippinAddress: {},
  paymentMethod: ''
};
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }

    
    case REMOVE_FROM_CART:
      const newCart = state.cartItems.filter(
        (item) => item.product !== action.payload
      );
      console.log("red",state.cartItems)
      return { ...state, cartItems: newCart };

    case CART_SAVE_SHIPPING_ADDRESS:
      return { ...state, 
        shippingAddress: action.payload,
      }
      case CART_SAVE_PAYMENT_METHOD:
      return { ...state, 
        paymentMethod: action.payload,
      }
      case CART_CLEAR_ITEMS:
        return { 
          ...state,
          cartItems:[], 
          paymentMethod:""
        }
      
      


    default:
      return state;
  }
};


