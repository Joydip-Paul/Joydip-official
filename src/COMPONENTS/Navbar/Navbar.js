import React from "react";
import "./Navbar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { FaBeer, FaIcons } from "react-icons/fa";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { useState } from "react";
import { SideBarData } from "./SideBarData";
import { IconContext } from "react-icons";
import me from "../../img/me.jpg";
import { useEffect } from "react";

const Navbar = () => {
  const [sidebar, setSideBar] = useState(false);
  const showSideBar = () => setSideBar(!sidebar);

  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  let navbarClasses = ["header-area", "navbar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className={navbarClasses.join(" ")}>
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSideBar} className="burger" />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose onClick={showSideBar} />
              </Link>
            </li>
            <img src={me} className="profile-me" />
            {SideBarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
