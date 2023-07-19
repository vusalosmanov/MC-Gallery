import React from "react";
import { Link } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";
import { useState } from 'react';

const Like = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setAlert("Lütfen e-posta ve şifre alanlarını doldurun!");
    } else {
      console.log("E-posta:", email);
      console.log("Şifre:", password);
      setAlert("");
    }
  };
  return (
    <div className="w-[1170px] my-0 mx-auto  pr-[15px] pl-[15px] border-t">
      <ul className="flex gap-4 mt-[20px] mr-[0px] mb-[20px] ml-[0px] text-sm">
        <li className="flex items-center gap-2">
          <Link to="/home" className="hover:text-[#f15803] text-[#7d7d7d]">
            Ana səhifə
          </Link>
          <AiFillCaretRight />
        </li>
        <li className="flex items-center gap-2">
          <Link to="/" className="hover:text-[#f15803] text-[#7d7d7d]">
            Hesab
          </Link>
          <AiFillCaretRight />
        </li>
        <li>
          <Link to="/" className="text-[#f15803]">
            Giriş
          </Link>
        </li>
      </ul>
      <div className="flex gap-5">
        <div className="w-[50%]">
          <div className="border-[1px] p-[19px]">
            <h2 className="text-[#6b6a81] text-[18px] mb-[22px] uppercase">
              Yeni müştəri
            </h2>
            <p className="text-[15px] mb-[15px]">
              <strong>Hesab qeydiyyatı</strong>
            </p>
            <p className="text-[15px] text-[#6d6d6d]">
              Hesab yaradaraq saytın tam funksionallığından istifadə edə
              bilərsiniz.
            </p>
            <Link>
              {" "}
              <button
                type="submit"
                className="border-[1px] p-[6px] bg-[#f15803] text-white mt-[16px]"
              >
                DAVAM ET
              </button>
            </Link>
          </div>
        </div>
        <div className="w-[50%]">
          <div className="border-[1px] p-[19px]">
            <h2 className="text-[#6b6a81] text-[18px] mb-[22px] uppercase">
              Daimi müştəri
            </h2>
            <p className="text-[15px] mb-[15px]">
              <strong>Mən daimi müştəriyəm</strong>
            </p>
            {alert && <p>{alert}</p>}
            <form onSubmit={handleSubmit}>
              <label>
                E-mail ünvanı
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-[1px] w-[83%] h-[40px] focus:outline-none pl-[10px]"
                  placeholder="E-mail ünvanı"
                />
              </label>
              <br />
              <div className="mt-[15px] mb-[5px]">
                Şifrə
              </div>
              <label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-[1px] w-[83%] h-[40px] focus:outline-none pl-[10px]"
                  placeholder="Şifrə"
                />
              </label>
              <p className="text-[#666] text-[14px] cursor-pointer">Şifrənizi unutmusunuz?</p>
              <br />
              <Link>
              {" "}
              <button
                type="submit"
                className="border-[1px] p-[6px] bg-[#f15803] text-white mt-[16px]"
              >
                GIRIS
              </button>
            </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Like;
