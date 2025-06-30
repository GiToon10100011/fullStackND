import { IProduct } from "@/types/product.type";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import React from "react";

export default function ProductDetail(product: IProduct) {
  return (
    <div>
      <h1>{product.name}</h1>
      <img
        src={product.imageUrl}
        alt={product.name}
        style={{ width: "300px", height: "auto" }}
      />
      <p>{product.description}</p>
      <p>가격: {product.price?.toLocaleString()} 원</p>
      {product.sale && <p>할인: {product.sale.toLocaleString()} 원</p>}
      {product.type && <p>타입: {product.type}</p>}
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "#0070f0",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
        }}
      >
        장바구니에 담기
      </button>
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "#e0e0e",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          marginLeft: "10px",
        }}
      >
        구매하기
      </button>
      <div style={{ marginTop: "20px" }}></div>
      <h2>상품 상세 정보</h2>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const id = context.params?.id;
  try {
    const response = await fetch(
      `http://localhost:7777/api/products/${id}` // Replace with your actual API endpoint
    );
    if (!response.ok) {
      return {
        notFound: true,
      };
    }
    const product = await response.json();
    return {
      props: product,
    };
  } catch (error) {
    console.error("Error fetching product details:", error);
    return {
      notFound: true,
    };
  }
};
