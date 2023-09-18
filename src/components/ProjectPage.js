import React from 'react'
import './ProjectPage.css'
import ph from "./images/ph.png"
import { useParams } from 'react-router-dom'
import data from './JsonFiles/projects.json'
import s from './images/bookManagerImage.png'

const ProjectPage = (props) =>{
    const params = useParams()
    const project = data.Programs[params.projectid] || []
    return(
        <div className='ProjectPageBackGround'>
            <div className='MainProjectContainerBackground'>
                <div className='MainProjectContainer'>
                    <div className='ProjectLeftContainer'>
                        <div className='ProjectTitleContainer'>
                            {params.projectname}
                        </div>
                        <div className='ProjectGitHubLinkContainer'>
                            Completed: 
                            {" "+project.date_completed}<br></br>
                            <a className='LinkTag'style={{ textDecoration: 'none' }} href={project.githublink}>{project.githublink}</a>
                        </div>
                        
                        <div className='ProjectDescriptionContainer'>
                            {project.description}
                        </div>
                        <div className='ProjectFeatures'>
                            <p className='ProjectTitleDefault'>
                                Project Features:
                            </p>
                            <ul>
                                {project.features.map((i)=>{
                                    return(
                                        <li>{i}</li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className = 'ProjectFeatures'>
                            <p className='ProjectTitleDefault'>
                                Used Technologies:
                            </p>
                            <ul>
                                {project.tech_used.map((i)=>{
                                    return(
                                        <li>{i}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className='ProjectRightContainer'>
                        <div className='ProjectImageContainer'>
                            {project.video_links.map((i)=>{
                                console.log(i)
                                return(
                                    <div className='InvImageContainer'>
                                        <iframe className='youtubeembed' src={`${i}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                )
                            })}
                            {project.images.map((i)=>{
                                return(
                                    <div className='InvImageContainer'>
                                        <img className="ProjectImage" src={require(`${i}`)}></img>
                                    </div>
                                )
                            })}


                            {/* <div className='InvImageContainer'>
                                <img className="ProjectImage"src={ph}></img>
                            </div>
                            <div className='InvImageContainer'>
                                <img className="ProjectImage"src={ph}></img>
                            </div>
                            <div className='InvImageContainer'>
                                <img className="ProjectImage"src={ph}></img>
                            </div>
                            <div className='InvImageContainer'>
                                <img className="ProjectImage"src={ph}></img>
                            </div> */}
                        </div>
                        <div className='ProjectLinkContainer'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectPage