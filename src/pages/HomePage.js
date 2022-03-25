import React from "react";
import styled from "styled-components";
import {Features, LatestProducts} from '../components'

const HomePage = () => {
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
                        <li className="active"><a href="/">Home</a></li>
                        <li ><a href="/products">Shop page</a></li>
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
     <Features/>
     <LatestProducts/>
     
    </div>

  );
};


export default HomePage;