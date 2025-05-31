import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/scss/scrollbar";
import "../scss/PortfolioSwiper.scss";

interface PortfolioList {
  id: number;
  title: string;
  des: string;
  skill: string;
  webUrl: string;
  gitUrl: string;
}

const PortfolioList: PortfolioList[] = [
  {
    id: 0,
    title: "제목",
    des: "사이트를 리뉴얼함",
    skill: "React, Sass, JavaScript",
    webUrl: "",
    gitUrl: "",
  },
  {
    id: 1,
    title: "제목",
    des: "사이트를 리뉴얼함",
    skill: "React, Sass, JavaScript",
    webUrl: "",
    gitUrl: "",
  },
  {
    id: 2,
    title: "제목",
    des: "사이트를 리뉴얼함",
    skill: "React, Sass, JavaScript",
    webUrl: "",
    gitUrl: "",
  },
];

const PortfolioSwiper = () => {
  return (
    <div className="main portSwiper">
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        slidesPerView={1}
        modules={[Autoplay, Pagination, Navigation, Scrollbar]}
      >
        {PortfolioList.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={`https://picsum.photos/600/400`} alt={item.title} />
            <div className="text-box">
              <h3>{item.title}</h3>
              <p>{item.des}</p>
              <div className="btn-wrap">
                <span>{item.skill}</span>
                <ul>
                  <li>
                    <a href={item.gitUrl}>git</a>
                  </li>
                  <li>
                    <a href={item.webUrl}>web</a>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
        ))}
        ...
      </Swiper>
    </div>
  );
};

export default PortfolioSwiper;
