import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    login_url,
    USER_DETAIL_REQUEST,
    USER_DETAIL_SUCCESS,
    USER_DETAIL_FAIL,
    user_detail_url,
  } from "../utils/constants";
  
import axios from 'axios'
  export const login = (email, password) => async (dispatch) =>{
      try {
         dispatch ({
             type: USER_LOGIN_REQUEST
         })
         const config = {
             headers: {
                 'Content-Type': 'application/json'
             }
         }
         const {data} = await axios.post(login_url,
         {'username':email, 'password':password},
         config)
         dispatch ({
            type: USER_LOGIN_SUCCESS, payload: data
        })
        localStorage.setItem('userInfo', JSON.stringify(data))

      }
      catch(error){
        dispatch ({type: USER_LOGIN_FAIL, payload: error.response && error.response.data.detail ? error.response.data.message : error.message})
      }
  }

export const logout = () => (dispatch)=>{
  localStorage.removeItem('userInfo')
  dispatch({type: USER_LOGOUT})

}

export const userDetail = (id) => async (dispatch, getState) =>{
  try {
     dispatch ({
         type: USER_DETAIL_REQUEST
     })
     const { userLogin: userInfo} = getState()
     const config = {
       headers: {
         'Content-Type': 'application/json',
         Authorization: `Bearer ${userInfo.token}`
       }
     }
    
     const {data} = await axios.get(`${user_detail_url}${id}`)
     dispatch ({
        type: USER_DETAIL_SUCCESS, payload: data
    })
    

  }
  catch(error){
    dispatch ({type: USER_DETAIL_FAIL, payload: error.response && error.response.data.detail ? error.response.data.message : error.message})
  }
}