import axios from 'axios'
import React from "react";
import { products_url as url } from "../utils/constants";
import { single_product_url as single_url } from "../utils/constants";
import { useParams } from "react-router-dom";
import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_ERROR,

    PRODUCT_SINGLE_REQUEST,
    PRODUCT_SINGLE_SUCCESS,
    PRODUCT_SINGLE_ERROR,

} from "../utils/constants"

export const listProducts = () => async (dispatch)=>{
    try {
dispatch ({type: PRODUCT_LIST_REQUEST})
const { data } = await axios.get(url)

dispatch ({type: PRODUCT_LIST_SUCCESS, payload: data})
    } catch(error) {
        dispatch ({type: PRODUCT_LIST_ERROR, payload: error.response && error.response.data.message ? error.response.data.message : error.message})
    }
}


export const singleProduct = (id) => async (dispatch)=>{
    

    try {
dispatch ({type: PRODUCT_SINGLE_REQUEST})
const { data } = await axios.get(`${single_url}${id}`)


dispatch ({type: PRODUCT_SINGLE_SUCCESS, payload: data})
    } catch(error) {
        dispatch ({type: PRODUCT_SINGLE_ERROR, payload: error.response && error.response.data.message ? error.response.data.message : error.message})
    }
}