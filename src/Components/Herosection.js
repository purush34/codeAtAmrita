import React from 'react'
import './Herosection.css'
import codeat from '../svg/codeat.svg'
import amrita from '../svg/Amrita.svg'
import openB from '../svg/openB.svg'
import closeB from '../svg/closeB.svg'
import slash from '../svg/slash.svg'

function Herosection() {
  return (
    <div className='hero-container'>
        <div className='svg-cont'>
        <img src={openB} alt='codeat' className='openB' ></img>
        <img src={codeat} alt='codeat' className='codeat'  />
        <img src={slash} alt='codeat' className='slash' ></img>
        <img src={amrita} alt='codeat' className='amrita' />
        <img src={closeB} alt='codeat' className='closeB'></img>
        </div>
    </div>
  )
}

export default Herosection