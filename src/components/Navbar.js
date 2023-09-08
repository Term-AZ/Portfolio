import React from 'react'
import "./NavBar.css"

const NavBar = () =>{
    return(
        <nav className='MainNav'>
            <ul className='NavList'>
                <li className='NavListItem'>
                    <a><button className='NavButton' onClick={()=>console.log("works")}>Top</button></a>
                </li>
                <li className='NavListItem'>
                    <a><button className='NavButton'>Projects</button></a>
                </li>
                <li className='NavListItem'>
                    <a><button className='NavButton'>Contact</button></a>
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