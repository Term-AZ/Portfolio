import React from 'react'
import "./Works.css"
import Project from './Project'
import bookManagerImage from "./images/bookManagerImage.png"
import pygameJumpKing from "./images/pygameJumpKingGame.png"

const P = [[bookManagerImage,'FB2 Book Manager','https://github.com/Term-AZ/Book-Manager'],['./images/ph.png','Group Pay','Test Link'],[pygameJumpKing,'PyGame Jump King Remake','https://github.com/Term-AZ/PythonJumpKingRemake'],]



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
