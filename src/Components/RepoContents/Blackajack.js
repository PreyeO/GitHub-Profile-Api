import React from 'react'
import Blacks from "../Assets/blacks.PNG"
import "../Styles/RepoManual.css"
import CloseIcon from '../Icons/CloseIcon'
import Icon from '../Icons/Icon'
import GitHubIcon from '../Icons/GitHubIcon'
import { Link } from 'react-router-dom'

const BlackJack = () => {

  

  return (
    <section className='rep-content'>
      <CloseIcon />
      <div className='rep-container'>
      <h1>BLACK-JACK-GAME</h1>
      <div className='rep-image'>
        <img src={Blacks} alt="" />
      </div>
      <div className='rep-card'>
      <h4>README.md</h4>
      <div className='rep-card'>
      <Link to="/blackjack"><Icon /></Link>
        <a href ="https://github.com/PreyeO/Black-jack-gamed" target= "_blank"  rel="noreferrer"><GitHubIcon /></a>
       <p>This a black-jack-game works with the same logic of the black-jack. If a player'S total drawed cards is above 21, they are out of the game. If it less than 21 you get the option to draw more cards. If the player gets 21 you have won.</p>
       </div>

      <div className='rep-tools'>
        <h5>JavaScript</h5>
        <h5>HTML</h5>
        <h5>CSS</h5>
      </div>
      </div>
      </div>
     
        
    </section>
  )
}

export default BlackJack
