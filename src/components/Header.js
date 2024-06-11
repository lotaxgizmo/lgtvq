import React from 'react'
import HOME from '../assets/HOME.svg'
import ABOUT from '../assets/ABOUT.svg'
import TOKENOMICS from '../assets/TOKENOMICS.svg'
import TELEGRAM from '../assets/TELEGRAM.svg'

function Header() {
  return (
    <div className='flex flex-row justify-around lg:mx-32 mt-10'>
        <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={HOME} alt="" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={ABOUT} alt="" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={TOKENOMICS} alt="" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={TELEGRAM} alt="" />
        </a>
        
    </div>
  )
}

export default Header