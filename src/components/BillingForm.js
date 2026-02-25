import React from "react";
import "./BillingForm.css";

function BillingForm() {
  return (
    <div className="billing-form">
      <h3>Billing address</h3>

      <div className="row">
        <div className="form-group">
          <label>First name</label>
          <input type="text" />
        </div>

        <div className="form-group">
          <label>Last name</label>
          <input type="text" />
        </div>
      </div>

      <div className="form-group">
        <label>Email</label>
        <input type="email" placeholder="you@example.com" />
      </div>

      <div className="form-group">
        <label>Address</label>
        <input type="text" placeholder="1234 Main St" />
      </div>

      <div className="form-group">
        <label>Address 2 (Optional)</label>
        <input type="text" placeholder="Apartment or suite" />
      </div>

      <div className="row">
        <div className="form-group">
          <label>Country</label>
          <select>
            <option>Choose...</option>
          </select>
        </div>

        <div className="form-group">
          <label>State</label>
          <select>
            <option>Choose...</option>
          </select>
        </div>

        <div className="form-group">
          <label>Zip</label>
          <input type="text" />
        </div>
      </div>

      <hr />

      <h3>Payment</h3>

      <div className="row">
        <div className="form-group">
          <label>Name on card</label>
          <input type="text" />
        </div>

        <div className="form-group">
          <label>Credit card number</label>
          <input type="text" />
        </div>
      </div>

      <div className="row">
        <div className="form-group">
          <label>Expiration</label>
          <input type="text" />
        </div>

        <div className="form-group">
          <label>CVV</label>
          <input type="text" />
        </div>
      </div>
      <button className="checkout-btn">Continue to checkout</button>
    </div>
  );
}

export default BillingForm;