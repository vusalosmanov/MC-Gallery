import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";
import { useSelector } from "react-redux";
import image from "../assets/images/icon/sale-old.png";
import image1 from "../assets/images/image/stars-0.png";
import image2 from "../assets/images/icon/phone_icon.png";
import "../assets/styles/components/Accordion.scss";
import Swiper3 from "../components/Swiper3";
const Details = ({}) => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");
  const { id } = useParams();

  useEffect(() => {
    axios(`http://localhost:5000/api/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => setError(err.response.data));
  }, [id]);

  if (error !== "") {
    return <h1>{error}</h1>;
  }
  if (!product) return null;
  return (
    <div className="lg:w-[1170px]  my-0 mx-auto  pr-[15px] pl-[15px] w-full relative ">
      <ul className="lg:flex gap-4 mt-[20px] mr-[0px] mb-[20px] ml-[0px] text-sm flex flex-wrap">
        <li className="flex items-center gap-2">
          <Link to="/home" className="hover:text-[#f15803]">
            Ana səhifə
          </Link>
          <AiFillCaretRight />
        </li>
        <li className="flex items-center gap-2">
          <Link to="/">Məişət texnikası</Link>
          <AiFillCaretRight />
        </li>
        <li className="flex items-center gap-2">
          <Link to="/">Ən çox baxılanlar</Link>
          <AiFillCaretRight />
        </li>
        <li>
          <Link to="/" className="text-[#f15803]">
            {product.name}
          </Link>
        </li>
      </ul>
      <div className="detailes flex ">
        <div className="relative pr-[15px] pl-[15px] w-[500px]">
          <span>
            <img
              src={image}
              alt=""
              className="w-[70px] absolute top-8 left-[-15px] z-[-99999px]"
            />
          </span>
          <img
            src={`http://localhost:5000/${product.imageurl}`}
            alt=""
            className="w-[400px] h-[400px]  cursor-pointer "
          />
        </div>
        <div>
          <h1 className="text-[33px] text-[#575757]">{product.name}</h1>
          <div className="flex items-center gap-2">
            <div>
              <img src={image1} alt="" />
            </div>
            <span className="text-[#575757] hover:text-[#f15803] cursor-pointer">
              0 şərh
            </span>
          </div>
          <ul className="mt-[10px]">
            <li className="text-[12px] text-[#818181] flex gap-1">
              Brend:{" "}
              <p className="text-[#f15803] cursor-pointer hover:text-[#333]">
                {product.brend}
              </p>
            </li>
            <li className="text-[12px] text-[#818181] gap-1 flex my-[10px]">
              Məhsulun kodu:<p>{product.code}</p>
            </li>
          </ul>
          <div>
            <span className="text-[15px] flex items-center gap-3">
              Qiymət:
              <p className="text-[#29c435] text-[20px]">{product.oldprice}₼</p>
            </span>
            <div className="mt-[15px]">
              <span className="text-[20px] text-[#ffff] mr-[3px] bg-[#f15803] pt-[1px] pb-[1px] pr-[7px] pl-[7px]">
                {product.endirim}₼
              </span>
              <span className="text-[18px]">nağd alışda:{product.price}₼</span>
            </div>
          </div>
        </div>
        <div className="bg-[#f15803] pt-[14px] pb-[14px] pl-[6px] pr-[6px] text-white absolute top-[120px] right-[45px] flex w-[138px] text-center cursor-pointer border-[5px] justify-center gap-2  animate-shadow-pulse">
          <img
            src={image2}
            alt=""
            srcset=""
            className="max-w-[100%] w-[52px] h-[52px]"
          />
          <div>
            <p className="text-[12px]">
              SIZƏ <br /> ZƏNG <br /> EDƏK?{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[20px]">
        <Swiper3 />
      </div>
    </div>
  );
};

export default Details;
