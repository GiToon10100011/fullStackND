import axios from "axios";
import React, { useEffect, useState } from "react";

const FakeStore = () => {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState("all");

  const fetchItems = async () => {
    try {
      const url =
        category === "all"
          ? "https://fakestoreapi.com/products"
          : `https://fakestoreapi.com/products/category/${encodeURIComponent(
              category
            )}`;

      const response = await axios.get(url);  
      setItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [category]);

  return (
    <div>
      <h2>
        {category === "all"
          ? "All Products"
          : category.charAt(0).toUpperCase() + category.slice(1)}
      </h2>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's clothing</option>
        <option value="women's clothing">Women's clothing</option>
      </select>
      <ul className="fake-store-list">
        {items.map((item) => (
          <li key={item.id} className="fake-store-item">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FakeStore;
