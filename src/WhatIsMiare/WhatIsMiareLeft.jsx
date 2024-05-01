import React from 'react'
import video from "../assets/movie/what-is-miare.mp4"
import cover from "../assets/img/coverf-1.webp"
function WhatIsMiareLeft() {
  return (
    <div className='w-full md:w-[50%] my-16 flex justify-center '>
         <video src={video} controls className='w-[80%] rounded-[30px] ' poster={cover}></video>
    </div>
  )
}

export default WhatIsMiareLeft