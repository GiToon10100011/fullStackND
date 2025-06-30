import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./ProductCard.module.css"; // Assuming you have a CSS module for styling

interface IProductCardProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  type?: string;
}

const ProductCard = ({
  id,
  name,
  price,
  imageUrl,
  type,
}: IProductCardProps) => {
  return (
    <Link href={`/products/${id}`} className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={name} style={{ objectFit: "cover" }} />
      </div>
      <h3 className={styles.name}>
        {type && <span className={styles.type}>{type}</span>} {name}
      </h3>
      <p className={styles.price}>{price.toLocaleString()} 원</p>
    </Link>
  );
};

export default ProductCard;
