import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SectionSwiper = () => {
  return (
    <div className="goods-list">
      <Swiper>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SectionSwiper;
