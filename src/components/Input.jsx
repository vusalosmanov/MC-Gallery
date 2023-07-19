import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Searchcart from "./Searchcart";
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

  const borderedDivStyle = {
    maxHeight: "270px",
    overflowY: "scroll",
    border: "1px solid #red-800",
    display: filteredData.length === 0 ? "none" : "block",
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
          <div
            style={borderedDivStyle}
            className="lg:w-[247px]  border-red-800 border  gap-[50px] absolute z-[99999999999] bg-white "
          >
            {filteredData.map((item) => (
              <Searchcart productName={item.name} imageUrl={item.imageurl} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Input;
