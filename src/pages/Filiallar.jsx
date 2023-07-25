import React from "react";
import { Link } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";
import Swiperss from "../components/Swiper3";

const Filiallar = () => {
  return (
    <>
      <div className="lg:w-[1170px] lg:my-0 lg:mx-auto  lg:pr-[15px] lg:pl-[15px] border-t w-full">
        <ul className="flex gap-4 mt-[20px] mr-[0px] mb-[20px] ml-[0px] text-sm">
          <li className="flex items-center gap-2">
            <Link to="/home" className="hover:text-[#f15803]">
              Ana səhifə
            </Link>
            <AiFillCaretRight />
          </li>
          <li>
            <Link className="text-[#f15803]">
              Filiallar
            </Link>
          </li>
        </ul>
        <div className="w-[100%] flex justify-center mt-[20px] mb-[20px]">
          <h1 className="text-3xl text-[#f15803]">Filiallar</h1>
        </div>
        <div className="lg:w-[100%] flex justify-center ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97211.23532160591!2d49.863989859924104!3d40.41214919242858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403063574986c38b%3A0xdb519e1eef512e46!2sMG%20store%20(music%20gallery-%C9%99hm%C9%99dli)!5e0!3m2!1saz!2saz!4v1686335327440!5m2!1saz!2saz"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            style={{ border: "0" }}
            referrerpolicy="no-referrer-when-downgrade"
            className="w-[1200px]"
          ></iframe>
        </div>
        <div className="mt-[10px] lg:w-[1170px] w-full flex justify-center">
          <h1 className="text-3xl">Filiallar</h1>
        </div>
        <div className="mt-[20px] lg:flex lg:flex-wrap flex flex-wrap justify-center">
          <div className="min-h-[253px] w-[277px]">
            <div className="mb-[50px]">
              <span className="font-semibold">28 Mall filialı</span>
              <p className="text-[#4d4d4d] text-sm">
                <span>
                  Nəsimi rayonu, Füzuli küçəsi, 28 Mall Ticarət Mərkəzi <br />{" "}
                  <br />
                  İş saatı: 10:00-22:00
                </span>
              </p>
              <br />
              <p className=" text-[#4d4d4d] text-sm">
                <span>
                  Tel: <span>(+994 12) 499 87 58/59/60</span>
                  <br />
                  Mob: <span>(+994 51) 206 89 05/06</span>
                  <br />
                </span>
              </p>
            </div>
          </div>
          <div className="min-h-[253px] w-[277px]">
            <div className="mb-[50px]">
              <span className="font-semibold">Əhmədli filialı</span>
              <p className="text-[#4d4d4d] text-sm">
                <span>
                  Xətai rayonu, Məhəmməd Hadi küçəsi 27
                  <br /> <br />
                  İş saatı: 10:00-22:00
                </span>
              </p>
              <br />
              <p className=" text-[#4d4d4d] text-sm">
                <span>
                  Tel: <span>(+994 12) 499 87 58/59/60</span>
                  <br />
                  Mob: <span>(+994 51) 206 89 05/06</span>
                  <br />
                </span>
              </p>
            </div>
          </div>
          <div className="min-h-[253px] w-[277px]">
            <div className="mb-[50px]">
              <span className="font-semibold">Gənclik filialı</span>
              <p className="text-[#4d4d4d] text-sm">
                <span>
                  Nərimanov rayonu, Fətəli Xan Xoyski küçəsi 112A
                  <br /> <br />
                  İş saatı: 10:00-22:00
                </span>
              </p>
              <br />
              <p className=" text-[#4d4d4d] text-sm">
                <span>
                  Tel: <span>(+994 12) 499 87 58/59/60</span>
                  <br />
                  Mob: <span>(+994 51) 206 89 05/06</span>
                  <br />
                </span>
              </p>
            </div>
          </div>
          <div className="min-h-[253px] w-[277px]">
            <div className="mb-[50px]">
              <span className="font-semibold">İnqilab filialı</span>
              <p className="text-[#4d4d4d] text-sm">
                <span>
                  Nəsimi rayonu, Azadlıq prospekti 114
                  <br /> <br />
                  İş saatı: 10:00-22:00
                </span>
              </p>
              <br />
              <p className=" text-[#4d4d4d] text-sm">
                <span>
                  Tel: <span>(+994 12) 499 87 58/59/60</span>
                  <br />
                  Mob: <span>(+994 51) 206 89 05/06</span>
                  <br />
                </span>
              </p>
            </div>
          </div>
          <div className="min-h-[253px] w-[277px]">
            <div className="mb-[50px]">
              <span className="font-semibold">MG Center</span>
              <p className="text-[#4d4d4d] text-sm">
                <span>
                  Nəsimi rayonu, Azadlıq prospekti 14 <br /> <br />
                  İş saatı: 10:00-22:00
                </span>
              </p>
              <br />
              <p className=" text-[#4d4d4d] text-sm">
                <span>
                  Tel: <span>(+994 12) 499 87 58/59/60</span>
                  <br />
                  Mob: <span>(+994 51) 206 89 05/06</span>
                  <br />
                </span>
              </p>
            </div>
          </div>
          <div className="min-h-[253px] w-[277px]">
            <div className="mb-[50px]">
              <span className="font-semibold">İnşaatçılar filialı</span>
              <p className="text-[#4d4d4d] text-sm">
                <span>
                  Yasamal ray., Şərifzadə 162 (İnşaatçılar metrosunun yanı){" "}
                  <br /> <br />
                  İş saatı: 10:00-22:00
                </span>
              </p>
              <br />
              <p className=" text-[#4d4d4d] text-sm">
                <span>
                  Tel: <span>(+994 12) 499 87 58/59/60</span>
                  <br />
                  Mob: <span>(+994 51) 206 89 05/06</span>
                  <br />
                </span>
              </p>
            </div>
          </div>
          <div className="min-h-[253px] w-[277px]">
            <div className="mb-[50px]">
              <span className="font-semibold">Bakıxanov filialı</span>
              <p className="text-[#4d4d4d] text-sm">
                <span>
                  Sabunçu rayonu, Yavər Əliyev küçəsi 132, "Bakıxanov Mall"
                  Ticarət Mərkəzi
                  <br /> <br />
                  İş saatı: 10:00-22:00
                </span>
              </p>
              <br />
              <p className=" text-[#4d4d4d] text-sm">
                <span>
                  Tel: <span>(+994 12) 499 87 58/59/60</span>
                  <br />
                  Mob: <span>(+994 51) 206 89 05/06</span>
                  <br />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-[1px] mt-[50px] mb-[40px] swiper lg:w-[1170px] my-0 mx-auto  pr-[15px] pl-[15px] flex lg:justify-between  w-full  justify-center items-center">
        <Swiperss />
      </div>
    </>
  );
};

export default Filiallar;
