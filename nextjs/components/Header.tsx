import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header
      style={{
        background: "#222",
        color: "#fff",
        padding: "1rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <nav
        style={{
          maxWidth: "1200px",
          width: "100%",
          display: "flex",
          gap: "1rem",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", gap: "1rem" }}>
          <Link href="/">홈</Link>
          <Link href="/products">상품</Link>
          <Link href="/admin/time-deal">타임딜</Link>
        </div>

        <div style={{ display: "flex", gap: "1rem" }}>
          <Link href="/about">About</Link>
          <Link href="/cart">장바구니</Link>
          <Link href="/category">카테고리</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
