import { JSX } from "react";

// The fade-in stagger is capped at five steps: with eleven cards,
// index * 0.1s left the last one starting a second after load.
export default function ProjectCard(
    {index, projectImage, projectTitle, projectDescription, projectLink, projectTechStack}: {
    index: number,
    projectImage?: string,
    projectTitle: string,
    projectDescription: string,
    projectLink?: string,
    projectTechStack: {name: string, icon: JSX.Element}[]
    }
): JSX.Element {
    return (
        <div className="project-card" style={{'--delay': `${Math.min(index, 5) * 0.05}s`} as React.CSSProperties}>
            {projectImage ? (
                <img
                    src={projectImage}
                    alt={projectTitle}
                    className="project-image"
                    loading={index < 2 ? "eager" : "lazy"}
                    decoding="async"
                />
            ) : (
                /* Internal platforms have no shareable screenshot. A typographic
                   block is honest; a stock image would not be. */
                <div className="project-image project-image-fallback" aria-hidden="true">
                    <span>{projectTitle}</span>
                </div>
            )}
            <div className="project-details">
                {projectLink ? (
                    <a
                        href={projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-title"
                    >
                        {projectTitle}
                    </a>
                ) : (
                    <h3 className="project-title project-title-static">{projectTitle}</h3>
                )}
                <p className="project-description">{projectDescription}</p>
                <div className="tech-used">
                    {projectTechStack.map((tech) => (
                        <div className="tech-badge" key={tech.name}>
                            {tech.icon}
                            <p>{tech.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
