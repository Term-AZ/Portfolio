import React from 'react'
import "./Works.css"
import Project from './Project'
import bookManagerImage from "./images/bookManagerImage.png"
import pygameJumpKing from "./images/pygameJumpKingGame.png"
import styled from 'styled-components'

const P = [[bookManagerImage,'Book Manager','https://github.com/Term-AZ/Book-Manager'],['./images/ph.png','My first project','Test Link'],[pygameJumpKing,'PyGame Jump King Remake','https://github.com/ShaimaaAliECE/groupproject-team-51'],]
const Section = styled.div`
    height:100vh;
    scroll-snap-align: center;
`

const Works = () =>{
    return(
        <Section>
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
        </Section>
    )
}

export default Works
