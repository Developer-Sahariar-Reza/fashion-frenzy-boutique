import React from "react";
import "./Cart.css";
import { Link, useLoaderData } from "react-router-dom";
import CartCard from "../CartCard/CartCard";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakeDB";

const Cart = () => {
  const { cartArray } = useLoaderData();

  // calculation
  let total = 0;
  if (cartArray.length > 0) {
    for (const product of cartArray) {
      total = total + product.price * product.quantity;
    }
  }

  //Remove item from shopping cart
  const handleRemoveItem = (id) => {
    removeFromDb(id);
  };

  //Delete shopping cart
  const deleteCartHandler = () => {
    deleteShoppingCart();
  };

  return (
    <div className="cart">
      <h2 className="cart-title">
        {cartArray.length ? "Review Cart Items" : "Cart is Empty!!"}
      </h2>

      <div className="cart-container">
        {cartArray.map((product) => (
          <CartCard
            key={product.id}
            product={product}
            handleRemoveItem={handleRemoveItem}
          />
        ))}
      </div>

      {/* cart calculation  */}
      <div className="cart-calc-details">
        <h3>Total Amount: ${total}</h3>
        <p>Not including taxes and shipping costs.</p>
      </div>

      {/* cart buttons  */}
      <div className="cart-btn-container">
        {cartArray.length > 0 ? (
          <button className="common-btn" onClick={deleteCartHandler}>
            Clear Cart
          </button>
        ) : (
          <Link className="common-btn" to="/shop">
            Back To Shop
          </Link>
        )}
        <button className="common-btn">Place Order</button>
      </div>
    </div>
  );
};

export default Cart;
