import React, { useEffect } from "react";
import useStore from "../stores/useStore";
import SectionSwiper from "./SectionSwiper";

const CategoryPage = ({ category }: { category: string }) => {
  const { items, fetchItems, getItemCategory } = useStore();
  const categoryItems = getItemCategory(category);
  useEffect(() => {
    if (!items.length) fetchItems();
  }, [fetchItems, items]);
  return (
    <div className="container">
      <section className="content-inner">
        <SectionSwiper items={categoryItems} />
      </section>
    </div>
  );
};

export default CategoryPage;
