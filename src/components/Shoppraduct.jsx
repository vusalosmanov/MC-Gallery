import React from "react";
import { AiFillCaretRight } from "react-icons/ai";
import "../assets/styles/components/productcar.scss";

export const ProductCard = ({
  id,
  brend,
  productName,
  price,
  imageUrl,
  onClick,
  quantity,
  onAddQty,
  onDeleteQty,
  showDeleteButton = false,
  addQtyBtn = false,
  delQtyBtn = false,
}) => {
  const sumprice = price * quantity;

  return (
    <>
      <div className="lg:w-[1170px] w-full  my-0 mx-auto  pr-[15px] pl-[15px] lg:block hidden ">
        <table id="customers" className="border-[1px] lg:w-[1170px]">
          <thead className="text-center bg-[#f7f7f7] text-[16px]">
            <tr className="border-[1px]">
              <td className="border-[1px] p-[8px]">Şəkil</td>
              <td className="border-[1px]">Məhsulun kodu</td>
              <td className="border-[1px]">Model</td>
              <td className="border-[1px]">Sayı</td>
              <td className="border-[1px]">Qiyməti</td>
              <td>Məbləği</td>
            </tr>
          </thead>
          <tr className="border-[1px] mt-[20px]">
            <th className="border-[1px]">
              <img
                src={` http://localhost:5000/${imageUrl}`}
                alt=""
                className="p-[4px]"
              />
            </th>
            <th className="border-[1px] p-[15px]">
              <p>{productName}</p>
            </th>
            <th className="border-[1px] p-[15px]">
              <p>{brend}</p>
            </th>
            <th className=" border-[1px] justify-center items-center p-[15px]">
              <div className="flex gap-3">
                <span className="border-[1px]">{quantity}</span>
                {addQtyBtn && <button onClick={onAddQty}>+</button>}
                {delQtyBtn && <button onClick={onDeleteQty}>-</button>}
                {showDeleteButton && <button onClick={onClick}>X</button>}
              </div>
            </th>
            <th className="border-[1px] p-[15px]">
              <p>{price}</p>
            </th>
            <th className="p-[15px]">
              <p>{sumprice.toFixed(2)}</p>
            </th>
          </tr>
        </table>
      </div>
      <div className="lg:w-[1170px] w-full  my-0 mx-auto  pr-[15px] pl-[15px] lg:hidden block  ">
        <table id="customers" className="border-[1px] lg:w-[1170px] ">
          <tr className="border-[1px] mt-[20px]">
            <th className="border-[1px] flex justify-center">
              <img
                src={` http://localhost:5000/${imageUrl}`}
                alt=""
                className="p-[4px]"
              />
            </th>
          </tr>
          <tr>
            <th className="border-[1px] p-[15px]">
              <p>{productName}</p>
            </th>
          </tr>
          <tr>
            <th className="border-[1px] p-[15px]">
              <p>{brend}</p>
            </th>
          </tr>
          <tr>
            <th className=" border-[1px] justify-center items-center p-[15px]">
              <div className="flex gap-3  justify-center">
                <span className="border-[1px]">{quantity}</span>
                {addQtyBtn && <button onClick={onAddQty}>+</button>}
                {delQtyBtn && <button onClick={onDeleteQty}>-</button>}
                {showDeleteButton && <button onClick={onClick}>X</button>}
              </div>
            </th>
          </tr>
          <tr>
            <th className="border-[1px] p-[15px]">
              <p>{price}</p>
            </th>
          </tr>
          <tr>
            <th className="p-[15px]">
              <p>{sumprice.toFixed(2)}</p>
            </th>
          </tr>
        </table>
      </div>
    </>
  );
};

export default ProductCard;
