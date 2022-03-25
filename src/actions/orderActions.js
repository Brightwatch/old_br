import axios from 'axios'
import {
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_FAIL,
    order_create_url, 
    CART_CLEAR_ITEMS,
    order_detail_url,
    ORDER_SINGLE_REQUEST,
    ORDER_SINGLE_SUCCESS,
    ORDER_SINGLE_ERROR
} from '../utils/constants'

export const orderCreation = (order) => async (dispatch, getState) =>{
    try {
       dispatch ({
           type: ORDER_CREATE_REQUEST
       })
       const { userLogin: userInfo} = getState()
       const config = {
         headers: {
           'Content-Type': 'application/json',
           Authorization: `Bearer ${userInfo.token}`
         }
       }
      
       const {data} = await axios.post(order_create_url, order)
     
       dispatch ({
          type:  ORDER_CREATE_SUCCESS, payload: data
      })

      dispatch ({
        type:  CART_CLEAR_ITEMS
    })
    localStorage.removeItem('cartItems')
      
  
    }
    catch(error){
      dispatch ({type: ORDER_CREATE_FAIL, payload: error.response && error.response.data.detail ? error.response.data.message : error.message})
    }
  }

  export const singleOrder = (id) => async (dispatch)=>{
    

    try {
dispatch ({type: ORDER_SINGLE_REQUEST})
const { data } = await axios.get(`${order_detail_url}${id}`)


dispatch ({type: ORDER_SINGLE_SUCCESS, payload: data})
    } catch(error) {
        dispatch ({type: ORDER_SINGLE_ERROR, payload: error.response && error.response.data.message ? error.response.data.message : error.message})
    }
}