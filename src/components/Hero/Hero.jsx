import image from "../../assets/image.png";
import circle from "../../assets/circle.png";
import Frame3 from "../../assets/Frame 3.png";
import Frame4 from "../../assets/Frame 4.png"

import "./Hero.css";
import { NavLink } from "react-router-dom";



function Hero() {
    return <div className="app__wrapper app__bg section__padding" id="hero">
        <div className="app__wrapper_info app__info">
            <div className="app__hero_head">
                <h1 className="app__wrapper_info_head">hi, i am</h1>
                <h1 className="app__wrapper_info_head">pranay mittakola.</h1>
            </div>

            <p className="p__manrope">A front-end developer passionate about building accessible and user friendly websites.</p>

            <div className="app__hero_button">
                <button className="hero__button">CONTACT ME <img className="app__hero_button_image" src={circle} alt="" /></button>
                <NavLink><img className="app__hero_button_image" src={Frame3} alt="Linked In" /></NavLink>
                <NavLink><img className="app__hero_button_image" src={Frame4}alt="Git Hub" /></NavLink>
            </div>
        </div>
        <div className="app__wrapper_img">
            <img src={image} alt="" />
        </div>
    </div>
}

export default Hero;