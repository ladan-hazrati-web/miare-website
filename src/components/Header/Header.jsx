import React from 'react'
import "../../index.css"
import HeaderMobile from './HeaderMobile';
import HeaderDesktop from './HeaderDesktop';
function Header() {
  return (
        <header className='w-[100%]'>
            <HeaderMobile />
            <HeaderDesktop />
        </header>
  )
}

export default Header