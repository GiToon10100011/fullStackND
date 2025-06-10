import React from "react";
import Title from "../components/Title";
import CategoryPage from "../components/CategoryPage";

const Men = () => {
  return <div className="container">
    <div className="sub-banner"><img src="/images/man-sub-banner.jpg" alt="" /></div>
    <section className="content-inner">
      <Title title="남성 의류" subTitle="남성 의류를 만나보세요" />
      <CategoryPage category="men's clothing" />
    </section>
  </div>;
};

export default Men;
