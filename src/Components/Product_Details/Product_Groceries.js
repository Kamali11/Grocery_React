import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../../Pages/ProductMenu/Groceries";
import { groceries } from "../../Data/GroceriesData";
import "./Product_Vegtable.css";
import { frequently } from "../../Data/GroceriesData";

// images
import ad1 from "../../assets/quality.jpg";
import ad2 from "../../assets/on-time.jpg";
import ad3 from "../../assets/free.jpg";
import ad4 from "../../assets/return.jpg";

const Product_Groceries = () => {
  const { id } = useParams();
  let result = groceries.filter((item) => item.id == id);
  //   console.log(result)

  const [selectedStar, setSelectedStar] = useState(0);
  let [count, setCount] = useState(1);

  function Add() {
    setCount(count + 1);
  }
  function Subtract() {
    setCount(count - 1);
  }
  if (count < 1) {
    setCount((count = 1));
  }

  return (
    <div>
      {result.map((item, id) => {
        return (
          <div key={id}>
            <div className="veg">
              <Link to={"/"} style={{ color: "#149104" }}>
                Home
              </Link>
              <p>{">"}</p>
              <Link to={"/menu"}>Shop Catagory</Link>
              <p>{">"}</p>
              <Link to={"/groceries"}>Grocery</Link>
              <p>{">"}</p>
              <Link>{item.product_name}</Link>
            </div>

            <section className="content-page">
              <div className="par-first1">
                <div className="product-name1">
                  <h2>Fresh {item.veg_name}</h2>
                  <p style={{ color: "#8a8a8a", fontSize: "19px" }}>Vegtable</p>
                </div>
                <div className="shareicon1">
                  <Link type="button" className="share">
                    {" "}
                    <i class="fa-solid fa-share"></i> <p>Share</p>
                  </Link>
                  <div className="hideicon">
                    <Link style={{ color: "blue" }}>
                      <i className="fa-brands fa-facebook"></i>
                    </Link>
                    <Link style={{ color: "red" }}>
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                    <Link style={{ color: "#159104c5" }}>
                      <i className="fa-brands fa-whatsapp"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="product-img">
                <div className="main-product">
                  <img src={item.img} alt="..." />
                </div>
                <div className="sub-product">
                  <img src={item.img} alt="" />
                  <img src={item.img} alt="" />
                  <img src={item.img} alt="" />
                </div>
                <div className="details">
                  <h3>Specifications</h3>
                  <p>General</p>
                  <div>
                    <div>
                      <table>
                        <tr>
                          Brand <td>Delish by EKart</td>
                        </tr>
                        <tr>
                          Model Name <td>{item.product_name}</td>
                        </tr>
                        <tr>
                          Quality <td>500g</td>
                        </tr>
                        <tr>
                          Type <td>Groceries</td>
                        </tr>
                        <tr>
                          Organic <td>Yes</td>
                        </tr>
                        <tr>
                          Mrp <td>{item.mrp}</td>
                        </tr>
                        <tr>
                          Description <td>{item.description}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <section className="right-content">
                <div className="par-first">
                  <div className="product-name">
                    <h2>{item.product_name}</h2>
                    <p style={{ color: "#8a8a8a", fontSize: "19px" }}>
                      Groceries
                    </p>
                  </div>
                  <div className="shareicon">
                    <Link type="button" className="share">
                      {" "}
                      <i class="fa-solid fa-share"></i> <p>Share</p>
                    </Link>
                    <div className="hideicon">
                      <Link style={{ color: "blue" }}>
                        <i className="fa-brands fa-facebook"></i>
                      </Link>
                      <Link style={{ color: "red" }}>
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                      <Link style={{ color: "#159104c5" }}>
                        <i className="fa-brands fa-whatsapp"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="price">
                  <span className="orgprice">₹{item.mrp}(1kg)</span>
                  <span>
                    <del style={{ color: "grey" }}>₹{item.delprice}</del>
                  </span>
                  <span style={{ color: "#4CAF50" }}>{item.offer} OFFER</span>
                </div>
                <div className="about">
                  <p style={{ color: "grey", fontSize: "18px" }}>
                    {item.description}
                  </p>
                </div>

                <div className="add-product">
                  <div className="quantity-container">
                    <button className="quantity-button" onClick={Subtract}>
                      -
                    </button>
                    <input
                      type="text"
                      className="quantity-input"
                      id="quantity"
                      value={count}
                      readonly
                    />
                    <button className="quantity-button" onClick={Add}>
                      +
                    </button>
                  </div>
                  <button className="add-btn" type="button">
                    Add to Cart
                  </button>
                </div>
                <div className="wishlist">
                  <Link>
                    {" "}
                    <i className="fa-regular fa-heart"></i>
                    <span style={{ marginLeft: "5px", fontSize: "18px" }}>
                      Add to Wishlist
                    </span>
                  </Link>
                </div>
                <p style={{ fontSize: "20px" }}>Pack sizes</p>
                <section className="box2">
                  <div className="pack-size">
                    <div className="pack">
                      <p>1kg</p>
                      <p>
                        ₹55.5{" "}
                        <span style={{ color: "#8a8a8a", fontSize: "13px" }}>
                          (₹55.5 / kg)
                        </span>
                      </p>
                    </div>
                    <div className="tik">
                      <i className="fa-solid fa-check"></i>
                    </div>
                  </div>
                  <p style={{ textAlign: "center" }}>
                    <del style={{ color: "#494545a0" }}>₹ 74</del>{" "}
                    <span
                      style={{
                        backgroundColor: "rgba(199, 224, 233, 0.76)",
                        fontSize: "13px",
                        color: "#404040",
                      }}
                    >
                      25% OFF
                    </span>
                  </p>
                </section>

                <section className="box2">
                  <div className="pack-size">
                    <div className="pack">
                      <p>500g</p>
                      <p>
                        ₹27.75
                        <span style={{ color: "#8a8a8a", fontSize: "13px" }}>
                          (0.5/g)
                        </span>
                      </p>
                    </div>
                    <div className="tik">
                      <i className="fa-solid fa-check"></i>
                    </div>
                  </div>
                  <p style={{ textAlign: "center" }}>
                    <del style={{ color: "#494545a0" }}>₹ 37</del>{" "}
                    <span
                      style={{
                        backgroundColor: "rgba(199, 224, 233, 0.76)",
                        fontSize: "13px",
                        color: "#404040",
                      }}
                    >
                      25% OFF
                    </span>
                  </p>
                </section>

                <section>
                  <h2>Rating and Reviews</h2>
                  <div className="star">
                    {[...Array(5)].map((_, index) => {
                      return (
                        <span
                          key={index}
                          className={`${
                            index + 1 <= selectedStar ? "selected" : ""
                          } `}
                          onClick={() => {
                            setSelectedStar(index + 1);
                          }}
                        >
                          &#9733;
                        </span>
                      );
                    })}
                  </div>
                  <p className="count"> Ratings:{selectedStar}Star</p>
                  <div>
                    <textarea placeholder="Write your Feedback...."></textarea>
                    <button className="subBtn" type="submit">
                      Submit
                    </button>
                  </div>
                </section>
                <div className="safe">
                  <i class="fa-solid fa-shield-halved"></i>
                  <p>
                    Safe and Secure Payments.Easy returns.100% Authentic
                    products.
                  </p>
                </div>
              </section>
            </section>

            <section className="benefit">
              <p>Why Choose E KART?</p>

              <div className="quality">
                <img src={ad1} alt="" />
                <img src={ad2} alt="" />
                <img src={ad3} alt="" />
                <img src={ad4} alt="" />
              </div>
            </section>

            <section class="about-product">
              <p>Fresh {item.product_name}</p>
              <div class="content-product">
                <p>Benefits</p>
                <p className="abt" style={{ fontSize: "19px" }}>
                  {item.about}
                </p>
              </div>
            </section>

            <section>
              <p className="sidetitle">Bought Together</p>

              <div className="simlarProduct">
                {frequently.length > 0
                  ? frequently.map((item, id) => {
                      return (
                        <div className="products" key={id}>
                          <Link to={`/groceries/${item.id}`}>
                            <img src={item.img} alt="..." />
                            <p style={{ color: "rgba(128, 128, 128, 0.779)" }}>
                              Groceries
                            </p>
                            <p className="tle-veg">{item.product_name}</p>

                            <div className="adding">
                              <p
                                className="price"
                                style={{ color: "rgb(207, 8, 108)" }}
                              >
                                MRP {item.mrp}
                              </p>
                              <p>
                                <button>
                                  <i className="fa-solid fa-cart-arrow-down"></i>
                                  Add
                                </button>
                              </p>
                            </div>
                            <div className="offer">
                              {item.offer ? (
                                <p>
                                  <i>Offer {item.offer_presentage}</i>
                                </p>
                              ) : (
                                ""
                              )}
                            </div>
                          </Link>
                        </div>
                      );
                    })
                  : "Data Not Found"}
              </div>
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default Product_Groceries;
