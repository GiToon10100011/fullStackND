import React, { useState } from "react";
import useStore from "../stores/useStore";
import Title from "../components/Title";
import "./scss/cart.scss";

const Cart = () => {
  const { cartItems, removeFromCart } = useStore();
  const [quantities, setQuantities] = useState<{ [key: number]: number }>(
    cartItems.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
  );

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setQuantities((prev) => ({ ...prev, [id]: newQuantity }));
  };

  const handleDelete = (id: number) => {
    removeFromCart(id);
    setQuantities((prev) => {
      const newQuantities = { ...prev };
      delete newQuantities[id];
      return newQuantities;
    });
  };

  const calculateTotal = (price: number, quantity: number) => {
    return (price * quantity).toFixed(2);
  };

  return (
    <div className="container">
      <Title title="장바구니" />
      <ul className="cart-list">
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <div className="cart-item-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="cart-item-info">
              <div className="cart-item-title">{item.title}</div>
              <div className="cart-item-price">${item.price}</div>
              <div className="cart-item-quantity">
                <button
                  onClick={() =>
                    handleQuantityChange(item.id, quantities[item.id] - 1)
                  }
                  className="quantity-btn"
                >
                  -
                </button>
                <span>{quantities[item.id]}</span>
                <button
                  onClick={() =>
                    handleQuantityChange(item.id, quantities[item.id] + 1)
                  }
                  className="quantity-btn"
                >
                  +
                </button>
              </div>
              <div className="cart-item-total">
                ${calculateTotal(item.price, quantities[item.id])}
              </div>
              <button
                onClick={() => handleDelete(item.id)}
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
