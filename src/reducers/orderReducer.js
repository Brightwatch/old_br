import {
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_FAIL,
    ORDER_CREATE_RESET, 
    ORDER_SINGLE_REQUEST,
    ORDER_SINGLE_SUCCESS,
    ORDER_SINGLE_ERROR
  
} from '../utils/constants'

export const OrderReducer = (state = {}, action) => {
    switch (action.type) {

      case ORDER_CREATE_REQUEST:
        return { loading: true, success:false};
      case ORDER_CREATE_SUCCESS:
        return { loading: false, success:true , order: action.payload };
      case ORDER_CREATE_FAIL:
        return { loading: false, error: action.payload };
        case ORDER_CREATE_RESET:
            return { };
        
     
      
  
      default:
        return state;
    }
  };



  export const orderSingleReducer = (state = { order: {orders:[], shipping_address:{}} }, action) => {
    switch (action.type) {
      case ORDER_SINGLE_REQUEST:
        return { loading: true, ...state };
      case ORDER_SINGLE_SUCCESS:
        return { loading: false, order: action.payload };
      case ORDER_SINGLE_ERROR:
          return { loading: false, error: action.payload };
      default:
           return state
    }
  };