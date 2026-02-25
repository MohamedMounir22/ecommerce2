import React from "react";
import "./CartItem.css";
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, selectCartTotal, removeFromCart, changeQuantity, clearCart } from '../store/cartSlice';
import { useNavigate } from 'react-router-dom';

function CartItem() {

      const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  return (
    <>
    {items.map((item) => {
      const product = item.product || item;
      return (
    <div className="cart-item" key={item.id}>
      <img src={product.image} alt={product.name} />

      <div className="item-info">
        <h3>{product.name}</h3>
      </div>

      <div className="quantity">
        <button onClick={() => {
          if (item.quantity > 1) dispatch(changeQuantity({ id: item.id, quantity: item.quantity - 1 }));
          else dispatch(removeFromCart(item.id));
        }}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => dispatch(changeQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button>
      </div>

      <div className="price">
        {item.quantity} x ${product.price}
      </div>
    </div>
      );
    })}
    </>
  );
  
}

export default CartItem;
















// function Cart() {


//   const shipping = total > 100 ? 0 : items.length > 0 ? 5 : 0;
//   const grandTotal = total + shipping;

//   if (!items || items.length === 0) {
//     return (
//       <div className="container my-4">
//         <h2>Your Cart</h2>
//         <p>Your cart is empty.</p>
//       </div>
//     );
//   }
// ........................................
//   return (
//     <div className="container my-4">
//       <h2>Your Cart</h2>
//       <div className="row">
//         <div className="col-md-8">
        //   <div className="card mb-3">
        //     <div className="card-body">
        //       {items.map((it) => (
        //         <div key={it.id} className="d-flex align-items-center justify-content-between mb-3">
        //           <div className="d-flex align-items-center">
        //             <img src={it.product.image} alt={it.product.name} style={{ width: 80, height: 80, objectFit: 'cover', marginRight: 12 }} />
        //             <div>
        //               <div className="fw-bold">{it.product.name}</div>
        //               <div className="text-muted">${it.product.price.toFixed(2)}</div>
        //             </div>
        //           </div>
{/* 
                  <div className="d-flex align-items-center">
                    <div className="input-group input-group-sm me-3" style={{ width: 130 }}>
                      <button className="btn btn-outline-secondary" type="button" onClick={() => {
                        if (it.quantity > 1) dispatch(changeQuantity({ id: it.id, quantity: it.quantity - 1 }));
                      }}>-</button>
                      <input type="number" className="form-control text-center" value={it.quantity} min={1} onChange={(e) => dispatch(changeQuantity({ id: it.id, quantity: Number(e.target.value) }))} />
                      <button className="btn btn-outline-secondary" type="button" onClick={() => dispatch(changeQuantity({ id: it.id, quantity: it.quantity + 1 }))}>+</button>
                    </div>

//                     <div className="me-3">{it.quantity} x ${it.product.price.toFixed(2)}</div>
//                     <div className="fw-bold me-3">${(it.quantity * it.product.price).toFixed(2)}</div>
//                     <button className="btn btn-sm btn-outline-danger" onClick={() => dispatch(removeFromCart(it.id))}>Remove</button>
//                   </div>
//                 </div>
              ))}
            </div>
          </div> */}

//           <div className="d-flex justify-content-between align-items-center">
//             <strong>Subtotal:</strong>
//             <strong>${total.toFixed(2)}</strong>
//           </div>
//         </div>

//         <div className="col-md-4">
//           <div className="card">
//             <div className="card-body">
//               <h5 className="card-title">Order Summary</h5>
//               <hr />
//               <div>
//                 {items.map((it) => (
//                   <div key={it.id} className="d-flex justify-content-between mb-2">
//                     <div className="text-truncate" style={{ maxWidth: 180 }}>{it.product.name} ({it.quantity})</div>
//                     <div>${(it.quantity * it.product.price).toFixed(2)}</div>
//                   </div>
//                 ))}
//               </div>

//               <div className="d-flex justify-content-between mt-3">
//                 <div>Shipping</div>
//                 <div>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</div>
//               </div>

//               <div className="d-flex justify-content-between mt-2 mb-3">
//                 <strong>Total</strong>
//                 <strong>${grandTotal.toFixed(2)}</strong>
//               </div>

//               <div className="d-grid">
//                 <button className="btn btn-primary" onClick={() => navigate('/checkout')}>Go to Checkout</button>
//                 <button className="btn btn-outline-secondary mt-2" onClick={() => dispatch(clearCart())}>Clear Cart</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cart;