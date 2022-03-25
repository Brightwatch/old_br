import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, useLocation } from "react-router-dom";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { Hero } from "../components";
import phone from "../assets/images/phone.jpg";
const Cart = () => {
  const { id } = useParams();
  const history = useHistory();
  const location = useLocation();
  const [totalAmount, setTotalAmount] = useState(0);
  const quantity = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  console.log("hello cart items", cartItems);
  const setQty = (e) => {
    const value = e.target.value;
    //setQuantity(value);
  };
  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, quantity));
    }
  }, [dispatch, id, quantity]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <div>
      <div>
        <div className="mainmenu-area">
          <div className="container">
            <div className="row">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
              <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/products">Shop page</a>
                  </li>
                  <li className="active">
                    <a href="/cart">Cart</a>
                  </li>
                  <li>
                    <a href="checkout.html">Checkout</a>
                  </li>
                  <li>
                    <a href="#">Category</a>
                  </li>
                  <li>
                    <a href="#">Others</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Hero title={"Shopping Cart"} />
        <div className="single-product-area">
          <div className="zigzag-bottom"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="single-sidebar">
                  <h2 className="sidebar-title">Search Products</h2>
                  <form action="#">
                    <input type="text" placeholder="Search products..." />
                    <input type="submit" value="Search" />
                  </form>
                </div>

                <div className="single-sidebar">
                  <h2 className="sidebar-title">Products</h2>
                  <div className="thubmnail-recent">
                    <img
                      src="img/product-thumb-1.jpg"
                      className="recent-thumb"
                      alt=""
                    />
                    <h2>
                      <a href="single-product.html">Sony Smart TV - 2015</a>
                    </h2>
                    <div className="product-sidebar-price">
                      <ins>$700.00</ins> <del>$800.00</del>
                    </div>
                  </div>
                  <div className="thubmnail-recent">
                    <img
                      src="img/product-thumb-1.jpg"
                      className="recent-thumb"
                      alt=""
                    />
                    <h2>
                      <a href="single-product.html">Sony Smart TV - 2015</a>
                    </h2>
                    <div className="product-sidebar-price">
                      <ins>$700.00</ins> <del>$800.00</del>
                    </div>
                  </div>
                  <div className="thubmnail-recent">
                    <img
                      src="img/product-thumb-1.jpg"
                      className="recent-thumb"
                      alt=""
                    />
                    <h2>
                      <a href="single-product.html">Sony Smart TV - 2015</a>
                    </h2>
                    <div className="product-sidebar-price">
                      <ins>$700.00</ins> <del>$800.00</del>
                    </div>
                  </div>
                  <div className="thubmnail-recent">
                    <img
                      src="img/product-thumb-1.jpg"
                      className="recent-thumb"
                      alt=""
                    />
                    <h2>
                      <a href="single-product.html">Sony Smart TV - 2015</a>
                    </h2>
                    <div className="product-sidebar-price">
                      <ins>$700.00</ins> <del>$800.00</del>
                    </div>
                  </div>
                </div>

                <div className="single-sidebar">
                  <h2 className="sidebar-title">Recent Posts</h2>
                  <ul>
                    <li>
                      <a href="#">Sony Smart TV - 2015</a>
                    </li>
                    <li>
                      <a href="#">Sony Smart TV - 2015</a>
                    </li>
                    <li>
                      <a href="#">Sony Smart TV - 2015</a>
                    </li>
                    <li>
                      <a href="#">Sony Smart TV - 2015</a>
                    </li>
                    <li>
                      <a href="#">Sony Smart TV - 2015</a>
                    </li>
                  </ul>
                </div>
              </div>
              {cartItems.length === 0 ? (
                <h2>
                  Your cart is empty <Link to="/products"> Go Back</Link>
                </h2>
              ) : (
                <div className="col-md-8">
                  <div className="product-content-right">
                    <div className="woocommerce">
                      <form method="post" action="#">
                        <table cellSpacing="0" className="shop_table cart">
                          <thead>
                            <tr>
                              <th className="product-remove">&nbsp;</th>
                              <th className="product-thumbnail">&nbsp;</th>
                              <th className="product-name">Product</th>
                              <th className="product-price">Price</th>
                              <th className="product-quantity">Quantity</th>
                              <th className="product-subtotal">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            {cartItems.map((item) => {
                              return (
                                <>
                                  <tr key={item.product} className="cart_item">
                                    <td className="product-remove">
                                      <a
                                        title="Remove this item"
                                        className="remove"
                                        href="#"
                                        onClick={() =>
                                          removeFromCartHandler(item.product)
                                        }
                                      >
                                        ×
                                      </a>
                                    </td>
                                    <td className="product-thumbnail">
                                      <a href="single-product.html">
                                        <img
                                          width="145"
                                          height="145"
                                          alt="poster_1_up"
                                          className="shop_thumbnail"
                                          src={item.image}
                                        />
                                      </a>
                                    </td>
                                    <td className="product-name">
                                      <a href="single-product.html">
                                        {item.name.substr(0, 15)}...
                                      </a>
                                    </td>

                                    <td className="product-price">
                                      <span className="amount">
                                        ${item.price}
                                      </span>
                                    </td>

                                    <td className="product-quantity">
                                      <div className="quantity buttons_added">
                                        <div className="quantity">
                                          <input
                                            type="number"
                                            size="4"
                                            className="input-text qty text"
                                            title="Qty"
                                            value={item.quantity}
                                            name="quantity"
                                            min="1"
                                            step="1"
                                            onChange={(e) =>
                                              dispatch(
                                                addToCart(
                                                  item.product,
                                                  Number(e.target.value)
                                                )
                                              )
                                            }
                                            max={item.count_in_stock}
                                          />
                                        </div>
                                      </div>
                                    </td>
                                    <td className="product-subtotal">
                                      <span className="amount">
                                        ${" "}
                                        {Math.round(
                                          (Number(item.quantity) *
                                            Number(item.price) *
                                            100) /
                                            100
                                        )}
                                      </span>
                                    </td>
                                  </tr>
                                </>
                              );
                            })}
                            <tr>
                              <td className="actions" colSpan="6">
                                <Link to="/products" className="proceed">
                                  Update Cart
                                </Link>
                                {cartItems.length > 0 ? (
                                  userInfo ? (
                                    <Link to="/shipping" className="proceed">
                                      Proceed to checkout
                                    </Link>
                                  ) : (
                                    <Link to="/login/" className="proceed">
                                      Proceed to checkout
                                    </Link>
                                  )
                                ) : null}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </form>
                      <div className="cart_totals ">
                        <h2>Cart Totals</h2>

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
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
