import React from 'react'
import { NavbarData } from './NavbarData';
import {Link} from 'react-router-dom'

function navbar() {
    return (
            <nav className='navbar'>
                <ul className='navbar-items'>
                    {
                        NavbarData.map((item, index)=>{
                            return (

                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span className='navbar-item-name'>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        
    )
}

export default navbar
