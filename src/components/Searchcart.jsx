import React from "react";

const Searchcart = ({ productName, imageUrl }) => {
    return (
        <div > 
        <div className="flex flex-col items-center h-[298px] gap-8 ">
          <div className="w-[184px] h-[184px] flex items-center justify-center relative">
            <img
              className="w-[184px] h-[184px] object-cover"
              src={`http://localhost:5000/${imageUrl}`}
              alt="noimg"
            />
          </div>
          <div className="products_text flex justify-center items-center flex-col">
            <p>{productName}</p>
          </div>
        </div>
      </div>
    );
};

export default Searchcart;