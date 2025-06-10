import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { IProduct } from "../types/product.type";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { Navigation, Autoplay } from "swiper/modules";

const SectionSwiper = ({ items }: { items: IProduct[] }) => {
  return (
    <div className="goods-list">
      <Swiper modules={[Navigation, Autoplay]} slidesPerView={4} spaceBetween={20} slidesPerGroup={4} navigation>
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <Link to={`/product/${item.id}`}>
              <ProductCard sendItem={item} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SectionSwiper;
