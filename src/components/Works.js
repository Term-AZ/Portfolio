import React from 'react'
import "./Works.css"
import Project from './Project'
import bookManagerImage from "./images/bookManagerImage.png"
import pygameJumpKing from "./images/pygameJumpKingGame.png"
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import data from './JsonFiles/projects.json'

const P = [[bookManagerImage,'FB2 Book Manager','https://github.com/Term-AZ/Book-Manager'],['./images/ph.png','Group Pay','Test Link'],[pygameJumpKing,'PyGame Jump King Remake','https://github.com/Term-AZ/PythonJumpKingRemake'],]


const Works = () =>{
    var programs = data.Programs || []
    var index=0
    return(
        <div className='WorksBackground'>
            <div className='WorksContainer'>
                <div className='WorksTitleContainer'>
                    <h1 className ='WorksTitle'>
                        My Projects
                    </h1>
                </div>
                <div className='ProjectContainer'>
                    {programs.map((i)=>{
                        // console.log("waka"+i.images[0])
                        return(
                            <Link to={'/projects/'+i.name+"/"+index++} style={{ textDecoration: 'none' }}><Project whatamI={i.what_am_i} projectImage={require(`${i.images[0]}`)} projectDesc={i.name} projectLink={i.githublink}></Project></Link>
                        )
                    })}

                </div> 
            </div>
        </div>
    )
}

export default Works
