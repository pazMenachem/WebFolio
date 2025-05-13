import { JSX } from "react";

export default function ProjectCard(
    {index, projectImage, projectTitle, projectDescription, projectLink, projectTechStack}: {
    index: number,
    projectImage: string,
    projectTitle: string,
    projectDescription: string,
    projectLink: string,
    projectTechStack: {name: string, icon: JSX.Element}[]
    }
): JSX.Element {
    return (
        <div className="project-card" style={{'--delay': `${index * 0.1}s`} as React.CSSProperties}>
            <img src={projectImage} alt={projectTitle} className="project-image" />
            <div className="project-details">
                <a href={projectLink} target="_blank" className="project-title">{projectTitle}</a>
                <p className="project-description">{projectDescription}</p>
                <div className="tech-used">
                    {projectTechStack.map((tech) => (
                        <div className="tech-badge">
                            {tech.icon}
                            <p>{tech.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
