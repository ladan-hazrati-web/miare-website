import React from "react";
import card1 from "../../assets/img/card1.webp";
import { IoIosArrowBack } from "react-icons/io";
function CardRight() {
  return (
    <div className="w-full  bg-[#8b03ff] rounded-[25px] flex flex-col items-center justify-center md:flex md:flex-row md:flex-wrap md:h-[300px]  h-[450px] m-5">
      <div className="md:w-[50%] ">
        <h2 className="text-white font-bold text-center md:text-right  text-2xl">سفیر موتوری ...</h2>
        <button className="flex w-[300px] md:w-[150px] items-center justify-between bg-white p-2 rounded-[50px] my-8 mx-5 md:mx-0 ">
          <a
            href=""
            className="w-full felx justify-centerfont-bold"
          >
            سفیر هستم
          </a>
          <IoIosArrowBack />
        </button>
      </div>
      <figure className="md:w-[45%]">
        <img src={card1} alt="" />
      </figure>
    </div>
  );
}

export default CardRight;
