import React from 'react'
import "./Project.css"

const Project = (props) =>{
    return(
        <div className='ProjectGridObject'>
            <img className='ProjectProjectImage' src={props.projectImage}></img>
            <h3 className='ProjectDesc'>{props.projectDesc}</h3>
            <p className='whatami'>{props.whatamI}</p>
            <a className='ProjectLink' href={props.projectLink}>{props.projectLink}</a>
        </div>
    )
}

export default Project