import { useRouter } from "next/router";
import React from "react";

export default function ProductDetail() {
  const { category, productId } = useRouter().query;
  return (
    <div>
      <h1>Category: {category}</h1>
      <h2>Product ID: {productId}</h2>
    </div>
  );
}
