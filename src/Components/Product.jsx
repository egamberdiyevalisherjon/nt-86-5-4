import React from "react";

const Product = ({ product }) => {
  return (
    <div>
      <img src={product.image} alt="" />
      <h2>{product.title}</h2>
      <h4>{product.category}</h4>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <p>Rating: {product.rating.rate}</p>
    </div>
  );
};

export default Product;
