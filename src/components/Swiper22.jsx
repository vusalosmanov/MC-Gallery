import React from "react";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import axios from "axios";
import { Link } from "react-router-dom";
import "../assets/styles/components/Accordion.scss"

const Swiper22 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Swiper>
        {products?.length > 0 &&
          products
            .filter((item) => item.oldtype === "baxilan")
            .map((product) => (
              <SwiperSlide>
                <div className="flex ozel ">
                    <div className="w-[41%]">
                      <div className="p-[5px]">
                        <img
                          className="w-[100%]  object-cover border-none cursor-pointer"
                          src={` http://localhost:5000/${product.imageurl}`}
                          alt="noimg"
                        />
                      </div>
                    </div>
                    <div className="w-[58%]">
                        <div>
                            <Link to="/{id}" className="lg:text-[18px] font-bold text-[#4a4a4a] uppercase text-[14px] ozel-text">{product.name}</Link>
                        </div>
                        <div className="border-b-[1px]">
                            <span className="lg:text-[21px] text-[16px] text-[#f15803] p-[5px]">{product.price}₼</span>
                            <span className="line-through text-[15px] ">{product.oldprice}₼</span>
                        </div>
                    </div>
                </div>
              </SwiperSlide>
            ))}
      </Swiper>
    </>
  );
};

export default Swiper22;
