import React from "react";
import CardRight from "./CardRight";
import CardLeft from "./CardLeft";

function Cards() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full 2xl:container flex flex-wrap md:flex-nowrap justify-center items-center bg-[#fbfbfd]  xl:px-[100px] px-8 sm:px-16 md:px-8 my-20 md:my-0">
        <CardRight />
        <CardLeft />
      </div>
    </div>
  );
}

export default Cards;
