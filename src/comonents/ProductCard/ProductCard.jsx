import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, handleAddToCart }) => {
  const { id, name, img, category, price } = product;
  return (
    <div className="product-card">
      <div>
        <img src={img} alt="" className="product-image" />
      </div>
      <div>
        <h2 className="product-name">{name}</h2>
        <p className="product-category">Category: {category}</p>
        <p className="product-price">Price: {price}</p>
        <button className="common-btn" onClick={() => handleAddToCart(id)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
