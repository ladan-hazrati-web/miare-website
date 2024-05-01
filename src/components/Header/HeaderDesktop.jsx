import React from "react";
import logo from "../../assets/img/miare-logo.svg";
import { FaPhoneAlt } from "react-icons/fa";
function HeaderDesktop() {
  return (
    <div className="hidden md:flex md:w-[100%] md:justify-between py-[20px] md:items-center px-[20px] lg:px-[50px] ">
      <figure>
        <img src={logo} alt="" />
      </figure>
      <ul className="flex w-[100%] gap-5 xl:gap-10 font-bold items-center md:text-[13px] ms-[50px] lg:text-[14px] xl:text-[15px] lg:w-[80%] justify-start lg:ms-[65px]">
        <li>
          <a href="">میاره</a>
        </li>
        <li>
          <a href="">سفیر موتوری</a>
        </li>
        <li>
          <a href="">کسب و کار</a>
        </li>
        <li>
          <a href="">مناطق تحت پوشش</a>
        </li>
        <li>
          <a href="">مراکز ثبت نام حضوری</a>
        </li>
        <li>
          <a href="">اپلیکیشن سفیران</a>
        </li>
        <li>
          <a href="">بلاگ</a>
        </li>
      </ul>
      <a href="" className="hidden lg:flex items-center w-[140px] justify-evenly bg-[#ffd658] px-[6px] py-[5px] font-bold rounded-[50px]" >
      <p className="text-[15px]">تماس با میاره</p>
      <FaPhoneAlt size='15px' />
      </a>
    </div>

  );
}

export default HeaderDesktop;
