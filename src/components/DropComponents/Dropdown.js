import React from "react";
import data from '../JsonFiles/projects.json'
import './Dropdown.css'
import { Link } from "react-router-dom";

const Dropdown = (props) =>{
    var d = data.Programs || []
    var index=0
    return(
        <div className="DropDown">
            <ul className='DropDownList'>
                {d.map((i)=>{
                    return(
                        <Link style={{ textDecoration: 'none' }}to={'/projects/'+i.name+'/'+index++}><li className='DropDownListItem'><p className='DropDownLinkText'>{i.name}</p></li></Link>
                    )
                })}
            </ul>
        </div>
    ) 
}
export default Dropdown