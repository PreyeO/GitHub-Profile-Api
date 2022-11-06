import React from 'react'
import Error from "../Assets/error.PNG"
import CloseIcon from '../Icons/CloseIcon'
import Icon from '../Icons/Icon'
import "../Styles/RepoManual.css"
import GitHubIcon from '../Icons/GitHubIcon'


const ScareCrow = () => {

  

  return (
    <section className='rep-content'>
      <CloseIcon />
      <div className='rep-container'>
      <h1>404-SCARE-CROW</h1>
      <div className='rep-image'>
        <img src={Error} alt="" />
      </div>
      <div className='rep-card'>
      <h4>README.md</h4>
      <div className='rep-card'>
      <a href= " https://404errorspage.netlify.app/404-sacre-crow" target="_blank"  rel="noreferrer"><Icon /></a>
        <a href ="https://github.com/PreyeO/Basketball-Scoreboard "target= "_blank"  rel="noreferrer"><GitHubIcon /></a>
       <p>This is an error page used in a website to inform the user that the site visiting does not exist. This is my very first built project. HELLO WORLD!</p>
       </div>

      <div className='rep-tools'>
        <h5>HTML</h5>
        <h5>CSS</h5>
      </div>
      </div>
      </div>
     
        
    </section>
  )
}

export default ScareCrow
