import React from "react";
import styled from "styled-components";

const Hero = ({title}) => {
  return (

    <div >
     <div className="product-big-title-area">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="product-bit-title text-center">
                        <h2>{title}</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>

  );
};


export default Hero;