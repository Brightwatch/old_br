import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { singleOrder } from "../actions/orderActions";
import { useParams, useHistory } from "react-router-dom";

const OrderSummary = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const singleorder = useSelector((state) => state.singleOrder);
  const { error, loading, order } = singleorder;

  const {
    _id,
    orders,
    shipping_address,
    created_at,
    payment_method,
    total_price,
  } = order;
  console.log(order)

  useEffect(() => {
    dispatch(singleOrder(id));
  }, [dispatch]);
  console.log("hi", order);

  orders.map((item) => {
    console.log("item", item.name);
  });

  return (
    <div class="order_submitted">
      <div className=" container">
        <div className="row justify-content-center ">
          <div className="col-xl-10">
            <div className="card shadow-lg ">
              <div className="row justify-content-around">
                <div className="checkout_position">
                  <div className="col-md-5">
                    <div className="fix_m">
                      <div className="card_border-0 ">
                        <div className="card-header pb-0">
                          <h2 className="card-title space ">
                            Order Submitted successfully
                          </h2>
                          <p className="card-text text-muted mt-md-4 mb-2 space">
                            YOUR ORDER Number: {_id}
                          </p>
                          <hr className="my-2" />
                        </div>
                        <div className="card-body pt-0">
                          <div className="row justify-content-between">
                            <div className="col-auto col-md-7">
                              <p className="card-text text-muted mt-4 space">
                                Cart Items :
                              </p>

                              {orders.map((item) => {
                                return (
                                  <div>
                                    <p className="item_text">
                                      <b>{item.name}   </b>
                                    </p>
                                
                          
                                </div>
                               
                                );
                              })}
                            </div>
                          
                              

                            
                            
                           
                          </div>
                          <div className="row justify-content-between">
                          <div className="col-auto mt-0">
                            <div className="address">
                              <p className="text-muted mb-2">Address:</p>{" "}
                            </div>
                            <p>
                              <b>
                                {shipping_address.address},{" "}
                                {shipping_address.city}{" "}
                                {shipping_address.postal_code},{" "}
                                {shipping_address.country}
                              </b>
                            </p>
                            <p className="card-text text-muted mt-4 space">
                               Payment Method : {payment_method}
                              

                              </p>
                              <p className="card-text text-muted mt-4 space">
                               Total Price : ${total_price}
                              

                              </p>
                            
                          </div>
                        </div>
                        </div>
                      </div>
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

export default OrderSummary;
