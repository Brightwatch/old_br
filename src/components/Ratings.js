import React from "react";
import styled from "styled-components";
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

const Ratings = ({rating}) => {
  return (

    <Wrapper >
       <div className="rating">
      <span> { rating >= 1 ? <BsStarFill/> : rating>=0.5 ? <BsStarHalf/> : <BsStar/>}</span>
      <span> { rating >= 2 ? <BsStarFill/> : rating>=1.5 ? <BsStarHalf/> : <BsStar/>}</span>
      <span> { rating >= 3 ? <BsStarFill/> : rating>=2.5 ? <BsStarHalf/> : <BsStar/>}</span>
      <span> { rating >= 4 ? <BsStarFill/> : rating>=3.5 ? <BsStarHalf/> : <BsStar/>}</span>
      <span> { rating >= 5 ? <BsStarFill/> : rating>=4.5 ? <BsStarHalf/> : <BsStar/>}</span>
    </div>
    </Wrapper>

  );
};
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`

export default Ratings;