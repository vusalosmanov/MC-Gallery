import React from "react";
import { Link } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";
import Swiperss from "../components/Swiper3";
import image from "../assets/images/icon/logo.png"
import Form from "../components/Form";
const Əlaqə = () => {
  return (
    <div className="lg:w-[1170px] my-0 mx-auto  pr-[15px] pl-[15px] border-t w-full">
      <ul className="flex gap-4 mt-[20px] mr-[0px] mb-[20px] ml-[0px] text-sm">
        <li className="flex items-center gap-2">
          <Link to="/home" className="hover:text-[#f15803]">
            Ana səhifə
          </Link>
          <AiFillCaretRight />
        </li>
        <li>
          <Link to="/" className="text-[#f15803]">
            Əlaqə
          </Link>
        </li>
      </ul>
      <div className="w-[100%] flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97211.23532160591!2d49.863989859924104!3d40.41214919242858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403063574986c38b%3A0xdb519e1eef512e46!2sMG%20store%20(music%20gallery-%C9%99hm%C9%99dli)!5e0!3m2!1saz!2saz!4v1686335327440!5m2!1saz!2saz"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            style={{ border: "0" }}
            referrerpolicy="no-referrer-when-downgrade"
            className="w-[1200px] h-[300px]"
          ></iframe>
        </div>
        <h3 className="text-sm text-[#6b6a81] uppercase mt-[20px]">ƏLAQƏ MƏLUMATLARI</h3>
        <div className="border-[#ddd] mb-[20px] border-[1px] rounder mt-[20px] ">
          <div className="p-[15px] text-sm lg:flex lg:justify-around items-center flex flex-wrap ">
            <div className="lg:w-[25%] w-[100%] justify-center flex ">
              <img src={image} alt="" className="p-[4px] " />
            </div>
            <div>
              <strong>mgstore.az</strong>
              <br />
              <address >
              Xocalı prospekti 37, Demirchi Tower, 17-ci mərtəbə</address>
            </div>
            <div>
              <strong>Telefon</strong>
              <br />
              *1313
            </div>
            <div>
              <strong>İş vaxtı</strong>
              <br />
              09:00 - 20:00
            </div>
          </div>
        </div>
        <div>
          <Form/>
        </div>
        <div className="border-[1px] mt-[50px] mb-[40px]">
          <Swiperss />
        </div>
    </div>
  );
};

export default Əlaqə;
