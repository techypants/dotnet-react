import React, { useState, useEffect } from "react";
import "../index.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const apiUrl = "http://localhost:5053/pizzas";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <div className="product-list">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-slate-700 text-white flex justify-center items-center flex-col m-7 rounded-lg"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-[40%]"
            />
            <div className="text-2xl font-bold">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
            </div>
            <div className="text-xl">
              <p>Price: ${product.price}</p>
              <p>Rating: {product.rating}</p>
              <p>Stock: {product.stock}</p>
              <p>Brand: {product.brand}</p>
              <p>Category: {product.category}</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4 ">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${index}`}
                  className="rounded-lg"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
