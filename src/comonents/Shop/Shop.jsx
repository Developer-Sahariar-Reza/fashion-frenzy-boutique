import React from "react";
import "./Shop.css";
import { useLoaderData } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import { addToDb } from "../../utilities/fakeDb";

const Shop = () => {
  const productData = useLoaderData();

  // Add To Cart btn handler function
  const handleAddToCart = (id) => {
    console.log(id);
    addToDb(id);
  };

  return (
    <div className="shop-container">
      {productData.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};

export default Shop;
