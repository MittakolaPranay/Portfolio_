import { NavLink } from "react-router-dom";
import "./Navbar.css"
import menu from "../../assets/menu.png"
import clear from "../../assets/clear.png"
import { useState } from "react";

function Navbar() {


    let [toggleMenu, setToggleMenu] = useState(false);

    return <nav className="app__navbar app__bg">
        
        <h1 className="app__navbar_head">PRANAY </h1>

        <ul className="app__navbar_links">
            <i><a href={"#work"}>Work</a></i>
            <i><a href={"#about"}>About</a></i>
            <i><a href={"#contact"}>Contact</a></i>
        </ul>

        <div className="app__navbar_icon">
            <button className="navbar__button " onClick={() => setToggleMenu(true)}><img src={menu} /></button>
            {
                    <div className={`app__navbar_overley ${toggleMenu ? "slide-down": ""}`}>
                        <button className="navbar__button  app__clear" onClick={() => setToggleMenu(false)}><img src={clear} alt="" /></button>
                        <ul className="app__navbar_overley_links">
                            <i><a href={"#work"} onClick={() => setToggleMenu(false)}>Work</a></i>
                            <i><a href={"#about"} onClick={() => setToggleMenu(false)}>About</a></i>
                            <i><a href={"#contact"} onClick={() => setToggleMenu(false)}>Contact</a></i>
                            <i><a href={"/"} onClick={() => setToggleMenu(false)}>Back</a></i>
                        </ul>
                    </div> 
            }
        </div>
    </nav>
}

export default Navbar;