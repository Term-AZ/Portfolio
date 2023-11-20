import React from 'react'
import './ProjectPage.css'
import { useParams } from 'react-router-dom'
import data from './JsonFiles/projects.json'


const ProjectPage = (props) =>{
    const params = useParams()
    const project = data.Programs[params.projectid] || []
    return(
        <div className='ProjectPageBackGround'>
            <div className='MainProjectContainerBackground'>
                <div className='ProjectTitleContainer'>
                    <h1>{params.projectname}</h1>
                </div>
                <div className='ProjectTypeContainer'>
                    <p>{project.type}</p>
                </div>
                <div className='MainProjectContainer'>
                    <div className='ProjectLeftContainer'>
                        <div className='ProjectGitHubLinkContainer'>
                            <p>
                            Completed: 
                            {" "+project.date_completed}<br></br>
                            <a className='LinkTag'style={{ textDecoration: 'none' }} href={project.githublink}>{project.githublink}</a>
                            </p>
                        </div>
                        
                        <div className='ProjectDescriptionContainer'>
                            <p>{project.description}</p>
                        </div>
                        <div className='ProjectFeatures'>
                            <p className='ProjectTitleDefault'>
                                {project.type=="Project"? <div>Project Features</div>: <div>Contributions</div> }
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
                        <div className = 'ProjectFeatures'>
                            {project.future_steps.length >0 ? 
                                <div>
                                <p className='ProjectTitleDefault'>
                                    Future Updates:
                                </p>
                                <div className="FutureStepsDescription">
                                    <ul>
                                        {project.future_steps.map((i)=>{
                                            return(
                                                <li>{i}</li>
                                            )
                                        })}
                                    </ul>
                                </div>  </div> : <div/> } 
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
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectPage