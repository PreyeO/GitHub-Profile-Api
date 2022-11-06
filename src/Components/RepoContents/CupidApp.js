import React from 'react'
import Cupid from "../Assets/dating.PNG"
import Icon from '../Icons/Icon';
import CloseIcon from "../Icons/CloseIcon"
import "../Styles/RepoManual.css"
import GitHubIcon from '../Icons/GitHubIcon';


const CupidApp = () => {

  

  return (
    <section className='rep-content'>
        <CloseIcon />
      <div className='rep-container'>
      <h1>CUPID-DATING-APP</h1>
      <div className='rep-image'>
        <img src={Cupid} alt="" />
      </div>
      <div className='rep-card'>
      <h4>README.md</h4>
    
      <div className='rep-card'>
      <a href= "https://cupid-dating-app-pre.vercel.app" target="_blank"  rel="noreferrer"><Icon /></a>
        <a href ="https://github.com/PreyeO/CUPID-DATING-APP" target= "_blank"  rel="noreferrer"><GitHubIcon /></a>
       <p>This is a dating site built to showcase: Nested routes, 404 page, Error boundary, pagination, disabled states and loading states. I really learnt alot whist working on this.</p>
       </div>
     
      <div className='rep-tools'>
        <h5>ReactJS</h5>
        <h5>RandomUser API</h5>
        <h5>CSS</h5>
      </div>
      </div>
      </div>
    
        
    </section>
  )
}

export default CupidApp
