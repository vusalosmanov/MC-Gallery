import React from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import crvisa from "../assets/images/icon/visa.gif";
import crmaster from "../assets/images/icon/mastercard.gif";
import crkapital from "../assets/images/icon/kapital.png";
import facebook from "../assets/images/icon/icon-facebook.gif";
import instagram from "../assets/images/icon/icon-instagram.gif";
import youtube from "../assets/images/icon/icon-youtube.gif";
import whatsapp from "../assets/images/icon/icon-whatsapp.gif";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../assets/styles/components/Accordion.scss";

const Footer = () => {

  //  ***Input type=email and button*** 

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

  //   ***Dil deyişmə***
  
  const { t } = useTranslation();

  return (
    <>
      <div className=" pt-[20px]  pb-[28px] bg-[#272727] text-gray-500 mt-8 font-nunito">
        <div className="lg:w-[1170px] w-full my-0 mx-auto  pr-[15px] pl-[15px]">
          <div className="lg:flex lg:justify-evenly flex flex-wrap  mr-[-15px] ml-[-15px] ">
              {/* Footer content 1 */}
            <div className="lg:w-[195px] lg:h-[192px] w-[50%] pr-[15px] pl-[15px]">
              <div className="mt-5 min-h-10 h-[41px]">
                <h3 className="uppercase text-sm inline text-gray-400 relative font-bold">
                  {t("private_cabinet")}
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
                      {t("my_orders")}
                    </Link>
                  </li>
                  <li className="leading-3 text-xs flex items-center  h-[30px] w-[125px] hover:pl-[10px] transition-all">
                    <AiOutlineDoubleRight />
                    <Link
                      to="/"
                      className="text-[#969696] text-xs hover:text-[#f15803]"
                    >
                      {t("order_history")}
                    </Link>
                  </li>
                  <li className="leading-3 text-xs flex items-center  h-[30px] w-[105px] hover:pl-[10px] transition-all">
                    <AiOutlineDoubleRight />
                    <Link
                      to="/"
                      className="text-[#969696] text-xs hover:text-[#f15803]"
                    >
                      {t("wish_list")}
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
            {/* Footer content 2 */}
            <div className="lg:w-[195px] lg:h-[192px] w-[50%] pr-[15px] pl-[15px] ">
              <div>
                <div className="mt-5 min-h-10 h-[41px]">
                  <h3 className="uppercase text-sm inline text-[#969696] relative font-bold">
                    {t("music_gallery")}
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
                        {t("about_us")}
                      </Link>
                    </li>
                    <li className="leading-3 text-xs flex items-center  h-[30px] w-[125px] hover:pl-[10px] transition-all">
                      <AiOutlineDoubleRight />
                      <Link
                        to="/"
                        className="text-[#969696] text-xs hover:text-[#f15803]"
                      >
                        {t("terms_of_use")}
                      </Link>
                    </li>
                    <li className="leading-3 text-xs flex items-start   h-[46px] w-[160px] hover:pl-[10px] hover:w-[165px] transition-all dey">
                      <AiOutlineDoubleRight className="mt-[3px]" />
                      <Link
                        to="/"
                        className="text-[#969696] text-xs hover:text-[#f15803] "
                      >
                        {t("exchange_and_return_policy")}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Footer content 3 */}
            <div className="lg:w-[195px] lg:h-[192px] w-[50%] pr-[15px] pl-[15px]">
              <div>
                <div className="mt-5 min-h-10 h-[41px]">
                  <h3 className="uppercase text-sm inline text-[#969696] relative font-bold">
                    {t("for_the_customer")}
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
                        {t("private_cabinett")}
                      </Link>
                    </li>
                    <li className="leading-3 text-xs flex items-center  h-[30px] w-[125px] hover:pl-[10px] transition-all">
                      <AiOutlineDoubleRight />
                      <Link
                        to="/"
                        className="text-[#969696] text-xs hover:text-[#f15803]"
                      >
                        {t("corporate_sales")}
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
                        {t("privacy_policy")}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Footer content 4 */}
            <div className="lg:w-[195px] lg:h-[192px] w-[50%] pr-[15px] pl-[15px]">
              <div>
                <div className="mt-5 min-h-10 h-[41px]">
                  <h3 className="uppercase text-sm inline text-[#969696] relative font-bold">
                    {t("information")}
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
                        {t("campaigns")}
                      </Link>
                    </li>
                    <li className="leading-3 text-xs flex items-center  h-[30px] w-[105px] hover:pl-[10px] transition-all">
                      <AiOutlineDoubleRight />
                      <Link
                        to="/brendler"
                        className="text-[#969696] text-xs hover:text-[#f15803]"
                      >
                        {t("brands")}
                      </Link>
                    </li>
                    <li className="leading-3 text-xs flex items-center  h-[30px] w-[105px] hover:pl-[10px] transition-all">
                      <AiOutlineDoubleRight />
                      <Link
                        to="/filiallar"
                        className="text-[#969696] text-xs hover:text-[#f15803]"
                      >
                        {t("branches")}
                      </Link>
                    </li>
                    <li className="leading-3 text-xs flex items-center  h-[30px] w-[80px] hover:pl-[10px] transition-all">
                      <AiOutlineDoubleRight />
                      <Link
                        to="/"
                        className="text-[#969696] text-xs hover:text-[#f15803]"
                      >
                        {t("service")}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Footer content 5 */}
            <div className="lg:w-[195px] lg:h-[192px] w-[100%] ">
              <div className="elaqe">
                <div className="mt-5 min-h-10 h-[41px] ">
                  <h3 className="uppercase text-sm inline text-[#969696] relative font-bold">
                    {t("connection")}
                  </h3>
                </div>
                <div className="footer-content">
                  <ul>
                    <li className="leading-3 text-xs lg:w-[390px] h-[30px] w-full">
                      <span className="mr-[30px] text-[#969696]">{t("address")}:</span>
                      <Link to="/" className="text-[#969696] text-xs">
                        {t("location")}
                      </Link>
                    </li>
                    <li className="leading-3 text-xs  h-[30px]">
                      <span className="mr-[30px] text-[#969696]">{t("phone")}</span>
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
                    {t("follow_us")}
                  </h3>
                  <div className=" input mt-[6px]">
                    <form
                      onSubmit={handleSubmit}
                      action="https://formsubmit.co/vusal.osmanov66@gmail.com"
                      method="POST"
                      className="flex flex-col form pb-[20px]"
                    >
                      <div className="flex input">
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
                          {t("subscribe")}
                        </button>
                      </div>
                      <div>
                        {notification && email.length === 0 && (
                          <label className="text-[red]">Email adress daxil et!</label>
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
      {/* Icon and Card */}
      <div className="bg-[#272727]  lg:block flex pb-[50px] pt-[10px]">
        <div className="w-[1170px] my-0 mx-auto pt-[20px] pr-[15px] pb-[40px] pl-[15px] border-t-[1px]    border-[#cccccc] border-b-[1px]">
          <div className=" iconss lg:flex lg:justify-between flex justify-evenly  ">
            <div className="icon">
              <div className="flex items-center">
                <h3 className="text-[#bbbb] text-[16px] sosial lg:block hidden font-bold ">
                  {t("sosial")}
                </h3>
                <ul className="flex justify-center items-center ml-[15px] gap-4  text-4xl">
                  <li className="">
                    <img
                      src={facebook}
                      alt="facebook"
                      className="max-w-[44px] cursor-pointer"
                    />
                  </li>
                  <li>
                    <img
                      src={instagram}
                      alt="instagram"
                      className="max-w-[46px] cursor-pointer "
                    />
                  </li>
                  <li>
                    <img
                      src={youtube}
                      alt="youtube"
                      className="max-w-[44px] cursor-pointer"
                    />
                  </li>
                  <li>
                    <img
                      src={whatsapp}
                      alt="whatsapp"
                      className="max-w-[44px] cursor-pointer"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="icon">
              <div className="flex items-center gap-6 cursor-pointer ">
                <img
                  src={crvisa}
                  alt="visa"
                  className="max-w-[64px] hover:scale-[1.1] btn"
                />
                <img
                  src={crmaster}
                  alt="master"
                  className="max-w-[64px] hover:scale-[1.1] btn"
                />
                <img
                  src={crkapital}
                  alt="kapital"
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
