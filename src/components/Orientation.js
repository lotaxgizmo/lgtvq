import React from 'react'
import orientations from '../assets/orientations.svg'
import buylghdtv2 from '../assets/buylghdtv2.svg'
import texts1 from '../assets/texts1.svg'

function Orientation() {
  return (
    <div className='flex flex-col mt-10 p-4  justify-center items-center lg:mt-28'>
        <img src={orientations} alt="" className='mb-5 lg:mb-10' />
        <img src={texts1} alt="" className='mb-5' />
        <img src={buylghdtv2} alt="" />
        
    </div>
  )
}

export default Orientation