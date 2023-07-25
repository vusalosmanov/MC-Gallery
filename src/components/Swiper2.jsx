import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper";
import "../assets/styles/components/Accordion.scss";
import axios from "axios";
import "swiper/css/navigation";
import "swiper/css";

const Swiper2 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
      <Swiper 
      autoplay={true}
      modules={[Autoplay]}>
        {products?.length > 0 &&
          products
            .filter((item) => item.oldtype === "ozel")
            .map((product) => (
              <SwiperSlide>
                <div className="flex ozel lg:h-[355px]  ">
                  <div className="w-[41%]">
                    <div className="p-[5px] hover:scale-[1.1] btn">
                      <img
                        className="lg:w-[100%] lg:p-[20px] object-cover border-none cursor-pointer"
                        src={` http://localhost:5000/${product.imageurl}`}
                        alt="noimg"
                      />
                    </div>
                  </div>
                  <div className="w-[56%]">
                    <div className="mt-[10px]">
                      <Link
                        to={`/details/${product.id}`}
                        className="lg:text-[18px] font-bold text-[#4a4a4a] uppercase text-[14px] ozel-text"
                      >
                        {product.name}
                      </Link>
                    </div>
                    <div className="border-b-[1px]">
                      <span className="lg:text-[21px] text-[16px] text-[#f15803] p-[5px]">
                        {product.price}₼
                      </span>
                      <span className="line-through text-[15px] ">
                        {product.oldprice}₼
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
      </Swiper>
  );
};

export default Swiper2;
