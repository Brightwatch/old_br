import React from "react";
import styled from "styled-components";
import phone from "../assets/images/phone.jpg";
const LatestProducts = () => {
  return (

    <div >
  <div className="maincontent-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="latest-product">
                        <h2 className="section-title">Latest Products</h2>
                        <div className="product-carousel">
                            <div className="single-product">
                                <div className="product-f-image">
                                    <img src={phone} alt=""/>
                                    <div className="product-hover">
                                        <a href="#" class="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                        <a href="single-product.html" className="view-details-link"><i className="fa fa-link"></i> See details</a>
                                    </div>
                                </div>
                                
                                <h2><a href="single-product.html">Samsung Galaxy s5- 2015</a></h2>
                                
                                <div className="product-carousel-price">
                                    <ins>$700.00</ins> <del>$100.00</del>
                                </div> 
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    </div>

  );
};


export default LatestProducts;