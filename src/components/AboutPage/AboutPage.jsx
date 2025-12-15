import SectionHeading from "../SectionHeading/SectionHeading";
import "./AboutPage.css"
import { NavLink } from "react-router-dom";
import Frame3 from "../../assets/Frame 3.png";
import Frame4 from "../../assets/Frame 4.png";

function AboutPage() {
    return <div className="section__padding app__bg">
        <div className="app__wrapper page__about">
            <div className="app__wrapper_heading">
                <SectionHeading title={"ABOUT ME"} />
            </div>

            <div className="app__wrapper_info">
                <h2 className="second__heading">I am a front-end developer. Has Computer Engineering background. </h2>
                <p className="p__manrope">I am a front-end developer. looking for exciting opportunities. Has Computer Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Java(Servlet, JDBC), Spring Framework. Learning more to improve skill.</p>

                <div className="app__about_btn">
                    <a href="#contact" className="custom__button"> CONTACT ME </a>
                    <a href="https://www.linkedin.com/in/pranay-mittakola-26533a366/"><img className="app__hero_button_image" src={Frame3} alt="Linked In" /></a>
                    <a href="https://github.com/MittakolaPranay"><img className="app__hero_button_image" src={Frame4} alt="Git Hub" /></a>
                </div>
            </div>
        </div>
    </div>
}

export default AboutPage;