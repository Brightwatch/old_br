import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_ERROR,

    PRODUCT_SINGLE_REQUEST,
    PRODUCT_SINGLE_SUCCESS,
    PRODUCT_SINGLE_ERROR,

} from "../utils/constants"
export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_ERROR:
        return { loading: false, error: action.payload };
    default:
         return state
  }
};




export const productSingleReducer = (state = { product: {reviews:[]} }, action) => {
  switch (action.type) {
    case PRODUCT_SINGLE_REQUEST:
      return { loading: true, ...state };
    case PRODUCT_SINGLE_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_SINGLE_ERROR:
        return { loading: false, error: action.payload };
    default:
         return state
  }
};

