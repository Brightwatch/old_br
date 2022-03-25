import React, { useEffect, useState } from "react";
import styled from "styled-components";

import phone from "../assets/images/phone.jpg";
import { Link } from "react-router-dom";
import { Ratings } from ".";
import { products_url as url } from "../utils/constants";
import axios from "axios";
import {listProducts}  from '../actions/productActions'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";


const ProductList = () => {
 
const dispatch = useDispatch()
const productlist = useSelector(state => state.productList)
const { error, loading, products } = productlist
const history = useHistory();
useEffect(() => {
  dispatch(
    listProducts())
}, [dispatch]);
const addToCartHandler = ((id)=>{
  history.push(`/cart/${id}`);
})
console.log(products); 
  return (
    <div>
      <div className="single-product-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
          <div className="row">
            {products.map((product) => {
              const { _id, name, price, image, rating, count_in_stock } = product;

              return (
                <div key={_id} className="col-md-3 col-sm-6">
                  <div className="single-shop-product">
                    <div className="single-product">
                      <div>
                        <div className="product-upper">
                          <img src={image} alt={name} />
                          <div className="product-hover">
                            {count_in_stock > 1 ? (
                              <a  className="add-to-cart-link" onClick={()=>addToCartHandler(_id)}>
                                <i className="fa fa-shopping-cart" ></i> Add to
                                cart
                              </a>
                            ) : null}
                          
                            <a
                              href={`product/${_id}`}
                              className="view-details-link"
                            >
                              <i className="fa fa-link"></i> See details
                            </a>
                          </div>
                        </div>
                      </div>
                      <h2>
                        <a href="">{name}</a>
                      </h2>
                      <div className="product-carousel-price">
                        <ins>${price}</ins> <del>${price}</del>
                      </div>
                      <Ratings rating={rating} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
