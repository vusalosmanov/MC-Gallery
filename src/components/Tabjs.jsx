import React from "react";
import { addToCart, deleteQty, addQty , addToLike  } from "../redux/actions/card.action";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "../assets/styles/components/Accordion.scss";
import axios from "axios";
import ProductCard from "./ProductCart";
import { tabOptions } from "./Data";

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
    <div className="flex justify-center lg:w-[1170px] my-0 mx-auto  text-gray-400 ">
      <div className="w-[1170px] min-h-screen">
        {/* ***Tabs Header***  */}
        <div className="tabjs lg:w-[1170px] my-0  mx-auto pr-[15px] pl-[15px] flex justify-around mt-8 px-20 gap-5 p-1 border border-gray-300">
          {tabOptions?.length > 0 &&
            tabOptions.map((tab) => (
              // ***Tabs Option***
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

        {/* ***Tab Body*** */}
        <div className="my-4 p-6">
          {/* **** Most viewed  TAB ***** */}
          {activeTab === "Ən Çox Baxılanlar" && (
            <div className="lg:w-[1170px]  lg:flex lg:flex-wrap lg:gap-x-7 lg:gap-y-7 my-0 mx-auto  pr-[15px] pl-[15px] w-full flex flex-wrap justify-center">
                {products?.length > 0 &&
                  products
                    .filter((item) => item.oldtype === "baxilan")
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
                          onLike={() => {
                            dispatch(
                              addToLike({
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
          {/* ======== The most liked ones TAB ======== */}
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
          {/* ======== Those on discount TAB ======== */}
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
          {/* ======== New products TAB ======== */}
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
                      onLike={() => {
                        dispatch(
                          addToLike({
                            id: product.id,
                            productName: product.name,
                            price: product.price,
                            brend: product.brend,
                            oldprice: product.oldprice,
                            imageUrl: product.imageurl,
                          })
                        )
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
