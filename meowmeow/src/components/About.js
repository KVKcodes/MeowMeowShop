import React from 'react'
import '../css/AboutCSS.css'
import sid from '../assets/Images/Team/sid.jpeg'
import rithwik from '../assets/Images/Team/rithwik.jpeg'
import srikar from '../assets/Images/Team/srikar.jpeg'

export default function About() {
  return (
    <div>
        <div className="intro">
            <p id="aboutUS">About us</p>
            <div className='underline'></div> 
            <div className="flexerAbout">
            <figure className='teamFigure'>
              <img src={sid} alt="Coolest dude ever amazing, terryfying, assstunning and the hottest guy ever"  className='teamImg'/>
              <figcaption className='teamName'>KVK Siddartha</figcaption>
              <figcaption className='teamDetails'>CSE Honors II year</figcaption>
              <figcaption className='teamDetails'><a href="https://www.linkedin.com/in/kvk-siddartha-980595272/">Connect with Siddartha?</a></figcaption>
            </figure>
            <figure className='teamFigure'>
            <img src={rithwik} alt="sids boyfrind" className='teamImg'/>
              <figcaption className='teamName'>S Rithwik</figcaption>
              <figcaption className='teamDetails'>CSE II year</figcaption>
              <figcaption className='teamDetails'><a href="https://www.linkedin.com/in/rithwik-404-iguana/">Connect with Rithwik?</a></figcaption>
            </figure>
            <figure className='teamFigure'>
            <img src={srikar} alt="this guy did a entire new project in python" className='teamImg'/>
              <figcaption className='teamName'>CL Narayana</figcaption>
              <figcaption className='teamDetails'>AIDS II year</figcaption>
              <figcaption className='teamDetails'><a href="https://www.linkedin.com/in/cl-narayanan-a38598249/">Connect with Narayana?</a></figcaption>
            </figure>
            </div>
        </div>
    </div>
  )
}
