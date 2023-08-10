import React from "react";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
import notbuk from "../assets/images/image/notbuk.png";
import dyson from "../assets/images/image/dyson.png";
import gorenje from "../assets/images/image/gorenje.png";
import banner from "../assets/images/image/Banner.png";
import dy_tozsoran from "../assets/images/image/dyson_tozsoran.png";
import el_tozsoran from "../assets/images/image/eletrik_tozsoran.png";
import ve_kondisioner from "../assets/images/image/vestel_kondisioner.png";
import { Swiper, SwiperSlide } from "swiper/react";
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
          <img src={notbuk} alt="notbuk" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={dyson} alt="dyson" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gorenje} alt="gorenje" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner} alt="banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={dy_tozsoran} alt="dy_tozsoran" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={el_tozsoran} alt="el_tozsoran" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ve_kondisioner} alt="ve_kondisoner" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Swipers;
