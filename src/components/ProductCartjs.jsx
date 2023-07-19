import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";
import "../assets/styles/components/productcar.scss";
import image from "../assets/images/icon/sale-old.png"
export const ProductCartjs = ({
  id,
  productName,
  price,
  imageurl,
  oldprice,
  onClick,
  quantity,
  showAddButton = true,
  showDeleteButton = false,
  onAddQty,
  onDeleteQty,
  addQtyBtn = false,
  delQtyBtn = false,
}) => {
  return (
    <div className="sliderproduct_main flex  justify-center items-center">
      <div className="sliderproduct_main2 flex flex-col items-center w-[204px] h-[298px] gap-8 ">
        <div className=" sliderproduct_img w-[184px] h-[184px] flex items-center justify-center relative">
        <div>
            <span><img src={image} alt="" className="w-[70px] absolute top-8 left-[-15px] z-[-99999px] " /></span>
          </div>
          <img
            className="w-[184px] h-[184px] object-cover border-none"
            src={imageurl}
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
                <span className="text-lime-500 text-xs">{price}</span>
                <span className="line-through text-xs text-white">
                  {oldprice}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className=" products_text flex justify-center items-center flex-col">
          <p className="text-[14px] text-[black] text-center">{productName}</p>
          <span>{quantity}</span>
          <div className="flex gap-3 items-center ">
            <span className="text-[#f13803] text-[16px]">{price}</span>
            <span className="line-through text-black text-[16px]">
              {oldprice}
            </span>
          </div>
        </div>

        <div className="overlay_button hidden ">
          <button
            onClick={onClick}
            className="px-4 py-1 bg-[black] rounded-none text-white "
          >
            Səbətə əlavə et
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCartjs;
