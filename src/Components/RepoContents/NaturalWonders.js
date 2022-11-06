import React from 'react'
import Earths from "../Assets/earths.PNG"
import "../Styles/RepoManual.css"
import CloseIcon from '../Icons/CloseIcon'
import Icon from '../Icons/Icon'
import GitHubIcon from '../Icons/GitHubIcon'

const NaturalWonders = () => {

  

  return (
    <section className='rep-content'>
      <CloseIcon />
      <div className='rep-container'>
      <h1>EARTH'S-NATURAL-WONDERS</h1>
      <div className='rep-image'>
        <img src={Earths} alt="" />
      </div>
      <div className='rep-card'>
      <h4>README.md</h4>
      <div className='rep-card'>
      <a href= " earth https://earth-natural-wonders.vercel.app" target="_blank"  rel="noreferrer"><Icon /></a>
        <a href ="https://github.com/PreyeO/earth-natural-wonders  "target= "_blank"  rel="noreferrer"><GitHubIcon /></a>
       <p>This a website showing the seven natural wonders on earth. I enjoyed building this because i would love to visit all of them.</p>
       </div>

      <div className='rep-tools'>
        <h5>ReactJS</h5>
        <h5>CSS</h5>
      </div>
      </div>
      </div>
    
        
    </section>
  )
}

export default NaturalWonders
