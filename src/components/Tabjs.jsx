import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, deleteQty, addQty } from "../redux/actions/card.action";
import ProductCard from "./ProductCart";
import { Swiper, SwiperSlide } from "swiper/react";
import { tabOptions } from "./Data";
import { useEffect, useState } from "react";
import axios from "axios";
import "../assets/styles/components/Accordion.scss";
import "swiper/css";

export default function Home() {
  const [activeTab, setActiveTab] = useState(tabOptions[0]);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex justify-center text-gray-400 ">
      <div className="max-w-6xl w-full min-h-screen     ">
        {/* ===== Tabs Header ======  */}
        <div className="tabjs flex justify-around mt-8 px-20 gap-5 p-1 border border-gray-300">
          {tabOptions?.length > 0 &&
            tabOptions.map((tab) => (
              // ===== Tabs Option ======
              <div
                className={
                  "py-1  lg:w-full  text-center cursor-pointer hover:bg-[#f15803] hover:text-white transition-all duration-300 tabjss " +
                  (activeTab === tab && "text-black")
                }
                onClick={() => setActiveTab(tab)}
              >
                <p className="font-medium text-lg">{tab}</p>
              </div>
            ))}
        </div>

        {/* ====== Tab Body ====== */}
        <div className="my-4 p-6">
          {/* ======== discount TAB ======== */}
          {activeTab === "Ən Çox Baxılanlar" && (
            <div className="lg:w-[1170px] lg:flex lg:flex-wrap lg:gap-x-4 lg:gap-y-6 my-0 mx-auto  pr-[15px] pl-[15px] w-full flex flex-wrap justify-center">
              {/* <Swiper
              slidesPerRown={2}
              slidesPerView={5}
              > */}
                {products?.length > 0 &&
                  products
                    .filter((item) => item.oldtype === "baxilan")
                    .map((product) => (
                      // <SwiperSlide>
                        <ProductCard
                          id={product.id}
                          productName={product.name}
                          price={product.price}
                          oldprice={product.oldprice}
                          imageurl={product.imageurl}
                          quantity={product.quantity}
                          key={product.id}
                          onDeleteQty={() => {
                            dispatch(deleteQty(product.id));
                          }}
                          onAddQty={() => {
                            dispatch(addQty(product.id));
                          }}
                          onClick={() => {
                            dispatch(
                              addToCart({
                                id: product.id,
                                productName: product.name,
                                price: product.price,
                                brend: product.brend,
                                oldprice: product.oldprice,
                                imageUrl: product.imageurl,
                              })
                            );
                          }}
                        />
                      // </SwiperSlide>
                    ))}
              {/* </Swiper> */}
            </div>
          )}
          {/* ======== newproduct TAB ======== */}
          {activeTab === "Ən Çox Bəyənilənlər" && (
            <div className="lg:w-[1170px] lg:flex lg:flex-wrap lg:gap-x-4 lg:gap-y-6 my-0 mx-auto  pr-[15px] pl-[15px] w-full flex flex-wrap justify-center">
              {products?.length > 0 &&
                products
                  .filter((item) => item.oldtype === "like")
                  .map((product) => (
                    <ProductCard
                      id={product.id}
                      productName={product.name}
                      price={product.price}
                      oldprice={product.oldprice}
                      imageurl={product.imageurl}
                      quantity={product.quantity}
                      key={product.id}
                      onDeleteQty={() => {
                        dispatch(deleteQty(product.id));
                      }}
                      onAddQty={() => {
                        dispatch(addQty(product.id));
                      }}
                      onClick={() => {
                        dispatch(
                          addToCart({
                            id: product.id,
                            productName: product.name,
                            price: product.price,
                            brend: product.brend,
                            oldprice: product.oldprice,
                            imageUrl: product.imageurl,
                          })
                        );
                      }}
                    />
                  ))}
            </div>
          )}
          {/* ======== IT DEPARTMENT TAB ======== */}
          {activeTab === "Endirimdə Olanlar" && (
            <div className="lg:w-[1170px] lg:flex lg:flex-wrap lg:gap-x-4 lg:gap-y-6 my-0 mx-auto pr-[15px] pl-[15px] w-full flex flex-wrap justify-center">
              {products?.length > 0 &&
                products
                  .filter((item) => item.oldtype === "endirim")
                  .map((product) => (
                    <ProductCard
                      id={product.id}
                      productName={product.name}
                      price={product.price}
                      oldprice={product.oldprice}
                      imageurl={product.imageurl}
                      quantity={product.quantity}
                      key={product.id}
                      onDeleteQty={() => {
                        dispatch(deleteQty(product.id));
                      }}
                      onAddQty={() => {
                        dispatch(addQty(product.id));
                      }}
                      onClick={() => {
                        dispatch(
                          addToCart({
                            id: product.id,
                            productName: product.name,
                            price: product.price,
                            brend: product.brend,
                            oldprice: product.oldprice,
                            imageUrl: product.imageurl,
                          })
                        );
                      }}
                    />
                  ))}
            </div>
          )}
          {/* ======== SECURITY TAB ======== */}
          {activeTab === "Yeni Məhsullar" && (
            <div className="lg:w-[1170px] lg:flex lg:flex-wrap lg:gap-x-4 lg:gap-y-6 my-0 mx-auto  pr-[15px] pl-[15px] w-full flex flex-wrap justify-center">
              {products?.length > 0 &&
                products
                  .filter((item) => item.oldtype === "yeni")
                  .map((product) => (
                    <ProductCard
                      id={product.id}
                      productName={product.name}
                      price={product.price}
                      oldprice={product.oldprice}
                      imageurl={product.imageurl}
                      quantity={product.quantity}
                      key={product.id}
                      onDeleteQty={() => {
                        dispatch(deleteQty(product.id));
                      }}
                      onAddQty={() => {
                        dispatch(addQty(product.id));
                      }}
                      onClick={() => {
                        dispatch(
                          addToCart({
                            id: product.id,
                            productName: product.name,
                            price: product.price,
                            brend: product.brend,
                            oldprice: product.oldprice,
                            imageUrl: product.imageurl,
                          })
                        );
                      }}
                    />
                  ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
