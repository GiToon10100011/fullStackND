import React from "react";
import Title from "../components/Title";
import CategoryPage from "../components/CategoryPage";

const Women = () => {
  return <div className="container">
    <div className="sub-banner"><img src="/images/women-sub-banner.jpg" alt="" /></div>
    <section className="content-inner">
      <Title title="여성 의류" subTitle="여성 의류를 만나보세요" />
      <CategoryPage category="women's clothing" />
    </section>
  </div>;
};

export default Women;
