import React from 'react'
import '../css/ContactusCSS.css'
import phone from '../assets/Images/Random/phone.png'

export default function Contactus() {
  return (
    <div className='contactUSALL'>
        <div className="contactDetails">
            <p id="aboutUS">Contact us</p>
            <div className='underline-contactUS'></div> 
            <p id="detailsFR">For any queries or complaints,</p>
            <p id="detailsFR">please hesitate to contact us</p>
            <p style={{"font-size": "3rem"}}>+91 9440107085</p>
        </div>
        <figure id='phoneFigure'>
          <img src={phone} alt="phone logo"/>
        </figure>
    </div>
  )
}
