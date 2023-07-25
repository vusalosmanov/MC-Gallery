import React from "react";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
import image4 from "../assets/images/image/evinin-qayghisina-qalan-texnologiya-1920x700.png";
import image7 from "../assets/images/image/5-li-məhsul-banneri-dyson-lifestyle-1920x700.png";
import image5 from "../assets/images/image/vestel kondisioner web banner-1920x700.png";
import image1 from "../assets/images/image/5-li-məhsul-banneri-gorenje-1920x700.png";
import image3 from "../assets/images/image/dyson-banner-tozsoran-2-1920x700.png";
import { Swiper, SwiperSlide } from "swiper/react";
import image6 from "../assets/images/image/notbuk-banner (3)-1920x700.png";
import image2 from "../assets/images/image/Banner (2)-1920x700.png";
import "../assets/styles/components/Accordion.scss";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

const Swipers = () => {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        autoplay={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="w-full"
        injectStyles={
          `
          .swiper-button-next,
          .swiper-button-prev {
            background-color: white;
            padding: 8px 16px;
            border-radius: 100%;
            border: 2px solid black;
            color: red;
          }
          .swiper-pagination-bullet{
            width: 40px;
            height: 40px;
            background-color: red;
          }
          `
        }
      >
        <SwiperSlide>
          <img src={image6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image5} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Swipers;
