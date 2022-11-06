import React from 'react'
import StopWatchs from "../Assets/stopwatch.PNG"
import CloseIcon from '../Icons/CloseIcon'
import Icon from '../Icons/Icon'
import GitHubIcon from '../Icons/GitHubIcon'
import "../Styles/RepoManual.css"

const StopWatch = () => {

  

  return (
    <section className='rep-content'>
      <CloseIcon />
      <div className='rep-container'>
      <h1>STOP-WATCH</h1>
      <div className='rep-image'>
        <img src={StopWatchs} alt="" />
      </div>
      <div className='rep-card'>
      <h4>README.md</h4>
      <div className='rep-card'>
      <a href= " https://preyeo.netlify.app" target="_blank"  rel="noreferrer"><Icon /></a>
        <a href ="https://github.com/PreyeO/stopwatch "target= "_blank"  rel="noreferrer"><GitHubIcon /></a>
       <p>When the start button is double clicked, a stop button shows up and the counter starts to count from seconds to minutes to hours. When the stop button is clicked, it pauses the timer. When the reset button is clicked, the timer resets to its initial time 00:00:00.</p>
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

export default StopWatch
