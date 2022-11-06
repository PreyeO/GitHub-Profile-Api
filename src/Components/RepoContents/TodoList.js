import React from 'react'
import Todoist from "../Assets/todoist.PNG"
import CloseIcon from '../Icons/CloseIcon'
import Icon from '../Icons/Icon'
import GitHubIcon from '../Icons/GitHubIcon'
import "../Styles/RepoManual.css"


const TodoList = () => {

  

  return (
    <section className='rep-content'>
      <CloseIcon />
      <div className='rep-container'>
      <h1>Todo-LIST-APP</h1>
      <div className='rep-image'>
        <img src={Todoist} alt="" />
      </div>
      <div className='rep-card'>
      <h4>README.md</h4>
      <div className='rep-card'>
      <a href= "https://preyetodos.netlify.app" target="_blank"  rel="noreferrer"><Icon /></a>
        <a href ="https://github.com/PreyeO/todo-list-app "target= "_blank"  rel="noreferrer"><GitHubIcon /></a>
       <p>The app contains an input field. The plus(+) sign is used to enter list typed and  once list is entered, it automatically adds an ordered numbering to the list. One tap on a list item strikes it out AND double tap deletes the item from your list.</p>
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

export default TodoList
