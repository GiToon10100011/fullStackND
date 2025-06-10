import React from "react";
import { IProduct } from "../types/product.type";
import "./scss/productCard.scss";

const ProductCard = ({ sendItem }: { sendItem: IProduct }) => {
  const salePrice = (sendItem.price * (1 - sendItem.rating.rate / 100)).toFixed(
    2
  );
  return (
    <div>
      <div className="img-box">
        <img src={sendItem.image} alt={sendItem.title} />
      </div>
      <div className="text-box">
        <h3>{sendItem.title}</h3>
        <div>
          <strong>{sendItem.rating.rate}%</strong>
          <div>
            <p className="price-line">$ {sendItem.price}</p>
            <span className="price-sale">$ {salePrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
