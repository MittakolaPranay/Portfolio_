
import SectionHeading from "../SectionHeading/SectionHeading";
import Skill from "../Skill/Skill";
import "./Skills.css"

function Skills() {
    return <div className="section__padding app__bg" id="skills">
        <div className="app__wrapper">
            <div className="app__wrapper_heading">
                <SectionHeading title={"my capabilities"}/>
            </div>
            <div className="app__wrapper_info">
                <p className="p__manrope">Always learning — right now focused on improving React logic, Java backend, and real-world project skills.</p>
                <div className="skills">
                    <Skill skill={"HTML"}/>
                    <Skill skill={"CSS"}/>
                    <Skill skill={"JAVASCRIPT"}/>
                    <Skill skill={"REACT"}/>
                    <Skill skill={"JAVA"}/>
                    <Skill skill={"SPRING FRAMEWORK"}/>
                </div>
            </div>
        </div>
    </div>
}

export default Skills;