import React from "react";
import ProductCard from "./ProductCard";
import { IProduct } from "@/types/product.type";
import styles from "./ProductList.module.css";

interface IProductListProps {
  products: IProduct[];
  title?: string;
}

const ProductList = ({ products, title }: IProductListProps) => {
  return (
    <div className={styles.container}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <div className={styles.productGrid}>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
