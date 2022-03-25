import React from "react";
import styled from "styled-components";
import logo from "../assets/img/logo.png"
import { useState, createContext, useContext } from "react";
import { useDispatch, useSelector} from 'react-redux'
import {logout} from '../actions/userActions'

const Navbar = () => {

   const userLogin = useSelector(state => state.userLogin)
   const {userInfo} = userLogin
   const dispatch = useDispatch()
   const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const amount = cartItems.reduce((acc, item)=> acc + (Number(item.quantity)*Number(item.price)), 0)
  const qt = cartItems.reduce((acc,item)=> acc+ item.quantity,0)


   const logoutHandler =()=>{
      dispatch(logout())
   }
  return (

    <div >
      <div className="header-area">
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="user-menu">
                        <ul>
                            <li><a href="/profile"><i className="fa fa-user"></i> My Account</a></li>
                            <li><a href="#"><i className="fa fa-heart"></i> Wishlist</a></li>
                            <li><a href="cart.html"><i className="fa fa-user"></i> My Cart</a></li>
                            <li><a href="checkout.html"><i className="fa fa-user"></i> Checkout</a></li>
                            { userInfo ? 
                       
                                 <li><button onClick={logoutHandler} ><i className="fa fa-user"></i> Logout</button></li>
                          
                            :

                            <li><a href="/login"><i className="fa fa-user"></i> Login</a></li>

                            }
                          
                        </ul>
                    </div>
                </div>
                
                <div className="col-md-4">
                    <div className="header-right">
                        <ul className="list-unstyled list-inline">
                            <li className="dropdown dropdown-small">
                                <a data-toggle="dropdown" data-hover="dropdown" className="dropdown-toggle" href="#"><span className="key">currency :</span><span className="value">USD </span><b className="caret"></b></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">USD</a></li>
                                    <li><a href="#">INR</a></li>
                                    <li><a href="#">GBP</a></li>
                                </ul>
                            </li>

                            <li className="dropdown dropdown-small">
                                <a data-toggle="dropdown" data-hover="dropdown" className="dropdown-toggle" href="#"><span className="key">language :</span><span className="value">English </span><b className="caret"></b></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">English</a></li>
                                    <li><a href="#">French</a></li>
                                    <li><a href="#">German</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    
    
    <div className="site-branding-area">
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <div className="logo">
                        <h1><a href="./"><img src={logo}/></a></h1>
                    </div>
                </div>
                
                <div className="col-sm-6">
                    <div className="shopping-item">
                        <a href="cart.html">Cart - <span className="cart-amunt">${amount}</span> <i className="fa fa-shopping-cart"></i> <span className="product-count">{qt}</span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
   
    </div>

  );
};


export default Navbar;