import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom'


const NavBar = () =>{
    return(
        <nav className='MainNav'>
            <ul className='NavList'>
                <li className='NavListItem'>
                    <Link to='/'><button className='NavButton' onClick={()=>console.log("works")}>Home</button></Link>
                </li>
                <li className='NavListItem'>
                    <Link to='/projects'><button className='NavButton'>Projects</button></Link>
                </li>
                <li className='NavListItem'>
                    <Link to='/contact'><button className='NavButton'>Contact</button></Link>
                </li>
            </ul>
        </nav>

    )
    // return(
    //     <div className = 'NavBar'>
    //         <div className='NavContainer'>
    //             <div className='NavLinks'>
    //                 <ul className='NavList'>
    //                     <li className='NavListItem'>Home</li>
    //                     <li className='NavListItem'>Projects</li>
    //                     <li className='NavListItem'>Contact</li>
    //                 </ul>
    //             </div>
    //         </div>
    //     </div>

    // )

}

export default NavBar 