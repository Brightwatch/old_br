import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { savePaymentMethod } from "../actions/cartActions";

const PaymentPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress.address) {
    history.push("/shipping");
  }
  const [paymentMethod, setPaymentMethod] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if(paymentMethod){
     dispatch(savePaymentMethod(paymentMethod))
    history.push("/place-order");}
    else{
        history.push("/payment");
    }
  };

  return (
    <div>
      <div className="container_address">
        <div className="wrapper_address">
          <ul className="steps">
            <li>Step 1</li>
            <li className="is-active">Step 2</li>
            <li>Step 3</li>
          </ul>
          <form className="form_address" onSubmit={submitHandler}>
            <fieldset className="section is-active">
              <h3>Payment Method</h3>
              <div class="radio_clas" onChange={(e)=> setPaymentMethod("Paypal")}>
              <label className="rad-label" >
               
                <input type="radio" class="rad-input" name="rad" />
                <div class="rad-design"></div>
                <div class="rad-text">Paypal or credit card</div>
              </label>
              </div>
            
              <button
                type="submit"
                className="button"
                onClick={() => history.push("/shipping")}
                
              > 
                Back to shipping address
              
              </button>
        
              <button type="submit" className="button">
                Next
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
