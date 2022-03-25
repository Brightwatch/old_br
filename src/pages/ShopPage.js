import React from "react";
import styled from "styled-components";
import { Hero, ProductList } from '../components'

const Shop = () => {
  return (

    <div >
         <div className="mainmenu-area">
        <div className="container">
            <div className="row">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div> 
                <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li ><a href="/">Home</a></li>
                        <li className="active"><a href="/products">Shop page</a></li>
                        <li><a href="/cart">Cart</a></li>
                        <li><a href="checkout.html">Checkout</a></li>
                        <li><a href="#">Category</a></li>
                        <li><a href="#">Others</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>  
            </div>
        </div>
    </div>
      <Hero title={"Shop"}/>
      <ProductList/>
    </div>

  );
};


export default Shop;