import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom'
import Dropdown from './DropComponents/Dropdown'
import { useState } from 'react'
import pdf from './downloadfiles/augusts_zilakovs_resume.pdf'

const NavBar = () =>{
    const[isDropVisible, setIsDropVisible] = useState(false)
    return(
        <nav className='MainNav'>
            <ul className='NavList'>
                <li className='NavListItem'>
                    <Link to='/'><button className='NavButton' >Home</button></Link>
                </li>
                <li className='NavListItem' onMouseEnter={()=>setIsDropVisible(true)} onMouseLeave={()=>setIsDropVisible(false)} onClick={()=>setIsDropVisible(false)}>
                    <Link to='/projects'>
                        <button className='NavButton'>
                            Projects
                        </button>
                    </Link>
                    {isDropVisible && <Dropdown/>}
                </li>
                <li className='NavListItem'>
                    <Link to='/contact'><button className='NavButton'>Contact</button></Link>
                </li>
                <li className='NavListItem'>
                    <button className='NavButton'><a className='DownloadButton' href={pdf} target="_blank">Resume</a></button>
                </li>
            </ul>
        </nav>

    )

}

export default NavBar 