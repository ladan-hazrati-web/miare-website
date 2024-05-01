import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import '../../index.css'
import logo from "../../assets/img/miare-logo.svg"
function HeaderMobile() {
  return (
    <div className='w-[100%] flex items-center justify-between md:hidden px-8 sm:px-16 h-[60px] py-[10px] '>
        <button><GiHamburgerMenu size='25px' color='rgb(139, 3, 255)' /></button>
        <figure>
            <img src={logo} alt="" />
        </figure>
        <a href="" className='p-[10px] bg-[#ffd658] rounded-[50%]'><FaPhoneAlt size='15px' /></a>
       
    </div>
  )
}

export default HeaderMobile