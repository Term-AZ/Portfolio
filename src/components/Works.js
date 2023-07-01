import React from 'react'
import "./Works.css"
import Project from './Project'
import testImage from "./images/ph.png"

const P = [[testImage,'My first project','Test Link'],['./images/ph.png','My first project','Test Link'],['./images/ph.png','My first project','Test Link'],['./images/ph.png','My first project','Test Link'],['./images/ph.png','My first project','Test Link'],['./images/ph.png','My first project','Test Link']]
const Works = () =>{
    return(
        <div className='WorksContainer'>
            <div className='WorksTitleContainer'>
                <h1 className ='WorksTitle'>
                    My Projects
                </h1>
            </div>
            <div className='ProjectContainer'>
                {P.map((i)=>{
                    return(
                        <Project projectImage={i[0]} projectDesc={i[1]} projectLink={i[2]}></Project>
                    )

                })}

            </div>
               
        </div>

    )
}

export default Works
