import React from "react";
import Swiper from "../components/Swipers";
import Swipers from "../components/Swiper2";
import Swiperss from "../components/Swiper3";
import image8 from "../assets/images/image/reklam.jpg";
import image9 from "../assets/images/image/reklam1.png";
import image10 from "../assets/images/image/reklam2.png";
import Tabjs from "../components/Tabjs";
const Home = () => {
  return (
    <>
      <Swiper  className="mt-[20px] z-90"/>
      <div className="mp-[20px] mt-[100px] mb-[50px]">
        <div className=" swiper lg:w-[1170px] my-0 mx-auto  pr-[15px] pl-[15px] flex lg:justify-between  w-full  justify-center items-center ">
          <Swiperss />  
        </div>
      </div>
      <div className="lg:w-[1170px] w-full my-0 mx-auto mb-[50px] flex lg:justify-between justify-center  ">
        <div className="border-t border-[lpx] border-gray-300 lg:w-[72.3%] w-full py-[3] ml-[0] border-l border-[1px]  ">
          <div className="flex justify-between items-center border-b-[1px] ">
            <h2 className="text-blueGray-600 text-xl uppercase mb-[10px] mt-[10px] pl-[15px] ">
              <span className="text-[#6b6a81] font-bold text-[16px] ">ÖZƏL TƏKLİF!</span>
            </h2>
          </div>
          <Swipers/>
        </div>
        <div className="lg:block hidden hover:scale-[1.1]  btn ">
          <img src={image8} alt="" className="h-[402px] " />
        </div>
      </div>
      <Tabjs />
      <div className="lg:w-[1170px] w-full my-0 mx-auto  pr-[15px] pl-[15px] flex gap-4">
        <div className="lg:block hidden ">
          <img src={image9} alt="" className="h-[247px]" />
        </div>
        <div>
          <img src={image10} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
