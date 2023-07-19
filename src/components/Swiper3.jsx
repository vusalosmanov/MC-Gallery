import React from "react";
import { Swiper, SwiperSlide  } from "swiper/react";
import { Autoplay } from "swiper";
import image1 from "../assets/images/icon/AEG-178x105.png";
import image2 from "../assets/images/icon/Gorenje-178x105.png";
import image3 from "../assets/images/icon/Philips_logo-178x105.png";
import image4 from "../assets/images/icon/Samsung-178x105.png";
import image5 from "../assets/images/icon/Sharp-178x105.png";
import image6 from "../assets/images/icon/Sony-178x105.png";

const Swiper3 = () => {
  return (
    <Swiper
    autoplay={true}
    modules={[Autoplay]}
      breakpoints={{
        640: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 6,
        },
      }}
      className="mySwiper border-[1px] lg:w-full "
    >
      <SwiperSlide>
        <div className="pt-[1px] pb-[1px] pr-[15px] pl-[15px] w-full flex justify-center">
          <img src={image1} alt="" className="flex justify-center " />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="pt-[1px] pb-[1px] pr-[15px] pl-[15px] w-full flex justify-center ">
          <img src={image2} alt=""  />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="pt-[1px] pb-[1px] pr-[15px] pl-[15px] w-full flex justify-center  ">
          <img src={image3} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="pt-[1px] pb-[1px] pr-[15px] pl-[15px] w-full flex justify-center ">
          <img src={image4} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="pt-[1px] pb-[1px] pr-[15px] pl-[15px] w-full flex justify-center ">
          <img src={image5} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="pt-[1px] pb-[1px] pr-[15px] pl-[15px] w-full flex justify-center ">
          <img src={image6} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="pt-[1px] pb-[1px] pr-[15px] pl-[15px] w-full flex justify-center ">
          <img src={image5} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="pt-[1px] pb-[1px] pr-[15px] pl-[15px] w-full flex justify-center ">
          <img src={image4} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="pt-[1px] pb-[1px] pr-[15px] pl-[15px] w-full flex justify-center  ">
          <img src={image3} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="pt-[1px] pb-[1px] pr-[15px] pl-[15px] w-full flex justify-center ">
          <img src={image2} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="pt-[1px] pb-[1px] pr-[15px] pl-[15px] w-full flex justify-center  ">
          <img src={image1} alt="" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Swiper3;
