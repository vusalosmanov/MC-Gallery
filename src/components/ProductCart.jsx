import { Link } from "react-router-dom";
import React from "react";
import "../assets/styles/components/productcar.scss";
import image from "../assets/images/icon/sale-old.png";
import "../assets/styles/components/Accordion.scss";
import Swal from "sweetalert2";
import { useState } from "react";
export const ProductCard = ({
  id,
  productName,
  price,
  imageurl,
  oldprice,
  onClick,
  quantity,
}) => {
  const [isButtonClicked, setButtonClicked] = useState(false);

  const Alert = () => {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Səbətə əlavə olundu",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleButtonClick = () => {
    setButtonClicked(true);
    onClick();
    Alert();
  };
  return (
    <div className="sliderproduct_main flex justify-center items-center   ">
      <div className="sliderproduct_main2 flex flex-col items-center w-[204px] h-[298px] gap-8 ">
        <div className=" sliderproduct_img w-[184px] h-[184px] flex items-center justify-center relative">
          <div>
            <span>
              <img
                src={image}
                alt=""
                className="w-[70px] absolute top-8 left-[-15px] z-[-99999px] "
              />
            </span>
          </div>
          <img
            className="w-[184px] h-[184px] object-cover border-none"
            src={` http://localhost:5000/${imageurl}`}
            alt="noimg"
          />
          <div className="overlay_for_img w-[184px] h-[184px]  absolute hidden ">
            <div className=" overlay_top h-1/2 bg-gray-600/[0.5] "></div>
            <div className="overlay_bottom h-1/2 bg-black flex items-center justify-center flex-col  ">
              <div>
                <button>
                  <Link to={`/details/${id}`}>
                    {" "}
                    <p className="text-white text-[12px] text-center w-[150px]">
                      {productName}
                    </p>
                  </Link>
                </button>
              </div>
              {quantity && <p>Quantity {quantity}</p>}
              <div className="flex gap-1 items-center">
                <span className="text-lime-500 text-xs">{price}₼ </span>
                <span className="line-through text-xs text-white">
                  {oldprice}₼
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="overlay">
          <div className=" products_text flex justify-center items-center flex-col">
            <p className="text-[14px] text-[black] text-center">
              {productName}
            </p>
            <span>{quantity}</span>
            <div className="flex gap-3 items-center ">
              <span className="text-[#f13803] text-[16px]">{price}₼ </span>
              <span className="line-through text-black text-[16px]">
                {oldprice}₼
              </span>
            </div>
          </div>

          <div className="overlay_button hidden ">
            <button
               onClick={handleButtonClick}
              className="px-4 py-1 bg-[black] rounded-none text-white "
            >
              Səbətə əlavə et
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
