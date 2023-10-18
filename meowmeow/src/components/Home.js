import React from 'react'
import '../css/HomeCSS.css'
import gucci from '../assets/Images/Home/jojoxgucci.jpg'
import alia from '../assets/Images/Home/gucci-alia.webp'
import pewds from '../assets/Images/Home/pewdsMerch.jpeg'

export default function Home() {
  return (
    <div>
        <div className="intro">
            <p id="WelcomeText">Welcome to</p>
            <p id="meowtitle">Meow meow store</p>
                <div style={{position: "relative", flex: "0 0 45%", transform: "translate3d(35%, 10%, 0)", width: "50% ", height: "auto"}}><img class="img-fluid" data-bss-parallax="" data-bss-parallax-speed="0.8" src={pewds}/></div>
                <div style={{position: "relative",flex: "0 0 45%",transform: "translate3d(170%, -50%, 0)", width: "30%", height: "auto"}}><img class="img-fluid" data-bss-parallax="" data-bss-parallax-speed="0.4" src={alia}/></div>
                <div style={{position: "relative",flex: "0 0 60%",transform: "translate3d(-20%, -60%, 0)"}}><img class="img-fluid" data-bss-parallax="" data-bss-parallax-speed="0.25" src={gucci}/></div>
        </div>
    </div>
  )
}
