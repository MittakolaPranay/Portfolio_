import ProjeectCard from "../ProjectCard/ProjectCard";
import SecondaryHeading from "../SecondaryHeading/SecondaryHeading";
import Project2 from "../../assets/Project2.png";
import Project1 from "../../assets/Project1.png";
import "./Project.css"

function Project() {
    return (
        <div className="section__padding app__bg" id="work">
            <div className="app__divider work__divider"></div>
            <SecondaryHeading
                heading={"Featured Projects"}
                para={"Here are some of the selected projects that showcase my passion for front-end development."}
            />

            <div className="project__card">
                
                <ProjeectCard
                    image={Project2}
                    title={"Gericht Restaurant Front-End"}
                    info={"Developed the front-end of the Gericht Restaurant website, focusing on modern UI design and responsive layouts. Learned key concepts of React and CSS while building the project from a YouTube tutorial, refining component structure and styling skills."}
                    year={"2025"}
                    role={"Front-end Developer"}
                    technologies={"React"}
                />

                <div className="app__divider"></div>

                <ProjeectCard
                    image={Project1}
                    title={"Library Management System"}
                    info={"Created a full-featured Library Management System to simplify library operations. Enabled librarians to manage book records efficiently and students to borrow or return books effortlessly, all within a responsive and user-friendly interface."}
                    year={"2025"}
                    role={"Front-end and Backend Developer"}
                    technologies={"React, java(Servlet, JDBC), MySQL"}
                />

            </div>
        </div>
    )

}

export default Project;
