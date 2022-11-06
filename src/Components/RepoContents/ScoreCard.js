import React from 'react'
import Basket from "../Assets/basket.PNG"
import CloseIcon from '../Icons/CloseIcon'
import Icon from '../Icons/Icon'
import "../Styles/RepoManual.css"
import GitHubIcon from '../Icons/GitHubIcon'
import { Link } from 'react-router-dom'

const ScoreCard = () => {

  

  return (
    <section className='rep-content'>
      <CloseIcon />
      <div className='rep-container'>
      <h1>BASKET-BALL-SCOREBOARD</h1>
      <div className='rep-image'>
        <img src={Basket} alt="" />
      </div>
      <div className='rep-card'>
      <h4>README.md</h4>
      <div className='rep-card'>
      <Link to="/scorecard"><Icon /></Link>
        <a href ="https://github.com/PreyeO/Basketball-Scoreboard "target= "_blank"  rel="noreferrer"><GitHubIcon /></a>
       <p>This basketball scoreboard records the points of players and displays the total for each team. The reset button clears of the score board. This scoreboard can be use for all games. I made this to use for a game night i hosted</p>
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

export default ScoreCard
