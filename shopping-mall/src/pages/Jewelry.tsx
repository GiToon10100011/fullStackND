import React from "react";
import Title from "../components/Title";
import CategoryPage from "../components/CategoryPage";

const Jewelry = () => {
  return <div className="container">
    <div className="sub-banner"><img src="/images/jewelery-sub-banner.jpg" alt="" /></div>
    <section className="content-inner">
      <Title title="악세서리" subTitle="악세서리를 만나보세요" />
      <CategoryPage category="jewelery" />
    </section>
  </div>;
};

export default Jewelry;
