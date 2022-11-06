import React from 'react'
import Food from "../Assets/food-app1.PNG"
import CloseIcon from '../Icons/CloseIcon'
import Icon from '../Icons/Icon'
import "../Styles/RepoManual.css"
import GitHubIcon from '../Icons/GitHubIcon'

const FoodApp = () => {

  

  return (
    <section className='rep-content'>
      <CloseIcon />
      <div className='rep-container'>
      <h1>FOOD-APP</h1>
      <div className='rep-image'>
        <img src={Food} alt="" />
      </div>
      <div className='rep-card'>
      <h4>README.md</h4>
      <div className='rep-card'>
      <a href= "https://food-app-mocha.vercel.app" target="_blank"  rel="noreferrer"><Icon /></a>
        <a href ="https://github.com/PreyeO/food-app" target= "_blank"  rel="noreferrer"><GitHubIcon /></a>
       <p>Lillies Food-App was created with ReactJS and it shows the full modals involved in a food app. which are: Dashboard, Cart, Order and Checkout. This project challenged me and forced me to think outside the box</p>
       </div>

      <div className='rep-tools'>
        <h5>ReactJS</h5>
        <h5>CSS</h5>
        <h5>Styled Component</h5>
      </div>
      </div>
      </div>
    
        
    </section>
  )
}

export default FoodApp
