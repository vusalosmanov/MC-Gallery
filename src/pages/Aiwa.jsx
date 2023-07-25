import React from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/card.action";
import ProductCard from "../components/ProductCart";
import "../assets/styles/components/Accordion.scss";
import axios from "axios";

const Aiwa = () => {
  const dispatch = useDispatch();
  const [price, setPrice] = useState(250);
  const [products, setProducts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [colorFilter, setColorFilter] = useState(null);
  const [brandFilter, setBrandFilter] = useState(null);

  useEffect(() => {
    axios("http://localhost:5000/api/products")
      .then((res) => {
        setProducts(res.data);
        setFilteredData(res.data.filter((curData) => curData.type === "AIWA"));
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    let filteredResult = products.filter(
      (product) => product.price >= 30 && product.price <= price
    );

    if (colorFilter) {
      filteredResult = filteredResult.filter(
        (product) => product.color === colorFilter
      );
    }

    if (brandFilter) {
      filteredResult = filteredResult.filter(
        (product) =>
          product.brend &&
          product.brend.toLowerCase() === brandFilter.toLowerCase()
      );
    }

    setFilteredData(
      filteredResult.filter((curData) => curData.type === "AIWA")
    );
  }, [price, products, colorFilter, brandFilter]);

  const handlePriceInput = (e) => {
    setPrice(e.target.value);
  };
  const filterByColor = (color) => {
    setColorFilter(color);
  };

  const filterByBrand = (brend) => {
    setBrandFilter(brend);
  };

  const showAllProducts = () => {
    setColorFilter(null);
    setBrandFilter(null);
  };
  return (
    <>
      <div className="lg:w-[1170px] lg:my-0 lg:mx-auto  lg:pr-[15px] lg:pl-[15px] lg:flex lg:justify-between pt-[40px] paltar ">
        <aside className="aside">
          <div>
            <h2 className="brend">QİYMƏT</h2>
            <div className="filter price mb-5">
              <input
                type="range"
                min="30"
                max="250"
                value={price}
                onInput={handlePriceInput}
                className="p-[10px] bg-[#f15803] w-[200px] brend "
              />
              <h1 className="text-end w-[200px] text-[#666] text-[14px]">
                {price}
              </h1>
            </div>
          </div>
          <hr className="w-[200px]" />
          <div className="mt-5 mb-5">
            <h2 className="mb-[30px] brend">BREND</h2>
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-[20px] hover:pl-[10px] transition-all brend ">
                <AiOutlineDoubleRight className="text-[#666]" />
                <button
                  onClick={() => filterByBrand("aiwa")}
                  className="text-[#666] text-[14px] hover:text-[#f15803]"
                >
                  AIWA(6)
                </button>
              </div>
            </div>
          </div>
          <hr className="w-[200px]" />
          <div className="flex flex-col items-start mt-5">
            <h2 className="mb-[30px] brend">RƏNG</h2>
            <div className="flex items-center mb-[20px] flex-col  brend ">
              <button
                onClick={() => filterByColor("White")}
                className="text-[#666] text-start"
              >
                White
              </button>
              <button
                onClick={() => filterByColor("Black")}
                className="text-[#666] text-start"
              >
                Black
              </button>
              <button
                onClick={() => filterByColor("Pink")}
                className="text-[#666] text-start"
              >
                Pink
              </button>
            </div>
          </div>
          <div className="flex items-start mt-5 brend ">
            <button onClick={showAllProducts}>BÜTÜN MƏHSULLAR</button>
          </div>
        </aside>
        <div className="lg:w-[80%] w-full flex flex-wrap justify-center gap-[10px]  paltar1 ">
          {filteredData.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              productName={item.name}
              price={item.price}
              oldprice={item.oldprice}
              quantity={item.quantity}
              imageurl={item.imageurl}
              onClick={() => {
                dispatch(
                  addToCart({
                    id: item.id,
                    productName: item.name,
                    price: item.price,
                    oldprice: item.oldprice,
                    imageUrl: item.imageurl,
                  })
                );
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Aiwa;
