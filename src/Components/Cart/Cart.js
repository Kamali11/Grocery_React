import React, { useEffect, useState } from "react";
// import { Link, JSON, useSearchParams } from "react-router-dom";

import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
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
  const [item, setItem] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("addCart"));
    setItem(data);
  }, []);
  return (
    <div className="cart">
      <p className="title_cart">Shopping Cart</p>
      <div className="cart_left">
      <table className="table_cart">
        <tr className="row_table">
          <th>Image</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total Price</th>
          <th>Remove</th>
        </tr>
      </table>
      {item && item.length > 0
        ? 
        item.map((item, id) => {
            return (
                  <table className="table_cart">
                    <tr className="row_table">
                      <th className="cart_img">
                        <img src={item.img} />
                      </th>
                      <th>
                        <p>{item.product_name}</p>
                      </th>
                      <th>
                        <p>MRP {item.mrp}</p>
                      </th>
                      <th>
                        <div className="quantity-container">
                          <button className="quantity-button" onClick={Subtract} >
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
                      </th>
                      <th>{}</th>
                      <th><button className="remove">Remove</button></th>
                    </tr>
                  </table>
            );
          })
        : "Your Cart is Empty"}
      </div>
    <div className='return' >
    <Link to={'/menu'}>Return to Purchase</Link>
    </div>
    </div>
  );
};

export default Cart;
