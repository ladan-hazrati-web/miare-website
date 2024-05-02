import React from "react";
import vector from "../assets/img/Vector-21.svg"
function WhatIsMiareRight() {
  return (
    <div className="w-full md:w-[50%] px-8 sm:px-16 md:mt-[80px]">
      <h2 className="text-center md:text-right text-3xl font-bold">
        <span className="text-[#8b03ff]">میاره</span> چیست؟
      </h2>
      <p className="my-[40px] text-justify">
        میاره، سرویس ارسال سریع توسط ناوگان پیک موتوری به انواع مشاغل، مثل
        رستوران، سوپرمارکت، سوپرمیوه، نانوایی، داروخانه و هرکسب‌وکاری است که
        محصولات تندمصرف خود را به صورت روزانه برای مشتریان ارسال می‌کند.
      </p>
      <figure className="hidden lg:flex ms-[100px] mt-[20px]">
        <img src={vector} alt="" className="h-[150px]"/>
      </figure>
    </div>
  );
}

export default WhatIsMiareRight;
