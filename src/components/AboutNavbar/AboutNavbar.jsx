
import "./AboutNavbar.css"
import menu from "../../assets/menu.png"
import clear from "../../assets/clear.png"
import { useState } from "react";

function AboutNavbar() {


    let [toggleMenu, setToggleMenu] = useState(false);

    return <nav className="app__navbar app__bg">
        
        <h1 className="app__navbar_head">PRANAY </h1>

        <div className="app__about_navbar_links">
            <i><a href="/">Back</a></i>
        </div>
    </nav>
}

export default AboutNavbar;