import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../store/cartSlice';
import './home.css';
import { useNavigate } from 'react-router-dom';


// import Navbar from "../components/Navbar";
import CartItem from "../components/CartItem";
import OrderSummary from "../components/OrderSummary";
import "./Cart.css";

function CartPage() {
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const dispatch = useDispatch();
  const navigate = useNavigate();


   const shipping = total > 100 ? 0 : items.length > 0 ? 5 : 0;

   if (!items || items.length === 0) {
    return (
      <div className="container my-4">
        <h2>Your Cart</h2>
        <p>Your cart is empty.</p>
      </div>
    );
  }


  return (
    <>
      {/* <Navbar /> */}

      <div className="cart-container">
        <div className="item-list">
          <h2>Item List</h2>
          <CartItem />
        </div>

        <OrderSummary subtotal={total} shipping={shipping} />
      </div>
    </>
  );
}

export default CartPage;
