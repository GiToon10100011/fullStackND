import ProductList from "@/components/products/ProductList";
import { IProduct } from "@/types/product.type";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import React from "react";

const mockProducts: IProduct[] = [
  {
    id: "1",
    name: "상품 1",
    price: 10000,
    imageUrl: "/images/shirt_m1.jpg",
    type: "bestseller",
  },
  {
    id: "2",
    name: "상품 2",
    price: 20000,
    imageUrl: "/images/product2.jpg",
    type: "sale",
  },
  {
    id: "3",
    name: "상품 3",
    price: 30000,
    imageUrl: "/images/product3.jpg",
    type: "일반",
  },
];

interface IProductPageProps {
  products: IProduct[];
  totalCount: number;
}

export default function ViewProducts({
  products,
  totalCount,
}: IProductPageProps) {
  console.log(products);
  const router = useRouter();
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortValue = e.target.value;
    // 정렬 방식에 따라 URL을 변경하거나 상태를 업데이트하는 로직을 추가
    console.log("Selected sort value:", sortValue);
    router.push(`/products?sort=${sortValue}`);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "1rem 0",
        }}
      >
        <div>
          정렬방식:
          <select
            onChange={handleSortChange}
            style={{ marginLeft: "0.5rem", padding: "0.5rem" }}
          >
            <option value="newest">최신순</option>
            <option value="priceAsc">가격 낮은순</option>
            <option value="priceDesc">가격 높은순</option>
          </select>
        </div>
        <span>총 상품 개수: {totalCount}</span>
      </div>
      <ProductList products={products} title="전체 상품" />
      <div style={{ padding: "1rem" }}>상품목록</div>
      <div>페이지네이션</div>
    </div>
  );
}

//SSR -> getServerSideProps
export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    //url의 쿼리 파라미터를 통해 정렬 방식 등을 받아올 수 있습니다.
    //context.query를 통해 쿼리 파라미터를 가져올 수 있습니다.
    const sort = context.query.sort || "newest"; // 기본값은 최신순
    let orderBy = "createdAt^DESC"; // 기본 정렬은 최신순
    if (sort === "priceAsc") {
      orderBy = "price^ASC";
    } else if (sort === "priceDesc") {
      orderBy = "price^DESC";
    }

    console.log(orderBy);

    const url = `http://localhost:7777/api/products?orderBy=${orderBy}`;
    const response = await fetch(url);
    const data = await response.json();

    return {
      props: {
        products: data.products || [],
        totalCount: data.count || 0,
      },
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      props: {
        products: [],
        totalCount: 0,
      },
    };
  }
}
