import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Breadcrumb = ({category, product}) => {
  return (

         <div className="section-center">
        <h3>
            <Link to="/">
                Home 
            </Link>
            <Link to="/">
                /{category} 
            </Link>

            {product && <Link to="/products">/{product}</Link>}
            
        </h3>

    </div>


  );
};
const Wrapper = styled.section`
  background: var(--clr-primary-10);
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;
  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`

export default Breadcrumb;