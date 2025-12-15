import SectionHeading from "../SectionHeading/SectionHeading";
import AboutMe from"../../assets/AboutMe.png";
import "./About.css"
function About() {
    return <div className="section__padding app__bg " id="about">
        <div className="app__divider about__divider"></div>

        <div className="app__wrapper">
            <div className="app__wrapper_heading">
                <SectionHeading title={"ABOUT ME."}/>
            </div>
            <div className="app__wrapper_info">
                <h2 className="second__heading">I am a front-end developer. Has Computer Engineering background. </h2>
                <p className="p__manrope">I am a front-end developer. looking for exciting opportunities. Has Computer Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Java(Servlet, JDBC), Spring Framework. Learning more to improve skill.</p>

                <a style = {{marginTop : "2rem"}} href={"/aboutme"}><img src={AboutMe} alt="More About Me"/></a>
            </div>
        </div>
    </div>
}

export default About;