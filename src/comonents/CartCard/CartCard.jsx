import React from "react";
import "./CartCard.css";
import { TrashIcon } from "@heroicons/react/24/solid";

const CartCard = ({ product, handleRemoveItem }) => {
  const { id, img, name, price, quantity } = product;

  return (
    <div className="cart-card">
      <div className="cart-image">
        <img src={img} alt="" />
      </div>
      <div className="cart-details">
        <div className="cart-basic-info">
          <span>{name}</span>
          <span>${price}</span>
        </div>
        <div className="cart-calculation">
          <span>Quantity: {quantity}</span>
          <span>Total: ${price * quantity}</span>
        </div>
        <div className="cart-remove" onClick={() => handleRemoveItem(id)}>
          <TrashIcon className="remove-icon" />
          <span className="remove-text">Remove</span>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
