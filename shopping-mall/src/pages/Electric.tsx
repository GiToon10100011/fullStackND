import React from "react";
import Title from "../components/Title";
import CategoryPage from "../components/CategoryPage";

const Electronics = () => {
  return (
    <div className="container">
      <div className="sub-banner"><img src="/images/electronics-sub-banner.jpg" alt="" /></div>
      <section className="content-inner"> 
        <Title title="전자기기" subTitle="전자기기를 만나보세요" />
        <CategoryPage category="electronics" />
      </section>
    </div>
  );
};

export default Electronics;
