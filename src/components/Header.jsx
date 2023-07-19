import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/images/icon/logo.png";
import Input from "../components/Input";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useState } from "react";
import image1 from "../assets/images/icon/aze.png";
import { Data } from "../components/Dropdata";
import image2 from "../assets/images/icon/paltaryuyan.png";
import Sidebar from "./sidebar";
import "../assets/styles/components/sidebar.css";
import "../assets/styles/components/Slick.scss";

const Header = () => {
  const cart = useSelector((state) => state.cartData.cart);

  const sumAllProducts = cart.map((item) => {
    return item.quantity * item.price;
  });
  const sumPrice = sumAllProducts.reduce(
    (price, quantity) => price + quantity,
    0
  );
  const allQuantity = cart.map((item) => {
    return item.quantity;
  });
  const sumQuantity = allQuantity.reduce((prev, current) => prev + current, 0);

  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  
  window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    var navbar = document.getElementById("navbar");
    if (navbar) {
      if (window.pageYOffset > 20 || document.documentElement.scrollTop > 20) {
        navbar.style.backgroundColor = "#F5F5F5";
        navbar.style.color = "black";
        navbar.style.position = "fixed";
        navbar.style.top = "0";
        navbar.style.zIndex = "9999px"
        if (window.innerWidth <= 1024) {
          navbar.style.visibility = "hidden";
        } else {
          navbar.style.visibility = "block";
        }
      } else {
        navbar.style.backgroundColor = "white";
        navbar.style.color = "black";
        navbar.style.position = "relative";
        navbar.style.top = "0";
        navbar.style.visibility = "block";
        navbar.style.zIndex = "9999px"
      }
    }
  }
  
  

  return (
    <>
      <header className="block">
        <div className="leading-10  lg:bg-orange-600 hidden lg:block  text-white  relative  z-100  text-xs max-w-full h-[45.8px]">
          <nav>
            <div className="w-[1170px] my-0 mx-auto  pr-[15px] pl-[15px] h-11  flex justify-between">
              <div className="float-left font-normal hidden lg:block">
                <ul className="flex ">
                  <li>
                    <Link
                      to="/kampaniyalar"
                      className="py-0 px-2.5 text-sm hover:text-slate-300"
                    >
                      Kampaniyalar
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/brendler"
                      className="py-0 px-2.5 text-sm hover:text-slate-300"
                    >
                      Brendlər
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/filiallar"
                      className="py-0 px-2.5 text-sm hover:text-slate-300"
                    >
                      Filiallar
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/əlaqə  "
                      className="py-0 px-2.5 text-sm hover:text-slate-300"
                    >
                      Əlaqə
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="hidden lg:block">
                <ul className="flex items-center">
                  <img src={image1} alt="" className="w-[16px] h-[11px]" />
                  <Link to="/" className="">
                    <a href="" className="py-0 px-2.5 text-sm ">
                      DİL
                      <i className="fa fa-angle-down"></i>
                    </a>
                  </Link>
                  <Link
                    to="/"
                    className="flex items-center py-0 px-2.5 text-sm "
                  >
                    <FaRegMoneyBillAlt className="text-[16px] mr-[5px]" />
                    KREDİTİN ÖDƏNİŞİ{" "}
                  </Link>
                  <Link
                    to="/register"
                    className="flex items-center py-0 px-2.5 text-sm"
                  >
                    <AiFillCheckCircle className="text-[16px] mr-[3px] items-center" />
                    QEYDİYYAT
                  </Link>
                  <Link to="/books" className="flex items-center">
                    <a
                      href=""
                      className="py-0 flex px-2.5 text-sm items-center "
                    >
                      <AiOutlineUser className="text-[16px] mr-[3px]" />
                      HESABIM
                      <i className="fa fa-angle-down ml-[3px]"></i>
                    </a>
                  </Link>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="text-center w-[100%] bg-white mb-[20px]">
          <div className="lg:w-[1170px] w-full my-0 mx-auto  pr-[15px] pl-[15px] h-[120px] lg:flex lg:justify-between  lg:items-center flex justify-evenly  items-center  ">
            <div className=" pt-[5px] w-[262px]">
              <Link to="/home">
                <img
                  src={image}
                  alt=""
                  className="cursor-pointer block mx-w-[100%]"
                />
              </Link>
            </div>
            <div className="w-[150px] lg:block hidden"></div>
            <div className="flex items-center">
              <div className=" w-[247px] h-[40px] lg:block hidden">
                <Input/>
              </div>
              <div className="hidden lg:block">
                <div className="ml-[3em]">
                  <a href="tel:0121313" className="text-sm cursor-pointer">
                    <div className="flex">
                      <h1 className="font-black text-left text-[33px] text-[#f15803] ">
                        *1313
                      </h1>
                    </div>
                  </a>
                  <p className="text-[12px] ml-[1em] w-[200px]">
                    Hər gün 09:00 - 20 : 00
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[100px] lg:block hidden"></div>
            <div className="flex gap-8">
              <div class="flex justify-center items-center bg-[#f15803] w-10 h-10">
                <div class="relative py-2">
                  <Link to="/like">
                    <div class="relative inline-block float-right text-gray-600 text-base no-underline cursor-pointer">
                      <span class="bg-[#f15803] text-white text-xs w-[21px] h-[21px] leading-4 border-2 border-white rounded-full text-center absolute  ">
                        0
                      </span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="file: mt-4 h-4 w-5    text-white mb-3"
                    >
                      <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div class="flex justify-center items-center bg-[#f15803] w-10 h-10">
                <div class="relative py-2">
                  {sumQuantity > 0 && sumPrice > 0 && (
                    <Link to="/shop">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="file: mt-4 h-6 w-6 text-white mb-3"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div className="flex text-[12px]  pl-[5px] text-[#3a3a3a] ">
              <Link className="gap-2 lg:block hidden ">
                {sumQuantity === 0 ? (
                  <span>Sebet boşdur</span>
                ) : (
                  <>
                    <span className="text-[black]">
                      {sumQuantity} Ədəd {sumPrice.toFixed(2)}
                    </span>
                  </>
                )}
              </Link>
            </div>
          </div>
        </div>
        <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} />
        <div className="w-[100%] flex justify-center mb-[20px]">
          <div className=" w-[80%] h-[40px] lg:hidden  ">
            <Input />
          </div>
        </div>
      </header>
      <div
        id="navbar"
        className="megamenu relative hidden lg:block z-[999px]"
      >
        <div className="w-[1170px] my-0 mx-auto  pr-[15px] pl-[15px] h-11  flex justify-between mb-[10px]">
          <div className="text-base mx-auto relative w-full z-90 float-left text-left flex justify-between">
            <div className="text-base mx-auto relative w-full z-90 float-left text-left flex justify-between">
              <div className="flex items-center justify-between w-[100%] space-x-4">
                {Data.map((link) => (
                  <div className="flex z-99">
                    <div className="px-3 text-left md:cursor-pointer group hover:text-[#f15803]  font-extralight">
                      <h1
                        onClick={() => {
                          heading !== link.name
                            ? setHeading(link.name)
                            : setHeading("");
                          setSubHeading("");
                        }}
                      >
                        {link.name}
                      </h1>
                      {link.submenu && (
                        <div className="absolute  hidden group-hover:md:block hover:md:block z-[99] ">
                          <div className="bg-white p-5 grid grid-cols-3 gap-10 mt-[22px] ">
                            {link.sublinks.map((mysublinks) => (
                              <div>
                                <hr />
                                <h1 className="text-lg font-semibold hover:text-[#f15803] ease-linear">
                                  <img
                                    src={image2}
                                    alt=""
                                    className="w-[160px] h-[150px]"
                                  />
                                  {mysublinks.Head}
                                </h1>
                                {mysublinks.sublink.map((slink) => (
                                  <li className="text-sm text-gray-600 my-2.5">
                                    <Link
                                      to={slink.link}
                                      className="hover:text-primary hover:text-[#f15803]"
                                    >
                                      {slink.name}
                                    </Link>
                                  </li>
                                ))}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                <Link to="/telefon" className="hover:text-[#f15803]">
                  Telefon və Planşetlər
                </Link>
                <Link to="/kompüter" className="hover:text-[#f15803]">
                  Kompüter texnikası
                </Link>
                <Link to="/tv-audio" className="hover:text-[#f15803]">
                  TV, Audio, Foto-Video
                </Link>
                <Link to="/musiqi" className="hover:text-[#f15803]">
                  Musiqi alətləri
                </Link>
                <Link to="/outlet" className="hover:text-[#f15803]">
                  Outlet
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
