import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";

const MainSwiper = () => {
  return (
    <div className="main-swiper">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation
      >
        <SwiperSlide>
          <img src="/images/main_slider_01.jpg" alt="main-swiper-1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/main_slider_02.jpg" alt="main-swiper-2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/main_slider_03.jpg" alt="main-swiper-3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainSwiper;
