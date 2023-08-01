import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { TbPageBreak } from "react-icons/tb";
import { json, Link } from "react-router-dom";
import image from "../assets/images/icon/sale-old.png";
import { useState } from "react";
import Swal from "sweetalert2";
import "../assets/styles/components/productcar.scss";
import "../assets/styles/components/Accordion.scss";

export const ProductCard = ({
  id,
  productName,
  price,
  imageurl,
  oldprice,
  onClick,
  quantity,
  onLike,
}) => {
  // ***Sebet button and Like button***

  const [ buttonClicked ,setButtonClicked] = useState(false);
  
  const [ likeCount ,setLikeCount] = useState(false);

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
    const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || []

    const itemInCart = existingCartItems.find((item) => item.id === id)

    if(itemInCart) {
      itemInCart.quantity += 1
    } 
    else {
      existingCartItems.push({id , productName , price ,imageurl ,oldprice ,quantity : 1})
    }

    localStorage.setItem("cartItems" , JSON.stringify(existingCartItems))
  };
  


  const handleLikeClick = () => {
    setLikeCount(true);
    onLike();
  };

  console.log(onLike);
  return (
    <div className="sliderproduct_main flex justify-center items-center   ">
      <div className="sliderproduct_main2 flex flex-col items-center w-[204px] h-[298px] gap-8 ">
        <div className=" sliderproduct_img w-[184px] h-[184px] flex items-center justify-center relative">
          <div>
            <span>
              <img
                src={image}
                alt=""
                className="w-[70px] absolute top-6 left-[-15px] z-[-99999px] "
              />
            </span>
          </div>
          <img
            className="w-[184px] h-[184px] object-cover border-none"
            src={` http://localhost:5000/${imageurl}`}
            alt="noimg"
          />
          <div className="overlay_for_img w-[184px] h-[184px]  absolute hidden ">
            <div className="overlay_top h-[110px] bg-gray-900/[0.4] transition-all duration-400 ease flex items-center justify-center">
              <div>
                <span>
                  <img
                    src={image}
                    alt=""
                    className="w-[70px] absolute top-6 left-[-15px] z-[-99999px] "
                  />
                </span>
              </div>
              <div className="flex mt-[70px]">
                <div>
                  <button
                    onClick={handleLikeClick}
                    className="mr-4 border-[1px] bg-[#f15803] hover:bg-white hover:text-[#f15803] text-white w-[34px] h-[34px] btn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="file: mt-4 h-4 w-5  text-white mb-3"
                      className=" w-5 h-4 text-center ml-[5.5px]"
                    >
                      <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" />
                    </svg>
                  </button>
                </div>
                <div>
                  <Link to={`/details/${id}`}>
                    <button className="bg-[#f15803] border-[1px] hover:bg-white hover:text-[#f15803] text-white w-[34px] h-[34px] mr-4 btn">
                      <TbPageBreak className="text-[22px] mt-[3px] ml-[5px] " />
                    </button>
                  </Link>
                </div>
                <div>
                  <button className="bg-[#f15803] border-[1px] hover:bg-white hover:text-[#f15803] text-white w-[34px] h-[34px]  btn  ">
                    <div className="w-[34px] h-[34px]  hover:text-[#f15803]">
                      <AiOutlineSearch className="text-[22px] mt-[5px] ml-[5px]" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
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
              // disabled={isButtonClicked}
              className="px-4 py-1 bg-[black] rounded-none text-white  shadow-lg shadow-black/80 "
            >
              Səbətə əlavə et
            </button>
            {/* <div className="text-lime-500">
              {isButtonClicked ? "sebete elave olunub" : ""} 
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
