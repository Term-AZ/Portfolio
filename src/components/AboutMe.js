import React from 'react'
import "./AboutMe.css"
import pi from "./images/profile_image2.jpg"


const AboutMe = ()=>{
    return(
        <div className='AboutMeContainer'>
            <div className='AboutMeMainContainer'>
                <div className="profile_image_container">
                    <img src={pi} className="profile_image"></img>

                </div>
                <div className='WhoAmI'>
                    <div>
                    <h2>
                        Who Am I?
                    </h2>
                    <p className='AboutMeDescription'>
                        My name is Augusts Zilakovs, I am third year software engineering student at the Univeristy of Western Ontario.
                        I have a keen interest in creating seamless and user-friendly digital experiences and 
                        I thrive on turning innovative ideas into robust, scalable, and efficient web applications.
                    </p>
                    </div>
                </div>
            </div>
            <div className="skills_container">
                <div className='languages_container'>
                    <h3>
                        Languages
                    </h3>
                    <div className='skill_list'>
                        <i class="devicon-javascript-plain"></i>
                        <i class="devicon-html5-plain"></i>
                        <i class="devicon-java-plain"></i>
                        <i class="devicon-csharp-plain"></i>
                        <i class="devicon-kotlin-plain"></i>
                        <i class="devicon-python-plain"></i>
                        <i class="devicon-mysql-plain-wordmark"></i>
                        <i class="devicon-sqlite-plain-wordmark"></i>
                    </div>

                </div>
                <div className="languages_container">
                    <h3>
                        Frameworks
                    </h3>
                    <div className='skill_list'>
                        <i class="devicon-react-original-wordmark"></i>
                        <i class="devicon-nodejs-plain"></i>
                        <i class="devicon-dot-net-plain-wordmark"></i>
                    </div>
                </div>
                <div className="languages_container">
                    <h3>
                        Technologies
                    </h3>
                    <div className='skill_list'>
                        <i class="devicon-vscode-plain"></i>
                        <i class="devicon-docker-plain-wordmark"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutMe