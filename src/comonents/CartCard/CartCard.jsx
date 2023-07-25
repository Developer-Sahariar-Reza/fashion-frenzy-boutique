import React from "react";
import "./CartCard.css";
import { TrashIcon } from "@heroicons/react/24/solid";

const CartCard = ({ product }) => {
  console.log(product);
  const { img } = product;
  return (
    <div className="cart-card">
      <div className="cart-image">
        <img src={img} alt="" />
      </div>
      <div className="cart-details">
        <div className="cart-basic-info">
          <span>{product.name}</span>
          <span>${product.price}</span>
        </div>
        <div className="cart-calculation">
          <span>Quantity: {product.quantity}</span>
          <span>Total: ${product.price * product.quantity}</span>
        </div>
        <div className="cart-remove">
          <TrashIcon className="remove-icon" />
          <span className="remove-text">Remove</span>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
