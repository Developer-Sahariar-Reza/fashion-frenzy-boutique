import React from "react";
import "./Cart.css";
import { useLoaderData } from "react-router-dom";
import CartCard from "../CartCard/CartCard";

const Cart = () => {
  const { cartArray } = useLoaderData();

  // calculation
  let total = 0;
  if (cartArray.length > 0) {
    for (const product of cartArray) {
      total = total + product.price * product.quantity;
    }
  }
  return (
    <div className="cart">
      <h2 className="cart-title">
        {cartArray.length ? "Review Cart Items" : "Cart is Empty!!"}
      </h2>

      <div className="cart-container">
        {cartArray.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </div>

      {/* cart calculation  */}
      <div className="cart-calc-details">
        <h3>Total Amount: ${total}</h3>
        <p>Not including taxes and shipping costs.</p>
      </div>
    </div>
  );
};

export default Cart;
