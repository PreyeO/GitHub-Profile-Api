import Calc from "../Assets/calculator.PNG"
import Icon from "../Icons/Icon"
import CloseIcon from "../Icons/CloseIcon"
import GitHubIcon from "../Icons/GitHubIcon"




const Calculator = ( )=> {
  

  return (
    <section className='rep-content'>
         <CloseIcon />
      <div className='rep-container'>
      <h1>CALCULATOR</h1>
      <div className='rep-image'>
        <img src={Calc} alt="" />
      </div>
      <div className='rep-card'>
      <h4>README.md</h4>
      <div className='rep-card'>
        <a href= "https://react-pdhmy4.stackblitz.io" target="_blank"  rel="noreferrer"><Icon /></a>
        <a href to="https://github.com/PreyeO/Calculator "target= "_blank"  rel="noreferrer"><GitHubIcon /></a>
       <p>This calculator was built using ReactJs. it performs all basic calculations it also has a theme toggler: Light and Dark. I learnt how to add themes.</p>
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

export default Calculator
