import React from 'react'
import herotv from '../assets/herotv.png'
import dexscreener from '../assets/dexscreener.svg'
import buylghdtv from '../assets/buylghdtv.svg'
import herotext from '../assets/herotext.svg'
import lghdtvroll from '../assets/lghdtvroll.svg'
import lifesgay from '../assets/lifesgay.svg'


function Hero() {
    return (
        <div className='Hero mt-5 p-4 relative flex flex-col justify-center items-center'>

            <div className="three flex flex-col lg:flex-row justify-center items-center">
                <img src={dexscreener} alt="" />
                <img src={herotv} alt="" />
                <img src={buylghdtv} alt="" />

            </div>

            <div className="hero flex flex-col items-center justify-center my-5 mb-20s relative">
                <img src={lifesgay} alt="" className='absolute lg:-top-28 -top-5' />
                <img src={herotext} alt="" className='mt-6 lg:mt-0' />
            </div> 
                <img src={lghdtvroll} alt="" className='w-full absolute lg:-bottom-10 bottom-0' />
               

        </div>
    )
}

export default Hero