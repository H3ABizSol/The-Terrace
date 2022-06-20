import React from 'react'
// import logo from '../../image/logo.png'
import Sanitization from '../../image/Sanitization.png'
import Vaccinated from '../../image/Vaccinated.png'
import Masks from '../../image/Masks.png'
import Chef from '../../image/Chef.png'

const Welcome = () => {

  return (
    <div className='welcome' >
        <div className="title">WELCOME!</div>
        <div className="subtitle">We are following all the safety measures related to Covid 19</div>
        <div className="details">
            <ul>
                <div className="inner">
                    <img src={Masks} alt="Wearing Face Masks" />
                <li>
                    Wearing Face Masks
                </li>
                </div>
                <div className="inner">
                    <img src={Vaccinated} alt="Fully Vaccinates Staff" />
                <li>
                Fully Vaccinates Staff
                </li>
                </div>
                <div className="inner">
                    <img src={Sanitization} alt="Daily Sanitization" />
                <li>
                Daily Sanitization
                </li>
                </div>
            </ul>
        </div>
        <div className="ready">
            <img src={Chef} alt="chef" />
            Ready to serve you, safely.
        </div>
    </div>
  )

}

export default Welcome