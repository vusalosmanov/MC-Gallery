import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
const Searchcart = ({ productName, imageUrl, price, oldprice, id }) => {

  const [inputValue, setInputValue] = useState("");

  const handleLinkClick = () => {
    setInputValue(""); // Inputun value'sini sıfırlamaq üçün
  };
  return (
    <div className="border-t-[1px] pb-[5px]">
      <div className="flex  items-center p-[10px] ">
        <img
          className="w-[50%]  object-contain cursor-pointer"
          src={`http://localhost:5000/${imageUrl}`}
          alt="noimg"
          to={`/details/${id}`}
          
        />

        <div className="w-[50%]  text-left products_text flex justify-center items-center flex-col">
          <Link
            to={`/details/${id}`}
            className="text-[12px] text-[#666] cursor-pointer hover:text-[#f15803] text-center"
            onClick={handleLinkClick}
          >
            {productName}
          </Link>
          <div className="pt-[20px]">
            <p className="text-[15px] text-[#f15803] text-left cursor-pointer">
              {price}₼
            </p>
            <p className="text-[14px] line-through cursor-pointer ">
              {oldprice}₼
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Searchcart;
