import React from 'react'
import herotv from '../assets/herotv.png'
import buyred from '../assets/buyred.svg'
import tokenaddressorgin from '../assets/tokenaddressorgin.svg'
import tokensupply from '../assets/tokensupply.svg'

function Tokenomics() {
    return (
        <div className='flex flex-col justify-self-center items-center p-4 mt-10'>
            <div className="two flex flex-col lg:flex-row">

                <div className="left flex flex-col items-center justify-center">
                <img src={herotv} alt="" />
                <img src={buyred} alt="" className='mt-5'/>
                </div>


                <div className="right flex flex-col items-center justify-center">
                    <img src={tokenaddressorgin} alt=""  className='mt-5'/>
                    <img src={tokensupply} alt=""  className='mt-5'/>
                </div>

            </div>
        </div>
    )
}

export default Tokenomics