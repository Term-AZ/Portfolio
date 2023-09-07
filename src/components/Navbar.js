import React from 'react'
import "./NavBar.css"

const NavBar = () =>{
    return(
        <div className = 'NavBar'>
            <div className='NavContainer'>
                <div className='NavLinks'>
                    <ul className='NavList'>
                        <li className='NavListItem'>Home</li>
                        <li className='NavListItem'>Projects</li>
                        <li className='NavListItem'>Contact</li>
                    </ul>
                </div>
            </div>
        </div>

    )

}

export default NavBar 