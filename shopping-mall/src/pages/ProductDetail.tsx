import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProduct } from "../types/product.type";
import axios from "axios";
import "./scss/productDetail.scss";
import useStore from "../stores/useStore";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<IProduct | null>(null);
  const { addCart } = useStore();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <div className="loading">Loading...</div>;

  const salePrice = (product.price * (1 - product.rating.rate / 100)).toFixed(
    2
  );

  const handleAddToCart = () => {
    addCart(product);
  };

  const handleAddToWishlist = () => {
    // TODO: Implement wishlist functionality
    console.log("Added to wishlist:", product);
  };

  return (
    <div className="container">
      <section className="content-inner">
        <div className="product-detail-box">
          <div className="product-image">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="product-info">
            <h3 className="product-title">{product.title}</h3>
            <p className="product-description">{product.description}</p>
            <div className="product-price">
              <p className="original-price">$ {product.price}</p>
              <p className="sale-price">$ {salePrice}</p>
              <span className="discount-rate">{product.rating.rate}% OFF</span>
            </div>
            <div className="product-rating">
              <p className="rating-count">Reviews: {product.rating.count}</p>
              <p className="rating-rate">Rating: {product.rating.rate}</p>
            </div>
            <div className="product-category">
              <p>Category: {product.category}</p>
            </div>
            <div className="product-actions">
              <button 
                className="add-to-cart-btn"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
              <button 
                className="add-to-wishlist-btn"
                onClick={handleAddToWishlist}
              >
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
