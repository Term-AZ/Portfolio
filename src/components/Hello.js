import React from 'react'
import "./Hello.css"
import NavBar from "./Navbar"
import TrackVisibility from 'react-on-screen'
import { TypeAnimation } from 'react-type-animation'
import styled from 'styled-components'

const Section = styled.div`
    height:100vh;
    scroll-snap-align: center;
`

const Hello =() =>{
    return(
        <Section>
            <div className='HelloSection'>
            <NavBar/>
            <div className='HelloContainer'>
                <div className='HelloLeftContainer'>

                    <h1 className ='HelloTitle'>Hello, I'm Augusts </h1>
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
            
                {/* <div className='HelloRightContainer'>
                    <img className='HelloProfileImg'></img>
                </div> */}
            </div>
            </div>
        </Section>
    )
}

export default Hello