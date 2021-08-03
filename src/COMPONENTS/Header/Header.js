import React, { useState } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { MdClose, MdMenu } from 'react-icons/md';

const Header = () => {
    const [showNav, setShowNav] = useState(false);
    return (
        <nav>
            <div className="logo">
                <a href="#" className="position-absolute logo text-white">Joydip</a>
            </div>
            <div className="nav-area">
                <div className="hamburger_menu"
                    onClick={() => setShowNav(!showNav)}
                    role="button"
                    onKeyDown={() => setShowNav(!showNav)}
                    tabIndex={0}
                >
                    <MdMenu />
                </div>

                <ul className={!showNav ? "navItems hide-item" : "navItems"}>
                    <div className="close_menu"
                        onClick={() => setShowNav(!showNav)}
                        role="button"
                        onKeyDown={() => setShowNav(!showNav)}
                        tabIndex={0}
                    >
                        <MdClose />
                    </div>
                    <li>
                        <NavLink to="/" exact
                            onClick={() => setShowNav(!showNav)}
                            role="button"
                            onKeyDown={() => setShowNav(!showNav)}
                            tabIndex={0}
                        >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about"
                            onClick={() => setShowNav(!showNav)}
                            role="button"
                            onKeyDown={() => setShowNav(!showNav)}
                            tabIndex={0}
                        >About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects"
                            onClick={() => setShowNav(!showNav)}
                            role="button"
                            onKeyDown={() => setShowNav(!showNav)}
                            tabIndex={0}
                        >Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact"
                            onClick={() => setShowNav(!showNav)}
                            role="button"
                            onKeyDown={() => setShowNav(!showNav)}
                            tabIndex={0}
                        >Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;