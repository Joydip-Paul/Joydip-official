import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
    <nav>
        <div className="container">
            <div className = "nav-area">
                <ul>
                <li>
                    <NavLink to = "/">Home</NavLink>
                </li>
                 <li>
                    <NavLink to = "/about">About</NavLink>
                </li>
                 <li>
                    <NavLink to = "/projects">Projects</NavLink>
                </li>
                 <li>
                    <NavLink to = "/contact">Contact</NavLink>
                </li>
            </ul>
            <div class="icon"></div>
            </div>
           </div>
        </nav>
    );
};

export default Header;