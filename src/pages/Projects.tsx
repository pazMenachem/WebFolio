import ProjectCard from "../components/ProjectCard";
import { projectsData, MAX_DESCRIPTION_LENGTH } from "../consts/ProjectsConsts";
import { JSX } from "react";

export default function Projects(): JSX.Element {
    return (
        <div className="projects-container">
            <div className="projects-grid">
                {projectsData.map((project, index) => (
                    <ProjectCard
                    key={index}
                    index={index}
                    projectImage={project.image}
                    projectTitle={project.title}
                    projectDescription={project.description.length > MAX_DESCRIPTION_LENGTH ? 
                        project.description.substring(0, MAX_DESCRIPTION_LENGTH) + "..." : project.description} 
                    projectLink={project.link}
                    projectTechStack={project.techStack} />
                ))}
            </div>
        </div>
    )
}
