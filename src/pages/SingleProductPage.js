import React, { useEffect, useState } from "react";
import { Hero, Breadcrumb, Loading, Error } from "../components";
import phone from "../assets/images/phone.jpg";
import productthumb from "../assets/img/product-thumb-1.jpg";
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import { singleProduct } from "../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const history = useHistory();
  const [quantity, setQuantity] = useState(1);
  const [tabPanel, setTabPanel] = useState("description");

  const changeQuantity = (e) => {
    const value = e.target.value;
    setQuantity(value);
  };
  const dispatch = useDispatch();
  const singleproduct = useSelector((state) => state.singleProduct);
  const { error, loading, product } = singleproduct;

  useEffect(() => {
    dispatch(singleProduct(id));
  }, [dispatch]);

  console.log(product);
  const addToCartHandler = (()=>{
    history.push(`/cart/${id}?quantity=${quantity}`);
  })
  return (
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
                <li className="active">
                  <a href="/products">Shop page</a>
                </li>
                <li>
                  <a href="cart.html">Cart</a>
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
      <Hero title={"Shop"} />

      <div className="single-product-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="single-sidebar">
                <h2 className="sidebar-title">Search Products</h2>
                <form action="">
                  <input type="text" placeholder="Search products..." />
                  <input type="submit" value="Search" />
                </form>
              </div>
              <div className="single-sidebar">
                <h2 className="sidebar-title">Products</h2>
                <div className="thubmnail-recent">
                  <img src={phone} className="recent-thumb" alt="" />
                  <h2>
                    <a href="">Sony Smart TV - 2015</a>
                  </h2>
                  <div className="product-sidebar-price">
                    <ins>$700.00</ins> <del>$100.00</del>
                  </div>
                </div>
                <div className="thubmnail-recent">
                  <img src={phone} className="recent-thumb" alt="" />
                  <h2>
                    <a href="">Sony Smart TV - 2015</a>
                  </h2>
                  <div className="product-sidebar-price">
                    <ins>$700.00</ins> <del>$100.00</del>
                  </div>
                </div>
                <div className="thubmnail-recent">
                  <img src={phone} className="recent-thumb" alt="" />
                  <h2>
                    <a href="">Sony Smart TV - 2015</a>
                  </h2>
                  <div className="product-sidebar-price">
                    <ins>$700.00</ins> <del>$100.00</del>
                  </div>
                </div>
                <div className="thubmnail-recent">
                  <img src={phone} className="recent-thumb" alt="" />
                  <h2>
                    <a href="">Sony Smart TV - 2015</a>
                  </h2>
                  <div className="product-sidebar-price">
                    <ins>$700.00</ins> <del>$100.00</del>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-8">
              <div className="product-content-right">
                <div className="product-breadcroumb">
                  <Breadcrumb
                    category={product.category}
                    product={product.name}
                  />
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="product-images">
                      <div className="product-main-img">
                        <img src={product.image} alt="" />
                      </div>

                      <div className="product-gallery">
                        <img src={productthumb} alt="" />
                        <img src={productthumb} alt="" />
                        <img src={productthumb} alt="" />
                      </div>
                    </div>
                  </div>
                  {loading ? 
                    <Loading />
                   : error ? 
                    <Error />
                   : (
                    <div className="col-sm-6">
                      <div className="product-inner">
                        <h2 className="product-name">{product.name}</h2>
                        <div className="product-inner-price">
                          <ins>$700.00</ins> <del>{product.price}</del>
                        </div>
                        {product.count_in_stock > 1 ? (
                          <form action="" className="cart">
                            <div className="quantity">
                              <input
                                type="number"
                                size="4"
                                className="input-text qty text"
                                title="Qty"
                                value={quantity}
                                name="quantity"
                                min="1"
                                step="1"
                                onChange={changeQuantity}
                                max={product.count_in_stock}
                              />
                            </div>
                            <button
                              className="add_to_cart_button"
                              type="submit"
                              onClick={addToCartHandler}
                            >
                              Add to cart
                            </button>
                          </form>
                        ) : (
                          <h2>
                            {" "}
                            <BsFillExclamationTriangleFill color="red" /> Out Of
                            Stock
                          </h2>
                        )}

                        <div className="product-inner-category">
                          <p>
                            Category: <a href="">{product.category}</a>. Tags:{" "}
                            <a href="">awesome</a>, <a href="">best</a>,{" "}
                            <a href="">sale</a>, <a href="">shoes</a>.{" "}
                          </p>
                        </div>

                        <div role="tabpanel">
                          <ul className="product-tab" role="tablist">
                            <li
                              role="presentation"
                              className={`${
                                tabPanel === "description" ? "active" : null
                              }`}
                              onClick={() => setTabPanel("description")}
                            >
                              <a
                                href="#home"
                                aria-controls="home"
                                role="tab"
                                data-toggle="tab"
                              >
                                Description
                              </a>
                            </li>
                            <li
                              role="presentation"
                              className={`${
                                tabPanel === "reviews" ? "active" : null
                              }`}
                              onClick={() => setTabPanel("reviews")}
                            >
                              <a
                                href="#profile"
                                aria-controls="profile"
                                role="tab"
                                data-toggle="tab"
                              >
                                Reviews
                              </a>
                            </li>
                          </ul>
                          <div className="tab-content">
                            <div
                              role="tabpanel"
                              className="tab-pane fade in active"
                              id="home"
                            >
                              <h2>Product Description</h2>
                              <p>{product.description}</p>
                            </div>
                            <div
                              role="tabpanel"
                              className="tab-pane fade"
                              id="profile"
                            >
                              <h2>Reviews</h2>
                              <div className="submit-review">
                                <p>
                                  <label htmlFor="name">Name</label>{" "}
                                  <input name="name" type="text" />
                                </p>
                                <p>
                                  <label htmlFor="email">Email</label>{" "}
                                  <input name="email" type="email" />
                                </p>
                                <div className="rating-chooser">
                                  <p>Your rating</p>

                                  <div className="rating-wrap-post">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                  </div>
                                </div>
                                <p>
                                  <label htmlFor="review">Your review</label>{" "}
                                  <textarea
                                    name="review"
                                    id=""
                                    cols="30"
                                    rows="10"
                                  ></textarea>
                                </p>
                                <p>
                                  <input type="submit" value="Submit" />
                                </p>
                              </div>
                            </div>
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
      </div>
    </div>
  );
};

export default SingleProduct;
