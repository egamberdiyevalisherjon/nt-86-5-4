import React, { useState, useEffect } from "react";
import Product from "../Components/Product";
import imageUrl from "../assets/react.svg";

const About = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(5);

  function handleIncrease() {
    setCount(count + 1);
  }

  function handleDecrease() {
    setCount(count - 1);
  }

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=${count}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, [count]);

  return (
    <div>
      <img src="/vite.svg" alt="" />
      <img src={imageUrl} alt="" />
      About
      <button onClick={handleDecrease} disabled={count < 2}>
        -
      </button>
      {count}
      <button onClick={handleIncrease} disabled={count > 19}>
        +
      </button>
      <div>
        {products.map((p, index) => (
          <Product product={p} key={crypto.randomUUID()} />
        ))}
      </div>
    </div>
  );
};

export default About;
