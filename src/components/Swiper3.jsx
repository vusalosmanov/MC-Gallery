import React from "react";
import { Swiper, SwiperSlide  } from "swiper/react";
import Aeg from "../assets/images/icon/AEG.png";
import Philips from "../assets/images/icon/Philips.png";
import Samsung from "../assets/images/icon/Samsung.png";
import Gorenje from "../assets/images/icon/Gorenje.png";
import Sharp from "../assets/images/icon/Sharp.png";
import Sony from "../assets/images/icon/Sony.png";
import { Autoplay } from "swiper";
import "../assets/styles/components/Accordion.scss"

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
        <div className="pt-[1px] pb-[1px] pr-[15px] pl-[15px] w-full flex justify-center hover:scale-[1.1] btn">
          <img src={Aeg} alt="aeg" className="flex justify-center " />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="pt-[1px] pb-[1px] pr-[15px] pl-[15px] w-full flex justify-center hover:scale-[1.1] btn ">
          <img src={Philips} alt="philips"  />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="pt-[1px] pb-[1px] pr-[15px] pl-[15px] w-full flex justify-center hover:scale-[1.1]  btn ">
          <img src={Samsung} alt="samsung" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="pt-[1px] pb-[1px] pr-[15px] pl-[15px] w-full flex justify-center hover:scale-[1.1] btn">
          <img src={Gorenje} alt="gorenje" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="pt-[1px] pb-[1px] pr-[15px] pl-[15px] w-full flex justify-center hover:scale-[1.1] btn ">
          <img src={Sharp} alt="sharp" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="pt-[1px] pb-[1px] pr-[15px] pl-[15px] w-full flex justify-center hover:scale-[1.1]  btn">
          <img src={Sony} alt="sony" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="pt-[1px] pb-[1px] pr-[15px] pl-[15px] w-full flex justify-center hover:scale-[1.1] btn ">
          <img src={Sharp} alt="sharp" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="pt-[1px] pb-[1px] pr-[15px] pl-[15px] w-full flex justify-center hover:scale-[1.1] btn ">
          <img src={Gorenje} alt="gorenje" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="pt-[1px] pb-[1px] pr-[15px] pl-[15px] w-full flex justify-center hover:scale-[1.1]  btn ">
          <img src={Samsung} alt="samsung" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="pt-[1px] pb-[1px] pr-[15px] pl-[15px] w-full flex justify-center hover:scale-[1.1]  btn">
          <img src={Philips} alt="philips" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="pt-[1px] pb-[1px] pr-[15px] pl-[15px] w-full flex justify-center hover:scale-[1.1] btn  ">
          <img src={Aeg} alt="aeg" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Swiper3;
