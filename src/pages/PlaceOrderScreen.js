import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { orderCreation } from "../actions/orderActions";
import {
 
  ORDER_CREATE_RESET
} from '../utils/constants'

const PlaceOrderScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const cart = useSelector((state) => state.cart);
  const { shippingAddress, paymentMethod, cartItems } = cart;
  const totalAmount = cartItems.reduce(
    (acc, item) =>
      acc +
      Number(item.quantity) *
        Number(item.price),
    0
  )
  const userLogin = useSelector(state => state.userLogin)
	const {userInfo} = userLogin
  console.log(userInfo)
  const orderCreate = useSelector(state =>state.order)
  const { error, order, success} = orderCreate
  console.log("this is rsult", order)
  
  useEffect(()=>{
    if(!paymentMethod){
      history.push('/payment')
     
    }
    if(!cartItems){
      history.push('/cart')
    }
      if (success){
        history.push(`/order/${order._id}`)
        dispatch({type: ORDER_CREATE_RESET})
     
      }   
  }, [success, history, paymentMethod,cartItems])
  const submitHandler = ()=>{
   

    dispatch(orderCreation({
      order_items : cartItems,
      paymentMethod:paymentMethod,
      total_price: totalAmount,
      shipping_address: shippingAddress,
      id: userInfo.id

    }))
    

  }

  return (
    <div className="">
      <div className=" container">
        <div className="row justify-content-center ">
          <div className="col-xl-10">
            <div className="card shadow-lg ">
              <div className="row justify-content-around">
                <div className="checkout_position">
                  <div className="col-md-5">
                    <div className="card border-0">
                      <div className="card-header pb-0">
                        <h2 className="card-title space ">Checkout</h2>
                        <p className="card-text text-muted mt-4 space">
                          SHIPPING DETAILS
                        </p>
                        <hr className="my-0" />
                      </div>
                      <div className="card-body">
                        <div className="row justify-content-between">
                          <div className="col-auto mt-0">
                            <div className="address">
                              <p className="text-muted mb-2">Address:</p>{" "}
                            </div>
                            <p>
                              <b>
                                {shippingAddress.address},{" "}
                                {shippingAddress.city}{" "}
                                {shippingAddress.postalCode},{" "}
                                {shippingAddress.country}
                              </b>
                            </p>
                            <div className="address">
                              <p className="text-muted mb-2">Payment Method:</p>
                            </div>
                            <p>
                              <b>{paymentMethod}</b>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-5">
                    <div className="fix_m">
                      <div className="card_border-0 ">
                        <div className="card-header pb-0">
                          <h2 className="card-title space ">Order Content</h2>
                          <p className="card-text text-muted mt-md-4 mb-2 space">
                            YOUR ORDER{" "}
                            <Link to="/cart">
                              <span className=" small text-muted ml-2 cursor-pointer">
                                EDIT SHOPPING BAG
                              </span>{" "}
                            </Link>
                          </p>
                          <hr className="my-2" />
                        </div>
                        <div className="card-body pt-0">
                          {cartItems.map((item) => {
                            const {
                              _id,
                              name,
                              price,
                              image,
                              rating,
                              count_in_stock,
                              quantity,
                            } = item;
                            console.log(image);
                            return (
                              <div
                                key={_id}
                                className="row justify-content-between"
                              >
                                <div className="col-auto col-md-7">
                                  <div className="item_image">
                                    {" "}
                                    <img
                                      className="img-fluid"
                                      src={image}
                                      width="62"
                                      height="62"
                                    />
                                    <p className="item_text">
                                      <b>{name}</b>
                                    </p>
                                    <small className="text-muted">
                                      1 Week Subscription
                                    </small>
                                  </div>
                                </div>
                                <div className="pl-0 flex-sm-col col-auto my-auto">
                                  <div className="qt">
                                    <p className="boxed-1">{quantity}</p>
                                  </div>
                                </div>
                                <div className="pl-0 flex-sm-col col-auto my-auto ">
                                  <p className="price">
                                    <b>${Math.round(
                                          (Number(quantity) *
                                            Number(price) *
                                            100) /
                                            100
                                        )}</b>
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div className="cart_totals ">
                        
                        <table cellSpacing="0">
                          <tbody>
                            <tr className="cart-subtotal">
                              <th>Cart Subtotal</th>
                              <td>
                                <span className="amount">
                                  £
                                  {cartItems.reduce(
                                    (acc, item) =>
                                      acc +
                                      Number(item.quantity) *
                                        Number(item.price),
                                    0
                                  )}
                                </span>
                              </td>
                            </tr>

                            <tr className="shipping">
                              <th>Shipping and Handling</th>
                              <td>Free Shipping</td>
                            </tr>

                            <tr className="order-total">
                              <th>Order Total</th>
                              <td>
                                <strong>
                                  <span className="amount">
                                    $
                                    {cartItems.reduce(
                                      (acc, item) =>
                                        acc +
                                        Number(item.quantity) *
                                          Number(item.price),
                                      0
                                    )}
                                  </span>
                                </strong>{" "}
                              </td>
                            </tr>
                           
                          </tbody>
                         
                        
                        </table>
                      
                        
                      </div>
                        
                     
                    </div>
                    
                    
                  </div>
                  
                  
                </div>
                <button className="proceed_place" onClick={submitHandler}>
                                      Proceed to checkout
                                    </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrderScreen;
