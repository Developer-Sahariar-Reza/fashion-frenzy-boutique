import React from "react";
import "./Shop.css";
import { useLoaderData } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

const Shop = () => {
  const productData = useLoaderData();
  return (
    <div className="shop-container">
      {productData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
