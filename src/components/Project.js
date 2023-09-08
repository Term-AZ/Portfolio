import React from 'react'
import "./Project.css"

const Project = (props) =>{
    return(
        <div className='ProjectGridObject'>
            <img className='ProjectImage' src={props.projectImage}></img>
            <h3 className='ProjectDesc'>{props.projectDesc}</h3>
            <a className='ProjectLink' href={props.projectLink}>{props.projectLink}</a>
        </div>
    )
}

export default Project