import React, { useState } from 'react';
import './navbar.scss'
import {MenuItems} from './MenuItems'
import { Link } from 'react-router-dom';

function NavBar(){

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked)
    }

    return(
        
    <div className="navbar">
        <h1>Asociacion Hospital Infantil</h1>   
        
        <div  onClick={() => handleClick()}  className='menu-icons'>
            <i className={ clicked? 'fas fa-times':'fas fa-bars'}/>    
        </div>

        <ul className={clicked? 'nav-menu active':'nav-menu'}>
            {MenuItems.map( (item,index) => {
                return(
                        <li key={index}> 
                            <Link className={item.cName} to={item.url}>
                                <i className={item.icon}></i>  {item.title}
                            </Link> 
                        </li>
                    )
            })}
            <button>
                Hace tu donacion
            </button>
        </ul>

    </div>

    )
}

export default NavBar;
