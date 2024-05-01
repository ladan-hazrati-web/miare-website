import React from 'react'
import WhatIsMiareRight from './WhatIsMiareRight'
import WhatIsMiareLeft from './WhatIsMiareLeft'

function WhatIsMiare() {
  return (
    <div className='w-full flex justify-center'>
        <div className='w-full 2xl:container flex flex-wrap justify-between items-center bg-[#fbfbfd]  xl:px-[100px]'> 
        <WhatIsMiareRight />
        <WhatIsMiareLeft />
        </div>
    </div>
  )
}

export default WhatIsMiare