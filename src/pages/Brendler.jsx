import React from "react";
import { Link } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";
import "../assets/styles/components/Accordion.scss";
import { useRef } from "react";
import Swiper3 from "../components/Swiper3";
const Brendler = () => {
  const aSectionRef = useRef(null);
  const bSectionRef = useRef(null);
  const cSectionRef = useRef(null);
  const dSectionRef = useRef(null);
  const eSectionRef = useRef(null);
  const fSectionRef = useRef(null);
  const gSectionRef = useRef(null);
  const hSectionRef = useRef(null);
  const iSectionRef = useRef(null);
  const jSectionRef = useRef(null);
  const kSectionRef = useRef(null);
  const lSectionRef = useRef(null);
  const mSectionRef = useRef(null);
  const nSectionRef = useRef(null);
  const oSectionRef = useRef(null);
  const pSectionRef = useRef(null);
  const rSectionRef = useRef(null);
  const sSectionRef = useRef(null);
  const tSectionRef = useRef(null);
  const uSectionRef = useRef(null);
  const vSectionRef = useRef(null);
  const wSectionRef = useRef(null);
  const xSectionRef = useRef(null);
  const ySectionRef = useRef(null);
  const zSectionRef = useRef(null);

  const handleClick = (letter) => {
    switch (letter) {
      case "a":
        aSectionRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "b":
        bSectionRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "c":
        cSectionRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "d":
        dSectionRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "e":
        eSectionRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "f":
        fSectionRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "g":
        gSectionRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "h":
        hSectionRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "i":
        iSectionRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "j":
        jSectionRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "k":
        kSectionRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "l":
        lSectionRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "m":
        mSectionRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "n":
        nSectionRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "o":
        oSectionRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "p":
        pSectionRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "r":
        rSectionRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "s":
        sSectionRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "t":
        tSectionRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "u":
        uSectionRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "v":
        vSectionRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "w":
        wSectionRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "x":
        xSectionRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "y":
        ySectionRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "z":
        zSectionRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="lg:w-[1170px] lg:my-0 lg:mx-auto  lg:pr-[15px] lg:pl-[15px] border-t w-full">
        <ul className="flex gap-4 mt-[20px] mr-[0px] mb-[20px] ml-[0px] text-sm">
          <li className="flex items-center gap-2">
            <Link to="/home" className="hover:text-[#f15803]">
              Ana səhifə
            </Link>
            <AiFillCaretRight />
          </li>
          <li>
            <Link to="/" className="text-[#f15803]">
              Brendlər
            </Link>
          </li>
        </ul>
        <div>
          <h1 className="text-[#6b6a81] text-[18px] mb-[22px]">BREDLƏR</h1>
          <p className="abc gap-3">
            <strong className="text-[15px]">Brend indeksi:</strong>
            &nbsp;&nbsp;&nbsp;
            <Link
              to="/"
              className="text-[#666] text-[14px] cursor-pointer hover:text-[#f15803]"
            >
              0-9
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link className="text-[#666] text-[14px] cursor-pointer hover:text-[#f15803]">
              <button onClick={() => handleClick("a")}>A</button>
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link className="text-[#666] text-[14px] cursor-pointer hover:text-[#f15803]">
              <button onClick={() => handleClick("b")}>B</button>
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link className="text-[#666] text-[14px] cursor-pointer hover:text-[#f15803]">
              <button onClick={() => handleClick("c")}>C</button>
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link className="text-[#666] text-[14px] cursor-pointer hover:text-[#f15803]">
              <button onClick={() => handleClick("d")}>D</button>
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link className="text-[#666] text-[14px] cursor-pointer hover:text-[#f15803]">
              <button onClick={() => handleClick("e")}>E</button>
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link className="text-[#666] text-[14px] cursor-pointer hover:text-[#f15803]">
              <button onClick={() => handleClick("f")}>F</button>
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link className="text-[#666] text-[14px] cursor-pointer hover:text-[#f15803]">
              <button onClick={() => handleClick("g")}>G</button>
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link className="text-[#666] text-[14px] cursor-pointer hover:text-[#f15803]">
              <button onClick={() => handleClick("h")}>H</button>
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link className="text-[#666] text-[14px] cursor-pointer hover:text-[#f15803]">
              <button onClick={() => handleClick("i")}>I</button>
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link className="text-[#666] text-[14px] cursor-pointer hover:text-[#f15803] ">
              <button onClick={() => handleClick("j")}>J</button>
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link className="text-[#666] text-[14px] cursor-pointer hover:text-[#f15803]">
              <button onClick={() => handleClick("k")}>K</button>
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link className="text-[#666] text-[14px] cursor-pointer hover:text-[#f15803]">
              <button onClick={() => handleClick("l")}>L</button>
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link className="text-[#666] text-[14px] cursor-pointer hover:text-[#f15803]">
              <button onClick={() => handleClick("m")}>M</button>
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link className="text-[#666] text-[14px] cursor-pointer hover:text-[#f15803]">
              <button onClick={() => handleClick("n")}>N</button>
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link className="text-[#666] text-[14px] cursor-pointer hover:text-[#f15803]">
              <button onClick={() => handleClick("o")}>O</button>
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link className="text-[#666] text-[14px] cursor-pointer hover:text-[#f15803]">
              <button onClick={() => handleClick("p")}>P</button>
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link className="text-[#666] text-[14px] cursor-pointer hover:text-[#f15803]">
              <button onClick={() => handleClick("r")}>R</button>
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link className="text-[#666] text-[14px] cursor-pointer hover:text-[#f15803]">
              <button onClick={() => handleClick("r")}>S</button>
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link className="text-[#666] text-[14px] cursor-pointer hover:text-[#f15803]">
              <button onClick={() => handleClick("r")}>T</button>
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link className="text-[#666] text-[14px] cursor-pointer hover:text-[#f15803]">
              <button onClick={() => handleClick("r")}>U</button>
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link className="text-[#666] text-[14px] cursor-pointer hover:text-[#f15803] ">
              <button onClick={() => handleClick("r")}>V</button>
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link className="text-[#666] text-[14px] cursor-pointer hover:text-[#f15803]">
              <button onClick={() => handleClick("r")}>W</button>
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link className="text-[#666] text-[14px] cursor-pointer hover:text-[#f15803]">
              <button onClick={() => handleClick("r")}>X</button>
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link className="text-[#666] text-[14px] cursor-pointer hover:text-[#f15803]">
              <button onClick={() => handleClick("r")}>Y</button>
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link className="text-[#666] text-[14px] cursor-pointer hover:text-[#f15803]">
              <button onClick={() => handleClick("r")}>Z</button>
            </Link>
          </p>
          <h2>0-9</h2>
          <p>2E</p>
        </div>
        <div className="brend">
          <h2 className="text-[#6b6a81] text-[18px] mb-[22px]">A</h2>
          <div
            ref={aSectionRef}
            className="flex lg:w-[1170px] lg:justify-between  "
          >
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Acer
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Addison
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                AEG
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/aiwa"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                AIWA
              </Link>
            </div>
          </div>
          <div className="flex lg:w-[1170px] lg:justify-between">
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Akyildiz
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Anker
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Apacer
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Apple
              </Link>
            </div>
          </div>

          <h2 className="mt-[10px] text-[#6b6a81] text-[18px] mb-[22px]">B</h2>
          <div
            ref={bSectionRef}
            className="flex lg:w-[1170px] lg:justify-between mt-[20px] "
          >
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Baby-G
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Babyliss
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Barista
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                BARRIER
              </Link>
            </div>
          </div>
          <div className="flex lg:w-[1170px] lg:justify-between">
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Baseus
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Belkin
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Belmio
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Berlinger Haus
              </Link>
            </div>
          </div>
          <div className="flex lg:w-[1170px] lg:justify-between">
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Beurer
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Borofone
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Bosch
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Bosenderfer
              </Link>
            </div>
          </div>

          <h2 className="mt-[10px] text-[#6b6a81] text-[18px] mb-[22px]">C</h2>
          <div
            ref={cSectionRef}
            className="flex lg:w-[1170px] lg:justify-between mt-[20px] "
          >
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Canon
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Carrier
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Casio
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Caspi Power
              </Link>
            </div>
          </div>

          <h2 className="mt-[10px] text-[#6b6a81] text-[18px] mb-[22px]">D</h2>
          <div
            ref={dSectionRef}
            className="flex lg:w-[1170px] lg:justify-between mt-[20px] "
          >
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Daewoo
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Defender
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Delonghi
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                DemirDöküm
              </Link>
            </div>
          </div>
          <div className="flex lg:w-[1170px] lg:justify-between">
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Dicota
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                DN
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                DYSON
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Apple
              </Link>
            </div>
          </div>

          <h2 className="mt-[10px] text-[#6b6a81] text-[18px] mb-[22px] ">E</h2>
          <div
            ref={eSectionRef}
            className="flex lg:w-[1170px] lg:justify-between mt-[20px] "
          >
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Ecovacs
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Electrolux
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Eleyus
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Energizer
              </Link>
            </div>
          </div>
          <div className="flex lg:w-[1170px] lg:justify-between">
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Epson
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Eterna One
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Everest
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Evid
              </Link>
            </div>
          </div>
          <h2 className="mt-[10px] text-[#6b6a81] text-[18px] mb-[22px]">F</h2>
          <div
            ref={fSectionRef}
            className="flex lg:w-[1170px] lg:justify-between mt-[20px] "
          >
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                F+
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Fakir
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                FLY
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Formul
              </Link>
            </div>
          </div>
          <h2 className="mt-[10px] text-[#6b6a81] text-[18px] mb-[22px]">G</h2>
          <div
            ref={gSectionRef}
            className="flex lg:w-[1170px] lg:justify-between mt-[20px] "
          >
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Gastro
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Genius
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Gigaset
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Gorenje
              </Link>
            </div>
          </div>
          <h2 className="mt-[10px] text-[#6b6a81] text-[18px] mb-[22px]">H</h2>
          <div
            ref={hSectionRef}
            className="flex lg:w-[1170px] lg:justify-between mt-[20px] "
          >
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Harman Kardon
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Hascevher
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Hiper
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Hisense
              </Link>
            </div>
          </div>
          <div className="flex lg:w-[1170px] lg:justify-between">
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Hisense
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Hitachi
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Honor
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                HP
              </Link>
            </div>
          </div>
          <div className="flex lg:w-[1170px] lg:justify-between">
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Huawei
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                HyperX
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                HyperX
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Hytech
              </Link>
            </div>
          </div>
          <h2 className="mt-[10px] text-[#6b6a81] text-[18px] mb-[22px]">I</h2>
          <div
            ref={iSectionRef}
            className="flex lg:w-[1170px] lg:justify-between mt-[20px] "
          >
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                ILLY
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Indesit
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                INFINIX
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                INTEL
              </Link>
            </div>
          </div>
          <h2 className="mt-[10px]  text-[#6b6a81] text-[18px] mb-[22px]">J</h2>
          <div
            ref={jSectionRef}
            className="flex lg:w-[1170px] lg:justify-between mt-[20px] "
          >
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                JBL
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Jinga
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                AEG
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/aiwa"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                AIWA
              </Link>
            </div>
          </div>
          <h2 className="mt-[10px] text-[#6b6a81] text-[18px] mb-[22px]">K</h2>
          <div
            ref={kSectionRef}
            className="flex lg:w-[1170px] lg:justify-between mt-[20px] "
          >
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Karcher
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Keenetic
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Kenwood
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Kimbo
              </Link>
            </div>
          </div>
          <h2 className="mt-[10px] text-[#6b6a81] text-[18px] mb-[22px]">L</h2>
          <div
            ref={lSectionRef}
            className="flex lg:w-[1170px] lg:justify-between mt-[20px] "
          >
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Lava
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Lavazza
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Lego
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Lenovo
              </Link>
            </div>
          </div>
          <div className="flex lg:w-[1170px] lg:justify-between mt-[20px] ">
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Lg
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Logitech
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Lsdffsego
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Lenosdfsfsfdvo
              </Link>
            </div>
          </div>
          <h2 className="mt-[10px] text-[#6b6a81] text-[18px] mb-[22px]">M</h2>
          <div
            ref={mSectionRef}
            className="flex lg:w-[1170px] lg:justify-between mt-[20px] "
          >
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Marshall
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Maxwell
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Mehtap
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                MELITTA
              </Link>
            </div>
          </div>
          <div className="flex lg:w-[1170px] lg:justify-between">
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Mikado
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Mikado
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                MITACA
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                MITACA ARABICA1 KG
              </Link>
            </div>
          </div>
          <div className="flex lg:w-[1170px] lg:justify-between">
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Mitsubishi
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Mobaks
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                MONiN
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Morelli
              </Link>
            </div>
          </div>

          <h2 className="mt-[10px] text-[#6b6a81] text-[18px] mb-[22px]">N</h2>
          <div
            ref={nSectionRef}
            className="flex lg:w-[1170px] lg:justify-between mt-[20px] "
          >
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Navien
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Nescafe
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Nespresso
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Nokia
              </Link>
            </div>
          </div>
          <h2 className="mt-[10px] text-[#6b6a81] text-[18px] mb-[22px]">O</h2>
          <div
            ref={oSectionRef}
            className="flex lg:w-[1170px] lg:justify-between mt-[20px] "
          >
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Oncu Evident
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Oral-B
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                AEG
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                AIWA
              </Link>
            </div>
          </div>

          <h2 className="mt-[10px] text-[#6b6a81] text-[18px] mb-[22px]">P</h2>
          <div
            ref={pSectionRef}
            className="flex lg:w-[1170px] lg:justify-between mt-[20px] "
          >
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Panasonic
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Philps
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                PHOENIX
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Playstation
              </Link>
            </div>
          </div>
          <div className="flex lg:w-[1170px] lg:justify-between">
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Pocketbook
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Polaris
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Porodo
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Apple
              </Link>
            </div>
          </div>
          <h2 className="mt-[10px] text-[#6b6a81] text-[18px] mb-[22px]">R</h2>
          <div
            ref={rSectionRef}
            className="flex lg:w-[1170px] lg:justify-between mt-[20px] "
          >
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Rampage
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Razor
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Realme
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Redmond
              </Link>
            </div>
          </div>
          <div className="flex lg:w-[1170px] lg:justify-between">
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Remax
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Remington
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Rexel
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Romoss Ares
              </Link>
            </div>
          </div>
          <div className="flex lg:w-[1170px] lg:justify-between">
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Rondell
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Russel Hobbs
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Apacer
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Apple
              </Link>
            </div>
          </div>

          <h2 className="mt-[10px] text-[#6b6a81] text-[18px] mb-[22px]">S</h2>
          <div
            ref={sSectionRef}
            className="flex lg:w-[1170px] lg:justify-between mt-[20px] "
          >
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                S-link
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Samsung
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                SanDisk
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Scarlett
              </Link>
            </div>
          </div>
          <div className="flex lg:w-[1170px] lg:justify-between">
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                SEAGATE
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Segafredo
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Sharp
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Shivaki
              </Link>
            </div>
          </div>
          <div className="flex lg:w-[1170px] lg:justify-between">
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                SHOSMAN
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Silicon Power
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Simfer
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Snopy
              </Link>
            </div>
          </div>
          <div className="flex lg:w-[1170px] lg:justify-between">
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                SNR-Sonosour
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Somita
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                SonicGear
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Sony
              </Link>
            </div>
          </div>
          <h2 className="mt-[10px] text-[#6b6a81] text-[18px] mb-[22px]">T</h2>
          <div
            ref={tSectionRef}
            className="flex lg:w-[1170px] lg:justify-between mt-[20px] "
          >
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                TCL
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Tefal
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Terminator
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Tognana
              </Link>
            </div>
          </div>
          <div className="flex lg:w-[1170px] lg:justify-between">
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Toshiba
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                TP LINK
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Trek
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Trust
              </Link>
            </div>
          </div>
          <h2 className="mt-[10px] text-[#6b6a81] text-[18px] mb-[22px]">U</h2>
          <div
            ref={uSectionRef}
            className="flex lg:w-[1170px] lg:justify-between mt-[20px] "
          >
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Ulefone
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Usams
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                AEG
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
              to="/aiwa"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                AIWA
              </Link>
            </div>
          </div>

          <h2 className="mt-[10px] text-[#6b6a81] text-[18px] mb-[22px]">V</h2>
          <div
            ref={vSectionRef}
            className="flex lg:w-[1170px] lg:justify-between mt-[20px] "
          >
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Vanguard
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Vanward
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Vanward
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Varta
              </Link>
            </div>
          </div>
          <div className="flex lg:w-[1170px] lg:justify-between">
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Veeline
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Vestel
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                VIKO
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Vitek
              </Link>
            </div>
          </div>
          <h2 className="mt-[10px] text-[#6b6a81] text-[18px] mb-[22px]">W</h2>
          <div
            ref={wSectionRef}
            className="flex lg:w-[1170px] lg:justify-between mt-[20px] "
          >
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                WD
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Wonlex
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                AEG
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                AIWA
              </Link>
            </div>
          </div>
          <h2 className="mt-[10px] text-[#6b6a81] text-[18px] mb-[22px]">X</h2>
          <div
            ref={xSectionRef}
            className="flex lg:w-[1170px] lg:justify-between mt-[20px] "
          >
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Xiaomi
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Addison
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                AEG
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                AIWA
              </Link>
            </div>
          </div>
          <h2 className="mt-[10px] text-[#6b6a81] text-[18px] mb-[22px]">Y</h2>
          <div
            ref={ySectionRef}
            className="flex lg:w-[1170px] lg:justify-between mt-[20px] "
          >
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Yamaha
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Yandex
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Yupiter
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                AIWA
              </Link>
            </div>
          </div>
          <h2 className="mt-[10px] text-[#6b6a81] text-[18px] mb-[22px]">Z</h2>
          <div
            ref={zSectionRef}
            className="flex lg:w-[1170px] lg:justify-between mt-[20px] "
          >
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Zanussi
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                Zelmer
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                AEG
              </Link>
            </div>
            <div className="w-[25%]">
              <Link
                to="/"
                className="text-[14px] text-[#666] hover:text-[#f15803]"
              >
                AIWA
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" swiper lg:w-[1170px] my-0 mx-auto  mt-[30px] pr-[15px] pl-[15px] flex lg:justify-between  w-full  justify-center items-center ">
          <Swiper3 />  
        </div>
    </>
  );
};

export default Brendler;
