


import React from "react";
import "./OrderSummary.css";
import { Link } from "react-router-dom";

function OrderSummary({ subtotal, shipping }) {
  const total = subtotal + shipping;

  return (
    <div className="order-summary">
      <h3>Order Summary</h3>

      <div className="summary-row">
        <span>Products (10)</span>
        <span>${subtotal}</span>
      </div>

      <div className="summary-row">
        <span>Shipping</span>
        <span>${shipping}</span>
      </div>

      <hr />

      <div className="summary-row total">
        <span>Total amount</span>
        <span>${total}</span>
      </div>

      <Link to="/checkout"><button className="checkout-btn">Go to checkout</button></Link>
    </div>
  );
}

export default OrderSummary;