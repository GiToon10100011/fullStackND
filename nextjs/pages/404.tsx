import Link from "next/link";
import React from "react";
import styles from "./404.module.css"; // Assuming you have a CSS module for styling

export default function PageNotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 - 페이지를 찾을 수 없습니다.</h1>
      <p className={styles.description}>
        요청하신 페이지는 존재하지 않거나 삭제되었습니다.
      </p>
      <Link className={styles.homeButton} href="/">
        홈으로 돌아가기
      </Link>
    </div>
  );
}
