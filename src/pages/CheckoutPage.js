import React from "react";
// import Navbar from "../components/Navbar";
import BillingForm from "../components/BillingForm";
import OrderSummary from "../components/OrderSummary";
import "./CheckoutPage.css";

function CheckoutPage() {
  const subtotal = 2071;
  const shipping = 30;

  return (
    <>
      {/* <Navbar /> */}

      <div className="checkout-container">
        <h1 className="checkout-title">Checkout</h1>

        <div className="checkout-content">
          <BillingForm />
          <OrderSummary subtotal={subtotal} shipping={shipping} />
          {/* continue to checkout button */}
        
        </div>
      </div>
    </>
  );
}

export default CheckoutPage;