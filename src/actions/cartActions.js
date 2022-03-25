import axios from 'axios'
import {
    ADD_TO_CART, 
    REMOVE_FROM_CART,
    CART_SAVE_SHIPPING_ADDRESS,
    CART_SAVE_PAYMENT_METHOD,
    CART_CLEAR_ITEMS
} from "../utils/constants"
import { single_product_url as single_url } from "../utils/constants";


export const addToCart = (id, quantity) => async(dispatch, getState)=> {
const {data} = await axios.get(`${single_url}${id}`)
dispatch({
    type: ADD_TO_CART,
    payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price : data.price,
        count_in_stock : data.count_in_stock,
        quantity,
        
    }
})
localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart =(id)=> (dispatch, getState)=>{
   dispatch({
       type: REMOVE_FROM_CART,
       payload :id,
   })
   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const saveShippingAddress =(data)=> (dispatch)=>{
    dispatch({
        type: CART_SAVE_SHIPPING_ADDRESS,
        payload :data,
    })
    localStorage.setItem('shippingAddress', JSON.stringify(data))
 }

 export const savePaymentMethod =(data)=> (dispatch)=>{
    dispatch({
        type: CART_SAVE_PAYMENT_METHOD,
        payload :data,
    })
    localStorage.setItem('paymentMethod', JSON.stringify(data))
 }


