import React from "react";
import { useState } from "react";
import "../assets/styles/components/productcar.scss";
import Swal from "sweetalert2";
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

  const [isButtonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setButtonClicked(true);
    Swal.fire({
      title: "Məhsulu silməyə əminsiz?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Bəli!",
      cancelButtonText: "Xeyr!",
    }).then((result) => {
      if (result.isConfirmed) {
        onClick();
      } else {
        setButtonClicked(false);
      }
    });
  };

  return (
    <>
        <div className="lg:w-[1170px] w-full  my-0 mx-auto  pr-[15px] pl-[15px] lg:block md:block hidden  mb-[20px]">
          <table id="customers" className="lg:w-[1170px]">
            <thead className="text-center bg-[#f7f7f7] text-[16px]">
              <tr className="border-[1px] text-[#4d4d4d]">
                <td className="border-[1px] p-[8px]">Şəkil</td>
                <td className="border-[1px] p-[8px]">Məhsulun kodu</td>
                <td className="border-[1px] p-[8px]">Model</td>
                <td className="border-[1px] p-[8px]">Sayı</td>
                <td className="border-[1px] p-[8px] font-[400]">Qiyməti</td>
                <td className="p-[8px] font-[200]">Məbləği</td>
              </tr>
            </thead>
            <tr className="border-[1px] mt-[20px] h-[168px]">
              <th className="border-[1px] w-[168px] p-[8px]">
                <img
                  src={` http://localhost:5000/${imageUrl}`}
                  alt=""
                  className="p-[4px]"
                />
              </th>
              <th className="border-[1px] p-[8px] text-[#3a3a3a] text-[14px] capitalize w-[260px] font-[400]">
                <p>{productName}</p>
              </th>
              <th className="border-[1px] p-[8px] text-[#3a3a3a] text-[14px] capitalize w-[260px] font-[400]">
                <p>{brend}</p>
              </th>
              <th className=" border-[1px] justify-center items-center p-[8px] w-[150px]">
                <div className="flex gap-3 justify-around mb-4">
                  <div className="pt-[2px] pb-[2px] pl-[6px] pr-[6px] rounded-[5px] text-[white] bg-[#f15803] flex justify-center items-center">
                    {addQtyBtn && <button onClick={onAddQty}>+</button>}
                  </div>
                  <div className="pt-[6px] pb-[6px] pl-[12px] pr-[12px] rounded-[5px] text-[white] bg-[#f15803] ">
                    <span>{quantity}</span>
                  </div>
                  <div className="pt-[2px] pb-[2px] pl-[8px] pr-[8px] rounded-[5px] text-[white] bg-[#f15803] flex justify-center items-center ">
                    {delQtyBtn && <button onClick={onDeleteQty}>-</button>}
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="pt-[6px] pb-[6px] pl-[18px] pr-[18px] rounded-[5px] text-[white] bg-[#f15803]">
                    {showDeleteButton && (
                      <button onClick={handleButtonClick}>
                        {isButtonClicked ? "X" : "X"}
                      </button>
                    )}
                  </div>
                </div>
              </th>
              <th className="border-[1px] p-[8px] text-[#f15803] font-[200] w-[150px] ">
                <p>{price}₼</p>
              </th>
              <th className="p-[8px] text-[#f15803] font-[200] w-[150px]">
                <p>{sumprice.toFixed(2)}₼</p>
              </th>
            </tr>
          </table>
        </div>
        <div className="w-full lg:hidden md:hidden flex justify-center mb-[20px] ">
          <table id="customers" className="border-[1px] lg:w-[1170px]">
            <tr className="border-[1px] mt-[20px]">
              <th className="border-[1px] w-[168px] p-[8px]">
                <img
                  src={` http://localhost:5000/${imageUrl}`}
                  alt=""
                  className="p-[4px]"
                />
              </th>
            </tr>
            <tr>
              <th className="border-[1px] p-[8px] text-[#3a3a3a] text-[14px] capitalize w-[260px] font-[400]">
                <p>{productName}</p>
              </th>
            </tr>
            <tr>
              <th className="border-[1px] p-[8px] text-[#3a3a3a] text-[14px] capitalize w-[260px] font-[400]">
                <p>{brend}</p>
              </th>
            </tr>
            <tr>
              <th className=" border-[1px] justify-center items-center p-[8px] w-[150px]">
                <div className="flex gap-3 justify-around mb-4">
                  <div className="pt-[2px] pb-[2px] pl-[6px] pr-[6px] rounded-[5px] text-[white] bg-[#f15803] flex justify-center items-center">
                    {addQtyBtn && <button onClick={onAddQty}>+</button>}
                  </div>
                  <div className="pt-[6px] pb-[6px] pl-[12px] pr-[12px] rounded-[5px] text-[white] bg-[#f15803] ">
                    <span>{quantity}</span>
                  </div>
                  <div className="pt-[2px] pb-[2px] pl-[8px] pr-[8px] rounded-[5px] text-[white] bg-[#f15803] flex justify-center items-center ">
                    {delQtyBtn && <button onClick={onDeleteQty}>-</button>}
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="pt-[6px] pb-[6px] pl-[18px] pr-[18px] rounded-[5px] text-[white] bg-[#f15803]">
                    {showDeleteButton && (
                      <button onClick={handleButtonClick}>
                        {isButtonClicked ? "X" : "X"}
                      </button>
                    )}
                  </div>
                </div>
              </th>
            </tr>
            <tr>
              <th className="border-[1px] p-[8px] text-[#f15803] font-[200] w-[150px] ">
                <p>{price}₼</p>
              </th>
            </tr>
            <tr>
              <th className="p-[8px] text-[#f15803] font-[200] w-[150px]">
                <p>{sumprice.toFixed(2)}₼</p>
              </th>
            </tr>
          </table>  
        </div>
    </>
  );
};

export default ProductCard;
