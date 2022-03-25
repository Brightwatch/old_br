import React from "react";
import styled from "styled-components";
import slide1 from "../assets/img/h4-slide.png";

const Features = () => {
  return (
    <div>
      <div class="slider-area">
        <div class="block-slider block-slider4">
          <ul class="" id="bxslider-home4">
            <li>
              <img src={slide1} alt="Slide" />
              <div class="caption-group">
                <h2 class="caption title">
                  iPhone{" "}
                  <span class="primary">
                    6 <strong>Plus</strong>
                  </span>
                </h2>
                <h4 class="caption subtitle">Dual SIM</h4>
                <a class="caption button-radius" href="#">
                  <span class="icon"></span>Shop now
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="promo-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="single-promo promo1">
                <i className="fa fa-refresh"></i>
                <p>30 Days return</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-promo promo2">
                <i className="fa fa-truck"></i>
                <p>Free shipping</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-promo promo3">
                <i className="fa fa-lock"></i>
                <p>Secure payments</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-promo promo4">
                <i className="fa fa-gift"></i>
                <p>New products</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
