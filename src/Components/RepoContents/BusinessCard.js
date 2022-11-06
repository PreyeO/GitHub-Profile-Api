import React from 'react'
import Business from "../Assets/business.PNG"
import CloseIcon from '../Icons/CloseIcon'
import Icon from '../Icons/Icon'
import "../Styles/RepoManual.css"
import GitHubIcon from '../Icons/GitHubIcon'

const BusinessCard = () => {

  

  return (
    <section className='rep-content'>
      <CloseIcon /> 
      <div className='rep-container'>
      <h1>MY-BUSINESS-CARD</h1>
      <div className='rep-image'>
        <img src={Business} alt="" />
      </div>
      <div className='repo-card'>
      <h4>README.md</h4>
      <div className='rep-card'>
      <a href= "https://my-business-card-kappa.vercel.app" target="_blank"  rel="noreferrer"><Icon /></a>
        <a href ="https://github.com/PreyeO/my-business-card" target= "_blank"  rel="noreferrer"><GitHubIcon /></a>
       <p>This is a soft copy of my business card. It has summary of my skills and contacts for furthet enquiry.</p>
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

export default BusinessCard
