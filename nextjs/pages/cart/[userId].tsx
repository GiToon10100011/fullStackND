import { useRouter } from "next/router";
import React from "react";

export default function Cart() {
  const router = useRouter();
  const { userId } = router.query;
  return (
    <div>
      <h1>Cart</h1>
      <p>User ID: {userId}</p>
    </div>
  );
}
