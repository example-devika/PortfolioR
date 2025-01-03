import React from 'react'
import Navsticky from '../Navbar1/Navsticky'
import "./Project.css"

const Project = () => {
  return (
    <div className='project-list'>
  <div className="projects">
        <div className="project ">
        <img src="cart.avif" class="CENy8b" role="img"/>
        <p>E-commerce Website</p>
        </div>
        <div className="project">
        <img src="todo list.webp" class="CENy8b" role="img"/>
        <p>Todo List</p>
        </div>
        <div className="project">
        <img src="tourism.jpg" class="CENy8b" role="img"/>
        <p>Tourism webpage</p>
        </div>
        <div className="project">
        <img src="restaurant.webp" class="CENy8b" role="img"/>
        <p>Restaurant webpage</p>
        </div>
        <div className="project">
            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20240314120529/Screenshot-2024-03-14-at-12-04-38-GFG-FB-Clone.png" role="img"alt="" />
        <p>SocialMedia Application</p>
        </div>
     
        <div className="project">
         <img src="calculator1.avif" alt="calculator" />
        <p>Calculator</p>
        </div>
    </div>    
    </div>
  )
}

export default Project
