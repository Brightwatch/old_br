import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { saveShippingAddress } from "../actions/cartActions";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    history.push("/payment");
  };
  return (
    <div>
      <div className="container_address">
        <div className="wrapper_address">
          <ul className="steps">
            <li className="is-active">Step 1</li>
            <li>Step 2</li>
            <li>Step 3</li>
          </ul>
          <form className="form_address" onSubmit={submitHandler}>
            <fieldset className="section is-active">
              <h3>Your Details</h3>
              <input
                type="text"
                required="required"
                name="Address"
                id="Address"
                placeholder="Enter Address"
                value={address ? address : ""}
                onChange={(e) => setAddress(e.target.value)}
              />
              <input
                type="text"
                required="required"
                name="City"
                id="City"
                placeholder="Enter City"
                value={city ? city : ""}
                onChange={(e) => setCity(e.target.value)}
              />
              <input
                type="text"
                required="required"
                name="Postal Code"
                id="Postal Code"
                placeholder="Enter Postal Code"
                value={postalCode ? postalCode : postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              />
              <input
                type="text"
                required="required"
                name="Country"
                id="Country"
                placeholder="Enter Country"
                value={country ? country : country}
                onChange={(e) => setCountry(e.target.value)}
              />
              <button
                type="submit"
                className="button"
                onClick={() => history.push("/cart")}
              >
                Back to cart
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

export default CheckoutPage;
