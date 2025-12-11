import { NavLink } from "react-router-dom";
import "./ProjectCard.css"
import TitleAndArrow from "../../assets/LiveDemo.png";
import ViewProject from "../../assets/ViewProject.png";

function ProjeectCard({title,info,year,role,image,technologies}) {
    return <div className="app__wrapper ">
        <div className="app__wrapper_img project-card-image">
            <img src={image} alt="project image" />
        </div>

        <div className="app__wrapper_info">
            <h2 className="second__heading">{title}</h2>
            <p className="p__manrope">{info}</p>

            <div className="app__project-info">
                <h4 className="project-info-container">PROJECT INFO</h4>
                <div className="app__divider"></div>
                <div className="project-info-container">
                    <p className="p__manrope">Year</p>
                    <p className="p__manrope">{year}</p>
                </div>
                <div className="app__divider"></div>
                <div className="project-info-container">
                    <p className="p__manrope">Role</p>
                    <p className="p__manrope">{role}</p>
                </div>
                <div className="app__divider"></div>

                <div className="project-info-container">
                    <p className="p__manrope">Technologies Used</p>
                    <p className="p__manrope">{technologies}</p>
                </div>
                <div className="app__divider"></div>

                <div className="project__link">
                    <NavLink   to={"#"}><img src={TitleAndArrow}/></NavLink>
                    <NavLink  to={"#"}><img src={ViewProject}/></NavLink>
                </div>
            </div>
        </div>
    </div>
}

export default ProjeectCard;