import React from 'react'
import socials from '../assets/socials.svg'
import jointhecommunity from '../assets/jointhecommunity.svg'
import lgtwitter from '../assets/lgtwitter.svg'
import lgtelegram from '../assets/lgtelegram.svg'

function Socials() {
  return (
    <div className='p-4 flex flex-col items-center justify-center mt-10'>
        <img src={socials} alt="" />
        <img src={jointhecommunity} alt="" />

        <div className="socials flex mt-5">
        <img src={lgtelegram} alt="" className='mx-2' />
        <img src={lgtwitter} alt="" className='mx-2' />

        </div>
    </div>
  )
}

export default Socials