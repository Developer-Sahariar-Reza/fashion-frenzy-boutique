import React from "react";
import "./Cart.css";
import { useLoaderData } from "react-router-dom";
import CartCard from "../CartCard/CartCard";

const Cart = () => {
  const { cartArray } = useLoaderData();
  console.log(cartArray);
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
    </div>
  );
};

export default Cart;
