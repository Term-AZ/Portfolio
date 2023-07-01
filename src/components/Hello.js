import React from 'react'
import "./Hello.css"
import NavBar from "./Navbar"

const Hello =() =>{
    return(
        <div className='HelloSection'>
        <NavBar/>
        <div className='HelloContainer'>
            <div className='HelloLeftContainer'>
                <h1 className ='HelloTitle'>Hello, I'm Augusts </h1>
                <div classname='HelloDescContainer'>
                    <img className='HelloDivider'></img>
                    <h2 className='HelloDesc'>I am a third year Software Engineering <br/> Student at Western University</h2>
                    <h3 className='WhoAmI'> 
                    My name is Augusts Zilakovs. I am third year software student who is passionate about back end development
                    API's, and data analysis. I first started coding when I took my first computer science class in fifth grade, and I instantly knew
                    that I want to work in the tech industry. 
                    </h3>
                </div>
            </div>
            <div className='HelloRightContainer'>
                <img className='HelloProfileImg'></img>
            </div>
        </div>
        </div>
    )
}

export default Hello