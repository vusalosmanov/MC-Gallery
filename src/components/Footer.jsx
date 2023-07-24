import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { useState } from "react";
import image1 from "../assets/images/icon/visa_classic_chip.gif";
import image2 from "../assets/images/icon/mastercard_logo_5.gif";
import image3 from "../assets/images/icon/kapital.png";
import image4 from "../assets/images/icon/icons8-facebook.gif";
import image5 from "../assets/images/icon/icons8-instagram.gif";
import image6 from "../assets/images/icon/icons8-youtube.gif";
import image7 from "../assets/images/icon/icons8-whatsapp.gif";
import "../assets/styles/components/Accordion.scss";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [notification, setNotification] = useState(false);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.length > 0) {
      setEmail("");
      setNotification(false);
    } else if (email.length === 0) {
      setNotification(true);
    }
  };

  const { t, i18n } = useTranslation();

  return (
    <>
      <div className=" pt-[20px]  pb-[28px] bg-[#272727] text-gray-500 mt-8 font-nunito">
        <div className="lg:w-[1170px] w-full my-0 mx-auto  pr-[15px] pl-[15px]">
          <div className="lg:flex lg:justify-evenly flex flex-wrap  mr-[-15px] ml-[-15px] ">
            <div className="lg:w-[195px] lg:h-[192px] w-[50%] pr-[15px] pl-[15px]">
              <div className="mt-5 min-h-10 h-[41px]">
                <h3 className="uppercase text-sm inline text-gray-400 relative font-bold">
                  {t("private cabinet")}
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
                      {t("my orders")}
                    </Link>
                  </li>
                  <li className="leading-3 text-xs flex items-center  h-[30px] w-[125px] hover:pl-[10px] transition-all">
                    <AiOutlineDoubleRight />
                    <Link
                      to="/"
                      className="text-[#969696] text-xs hover:text-[#f15803]"
                    >
                      {t("order history")}
                    </Link>
                  </li>
                  <li className="leading-3 text-xs flex items-center  h-[30px] w-[105px] hover:pl-[10px] transition-all">
                    <AiOutlineDoubleRight />
                    <Link
                      to="/"
                      className="text-[#969696] text-xs hover:text-[#f15803]"
                    >
                      {t("wish list")}
                    </Link>
                  </li>
                  <li className="leading-3 text-xs flex items-center  h-[30px] w-[125px] hover:pl-[10px] transition-all">
                    <AiOutlineDoubleRight />
                    <Link
                      to="/"
                      className="text-[#969696] text-xs hover:text-[#f15803]"
                    >
                      {t("newsletter")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-[195px] lg:h-[192px] w-[50%] pr-[15px] pl-[15px] ">
              <div>
                <div className="mt-5 min-h-10 h-[41px]">
                  <h3 className="uppercase text-sm inline text-[#969696] relative font-bold">
                    {t("music gallery")}
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
                        {t("about us")}
                      </Link>
                    </li>
                    <li className="leading-3 text-xs flex items-center  h-[30px] w-[125px] hover:pl-[10px] transition-all">
                      <AiOutlineDoubleRight />
                      <Link
                        to="/"
                        className="text-[#969696] text-xs hover:text-[#f15803]"
                      >
                        {t("terms of use")}
                      </Link>
                    </li>
                    <li className="leading-3 text-xs flex items-start  h-[46px] w-[185px] hover:pl-[10px] hover:w-[165px] transition-all dey">
                      <AiOutlineDoubleRight className="mt-[3px]" />
                      <Link
                        to="/"
                        className="text-[#969696] text-xs hover:text-[#f15803] "
                      >
                        {t("exchange and return policy")}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:w-[195px] lg:h-[192px] w-[50%] pr-[15px] pl-[15px]">
              <div>
                <div className="mt-5 min-h-10 h-[41px]">
                  <h3 className="uppercase text-sm inline text-[#969696] relative font-bold">
                    {t("for the customer")}
                  </h3>
                </div>
                <div className="footer-content">
                  <ul>
                    <li className="leading-3 text-xs flex items-center  h-[30px] w-[115px] hover:pl-[10px] transition-all">
                      <AiOutlineDoubleRight />
                      <Link
                        to="/"
                        className="text-[#969696] text-xs hover:text-[#f15803] w-[95px] "
                      >
                        {t("private cabinett")}
                      </Link>
                    </li>
                    <li className="leading-3 text-xs flex items-center  h-[30px] w-[125px] hover:pl-[10px] transition-all">
                      <AiOutlineDoubleRight />
                      <Link
                        to="/"
                        className="text-[#969696] text-xs hover:text-[#f15803]"
                      >
                        {t("corporate sales")}
                      </Link>
                    </li>
                    <li className="leading-3 text-xs flex items-center  h-[30px] w-[50px] hover:pl-[10px] transition-all ">
                      <AiOutlineDoubleRight />
                      <Link
                        to="/"
                        className="text-[#969696] text-xs hover:text-[#f15803]"
                      >
                        {t("faq")}
                      </Link>
                    </li>
                    <li className="leading-3 text-xs flex items-center  h-[30px] w-[125px] hover:pl-[10px] transition-all">
                      <AiOutlineDoubleRight />
                      <Link
                        to="/"
                        className="text-[#969696] text-xs hover:text-[#f15803]"
                      >
                        {t("privacy policy")}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:w-[195px] lg:h-[192px] w-[50%] pr-[15px] pl-[15px]">
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
            <div className="lg:w-[195px] lg:h-[192px] w-[100%] ">
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
                  <div className=" input mt-[6px]">
                    <form
                      onSubmit={handleSubmit}
                      action="https://formsubmit.co/vusal.osmanov66@gmail.com"
                      method="POST"
                      className="flex flex-col form pb-[20px]"
                    >
                      <div className="flex">
                        <input
                          type="email"
                          value={email}
                          onChange={handleInputChange}
                          placeholder="Email"
                          className=" border-[1px] focus:outline-none h-[35px] text-[14px] w-auto text-[#555] pl-[12px] pr-[12px] pt-[6px] pb-[6px] inputes"
                        />
                        <button
                          type="submit"
                          className="bg-[#f15803] pl-[16px] pr-[16px] w-[100px] pt-[8px] pb-[10px] h-[35px] text-[14px] text-white "
                        >
                          Abunə
                        </button>
                      </div>
                      <div>
                        {notification && email.length == 0 ? (
                          <label className="text-[red]">Email adress daxil et!</label>
                        ) : (
                          ""
                        )}
                      </div>
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
                <h3 className="text-[#bbbb] text-[16px] sosial lg:block hidden font-bold ">
                  BİZ SOSİAL ŞƏBƏKƏLƏRDƏ
                </h3>
                <ul className="flex justify-center items-center ml-[15px] gap-4  text-4xl">
                  <li className="">
                    <img
                      src={image4}
                      alt=""
                      className="max-w-[44px] cursor-pointer"
                    />
                  </li>
                  <li>
                    <img
                      src={image5}
                      alt=""
                      className="max-w-[46px] cursor-pointer "
                    />
                  </li>
                  <li>
                    <img
                      src={image6}
                      alt=""
                      className="max-w-[44px] cursor-pointer"
                    />
                  </li>
                  <li>
                    <img
                      src={image7}
                      alt=""
                      className="max-w-[44px] cursor-pointer"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="icon">
              <div className="flex items-center gap-6 cursor-pointer ">
                <img
                  src={image1}
                  alt=""
                  className="max-w-[64px] hover:scale-[1.1] btn"
                />
                <img
                  src={image2}
                  alt=""
                  className="max-w-[64px] hover:scale-[1.1] btn"
                />
                <img
                  src={image3}
                  alt=""
                  className="max-w-[64px] hover:scale-[1.1] btn"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
