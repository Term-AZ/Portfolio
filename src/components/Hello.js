import React from 'react'
import "./Hello.css"
import NavBar from "./Navbar"
import TrackVisibility from 'react-on-screen'
import { TypeAnimation } from 'react-type-animation'
import styled from 'styled-components'
import gh from "./images/GH.png"
import ln from "./images/linkedin.png"
import githublogo from "./images/githublogo.png"
import { Link } from 'react-router-dom'

const Hello =() =>{
    return(
        <div className='HomeBackground'>
            <div className='HelloSection'>
            
            <div className='HelloContainer'>
                <div className='HelloLeftContainer'>

                    <h1 className ='HelloTitle'>Hello, I'm Augusts 2 </h1>
                    <div classname='HelloDescContainer'>
                        <img className='HelloDivider'></img>
                    </div>
                    <div className='HelloDescription'>
                        <TypeAnimation
                                sequence={[
                                    'I am a third year software engineering student',
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'I am a developer',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: '2em'}}
                                repeat={Infinity}                            
                            />
                    </div>
                </div>
                <div className='HelloRightContainer'>
                    <div className='spaceTaker'></div>
                    
                    <div className="ToLinkContainer">
                        <Link to='/projects'><button className='LinkButton'>Projects</button></Link>
                    </div>
                    <div className="ToLinkContainer">
                        <Link to='/contact'><button className='LinkButton'>Contact Me</button></Link>
                    </div>
                    <div className='OverGridContainer'>
                        <div className='HelloSiteGrid'>
                            <div className='InGridContainer'>
                                <button border='0'className="ImageButton">
                                    <a href='https://github.com/Term-AZ'>
                                        <img className='ButtonImage' src={githublogo} alt="GitHubImage">
                                        
                                        </img>
                                    </a>
                                </button>
                            </div>
                            <div className='InGridContainer'>
                                <button className="ImageButton">
                                    <a href='https://www.linkedin.com/in/augusts-zilakovs-118083187/'>
                                        <img className='ButtonImage' src={ln} alt="LinkedInImage">
                                        
                                        </img>
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Hello