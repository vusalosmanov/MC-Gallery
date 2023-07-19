import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { useState } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import image1 from "../assets/images/icon/visa_classic_chip.gif";
import image2 from "../assets/images/icon/mastercard_logo_5.gif";
import image3 from "../assets/images/icon/kapital.png";
import image4 from "../assets/images/icon/icons8-facebook.gif";
import image5 from "../assets/images/icon/icons8-instagram.gif";
import image6 from "../assets/images/icon/icons8-youtube.gif";
import image7 from "../assets/images/icon/icons8-whatsapp.gif";
import "../assets/styles/components/Accordion.scss";
const Footer = () => {
  const [email, setEmail] = useState("");
  const [notification, setNotification] = useState("");

  const handleInputChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    if (value && !value.includes("@")) {
      setNotification("Email yanlış.");
    } else {
      setNotification("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmail("");
    setNotification("");
  };
  return (
    <>
      <div className="py-6 px-0  bg-[#272727] text-gray-500 mt-8 font-nunito">
        <div className="lg:w-[1170px] w-full my-0 mx-auto  pr-[15px] pl-[15px]">
          <div className="lg:flex lg:justify-evenly flex flex-wrap  ">
            <div className="lg:w-[195px] lg:h-[192px] w-[50%] ">
              <div className="mt-5 min-h-10 h-[41px]">
                <h3 className="uppercase text-sm inline text-gray-400 relative font-bold">
                  Şəxsi Kabinet
                </h3>
              </div>
              <div className="footer-content">
                <ul className="gap-y-1">
                  <li className="leading-3 text-xs  flex items-center h-[30px] w-[105px]  hover:pl-[10px] transition-all">
                    <AiOutlineDoubleRight />
                    <Link
                      to="/"
                      className="text-[#969696] text-xs hover:text-[#f15803] "
                    >
                      Sifarişlərim
                    </Link>
                  </li>
                  <li className="leading-3 text-xs flex items-center  h-[30px] w-[125px] hover:pl-[10px] transition-all">
                    <AiOutlineDoubleRight />
                    <Link
                      to="/"
                      className="text-[#969696] text-xs hover:text-[#f15803]"
                    >
                      Sifariş tarixçəsi
                    </Link>
                  </li>
                  <li className="leading-3 text-xs flex items-center  h-[30px] w-[105px] hover:pl-[10px] transition-all">
                    <AiOutlineDoubleRight />
                    <Link
                      to="/"
                      className="text-[#969696] text-xs hover:text-[#f15803]"
                    >
                      İstək siyahısı
                    </Link>
                  </li>
                  <li className="leading-3 text-xs flex items-center  h-[30px] w-[125px] hover:pl-[10px] transition-all">
                    <AiOutlineDoubleRight />
                    <Link
                      to="/"
                      className="text-[#969696] text-xs hover:text-[#f15803]"
                    >
                      Xəbər bülleteni
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-[195px] lg:h-[192px] w-[50%]">
              <div>
                <div className="mt-5 min-h-10 h-[41px]">
                  <h3 className="uppercase text-sm inline text-[#969696] relative font-bold">
                    "Music Gallery"
                  </h3>
                </div>
                <div className="footer-content">
                  <ul>
                    <li className="leading-3 text-xs flex items-center  h-[30px] w-[105px] hover:pl-[10px] transition-all">
                      <AiOutlineDoubleRight />
                      <Link
                        to="/"
                        className="text-[#969696] text-xs hover:text-[#f15803]"
                      >
                        Haqqımızda
                      </Link>
                    </li>
                    <li className="leading-3 text-xs flex items-center  h-[30px] w-[125px] hover:pl-[10px] transition-all">
                      <AiOutlineDoubleRight />
                      <Link
                        to="/"
                        className="text-[#969696] text-xs hover:text-[#f15803]"
                      >
                        İstifadə şərtləri
                      </Link>
                    </li>
                    <li className="leading-3 text-xs flex items-start  h-[46px] w-[185px] hover:pl-[10px] hover:w-[165px] transition-all dey">
                      <AiOutlineDoubleRight className="mt-[3px]" />
                      <Link
                        to="/"
                        className="text-[#969696] text-xs hover:text-[#f15803] "
                      >
                        Dəyişdirilmə və qaytarılma qaydaları
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:w-[195px] lg:h-[192px] w-[50%]">
              <div>
                <div className="mt-5 min-h-10 h-[41px]">
                  <h3 className="uppercase text-sm inline text-[#969696] relative font-bold">
                    Müştəri üçün
                  </h3>
                </div>
                <div className="footer-content">
                  <ul>
                    <li className="leading-3 text-xs flex items-center  h-[30px] w-[105px] hover:pl-[10px] transition-all">
                      <AiOutlineDoubleRight />
                      <Link
                        to="/"
                        className="text-[#969696] text-xs hover:text-[#f15803] w-[85px] "
                      >
                        Şəxsi Kabinet
                      </Link>
                    </li>
                    <li className="leading-3 text-xs flex items-center  h-[30px] w-[125px] hover:pl-[10px] transition-all">
                      <AiOutlineDoubleRight />
                      <Link
                        to="/"
                        className="text-[#969696] text-xs hover:text-[#f15803]"
                      >
                        Korporativ satış
                      </Link>
                    </li>
                    <li className="leading-3 text-xs flex items-center  h-[30px] w-[50px] hover:pl-[10px] transition-all ">
                      <AiOutlineDoubleRight />
                      <Link
                        to="/"
                        className="text-[#969696] text-xs hover:text-[#f15803]"
                      >
                        FAQ
                      </Link>
                    </li>
                    <li className="leading-3 text-xs flex items-center  h-[30px] w-[125px] hover:pl-[10px] transition-all">
                      <AiOutlineDoubleRight />
                      <Link
                        to="/"
                        className="text-[#969696] text-xs hover:text-[#f15803]"
                      >
                        Məxfilik siyasəti
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:w-[195px] lg:h-[192px] w-[50%]">
              <div>
                <div className="mt-5 min-h-10 h-[41px]">
                  <h3 className="uppercase text-sm inline text-[#969696] relative font-bold">
                    Məlumat
                  </h3>
                </div>
                <div className="footer-content ">
                  <ul>
                    <li className="leading-3 text-xs flex items-center  h-[30px] w-[105px] hover:pl-[10px] transition-all">
                      <AiOutlineDoubleRight />
                      <Link
                        to="/kampaniyalar"
                        className="text-[#969696] text-xs hover:text-[#f15803]"
                      >
                        Kampaniyalar
                      </Link>
                    </li>
                    <li className="leading-3 text-xs flex items-center  h-[30px] w-[105px] hover:pl-[10px] transition-all">
                      <AiOutlineDoubleRight />
                      <Link
                        to="/brendler"
                        className="text-[#969696] text-xs hover:text-[#f15803]"
                      >
                        Brendlər
                      </Link>
                    </li>
                    <li className="leading-3 text-xs flex items-center  h-[30px] w-[105px] hover:pl-[10px] transition-all">
                      <AiOutlineDoubleRight />
                      <Link
                        to="/filiallar"
                        className="text-[#969696] text-xs hover:text-[#f15803]"
                      >
                        Filiallar
                      </Link>
                    </li>
                    <li className="leading-3 text-xs flex items-center  h-[30px] w-[80px] hover:pl-[10px] transition-all">
                      <AiOutlineDoubleRight />
                      <Link
                        to="/"
                        className="text-[#969696] text-xs hover:text-[#f15803]"
                      >
                        Servis
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:w-[195px] lg:h-[192px] w-[100%]">
              <div>
                <div className="mt-5 min-h-10 h-[41px]">
                  <h3 className="uppercase text-sm inline text-[#969696] relative font-bold">
                    Əlaqə
                  </h3>
                </div>
                <div className="footer-content">
                  <ul>
                    <li className="leading-3 text-xs lg:w-[390px] h-[30px] w-full">
                      <span className="mr-[30px] text-[#969696]">Ünvan:</span>
                      <Link to="/" className="text-[#969696] text-xs">
                        Xocalı prospekti 37, Demirchi <br /> Tower, 17-ci
                        mərtəbə
                      </Link>
                    </li>
                    <li className="leading-3 text-xs  h-[30px]">
                      <span className="mr-[30px] text-[#969696]">Telefon</span>
                      <Link to="/" className="text-[#969696] text-xs">
                        *1313
                      </Link>
                    </li>
                    <li className="leading-3 text-xs ">
                      <span className="mr-[30px] text-[#969696]">Email</span>
                      <Link to="/" className="text-[#969696] text-xs">
                        info@mgstore.az
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="inputt">
                  <h3 className="uppercase text-sm inline text-[#c5c5c5] relative font-bold">
                    BİZİ İZLƏYİN
                  </h3>
                  <div className="input mt-[6px]">
                    <form onSubmit={handleSubmit} action="https://formsubmit.co/vusal.osmanov66@gmail.com"  method="POST" className="flex form pb-[20px]">
                      <input
                        type="email"
                        value={email}
                        onChange={handleInputChange}
                        placeholder="Email"
                        className="h-[35px] border-[1px] focus:outline-none  p-[10px] inputes"
                      />
                      <button
                        type="submit"
                        disabled={notification || !email.includes("@")}
                        className="bg-[#f15803] pr-[10px]  pl-[10px] text-[#fff] text-sm h-[35px]"
                      >
                        Abunə olun
                      </button>
                      {notification && <p>{notification}</p>}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#272727]  lg:block flex pb-[50px] pt-[10px]">
        <div className="w-[1170px] my-0 mx-auto pt-[20px] pr-[15px] pb-[40px] pl-[15px] border-t-[1px]    border-[#cccccc] border-b-[1px]">
          <div className=" iconss lg:flex lg:justify-between flex justify-evenly  ">
            <div className="icon">
              <div className="flex items-center">
                <h3 className="text-[#bbbb] text-lg sosial lg:block hidden">
                  Biz Sosial Şəbəkələrdə
                </h3>
                <ul className="flex justify-center items-center ml-[15px] gap-4  text-4xl">
                  <li className="">
                    <img src={image4} alt="" className="max-w-[44px] cursor-pointer" />
                  </li>
                  <li>
                    <img src={image5} alt="" className="max-w-[46px] cursor-pointer "/>
                  </li>
                  <li>
                    <img src={image6} alt="" className="max-w-[44px] cursor-pointer" />
                  </li>
                  <li>
                    <img src={image7} alt="" className="max-w-[44px] cursor-pointer" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="icon">
              <div className="flex items-center gap-6 cursor-pointer">
                <img src={image1} alt="" className="max-w-[64px]" />
                <img src={image2} alt="" className="max-w-[64px]" />
                <img src={image3} alt="" className="max-w-[64px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
