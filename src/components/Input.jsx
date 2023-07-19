import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Input = () => {
  const [products, setProducts] = useState([]);
  const [filteredData, setFilteredData] = useState(products);

  useEffect(() => {
    axios("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const searchData = (e) => {
    if (e.target.value.trim() === "") {
      setFilteredData([]);
    } else {
      const filterData = products.filter((item) => {
        return item.name.toLowerCase().includes(e.target.value.toLowerCase());
      });
      setFilteredData(filterData);
    }
  };


  return (
    <>
      <label
        htmlFor="search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <div>
          <input
            className="block w-full pt-0 pr-[40px] pl-[40px] pb-0 leading-[41px] text-sm text-gray-900 border border-[#f15803]   focus:ring-[#f15803] focus:border-[#f15803]"
            type="text"
            name="search"
            placeholder="Axtar..."
            onChange={searchData}
          />
          {products.length > 0 ? (
            <ul>
              {filteredData.map((item) => {
                return (
                  <li key={item.id} className="z-[999px]">
                    <div className="bg-[#fff] flex  p-[10px]  pt-[30px] pb-[30px] h-[190px] items-center z-[9999] absolute border-b-[1px]  ">
                      <div>
                        <img
                          className="w-[100%]  object-cover border-none cursor-pointer"
                          src={` http://localhost:5000/${item.imageurl}`}
                          alt="noimg"
                        />
                      </div>
                      <div>
                        <h3 className="text-[12px] text-[#666] hover:text-[#f15803] mb-[10px] cursor-pointer">
                          {item.name}
                        </h3>
                        <p className="text-[15px] text-[#f15803] font-bold cursor-pointer">
                          {item.price}
                        </p>
                        <p className="text-[14px] text-[#000] line-through cursor-pointer ">
                          {item.oldprice}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Input;
