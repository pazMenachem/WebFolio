import { JSX } from "react";
import { about } from "../consts/HomeConsts";

export default function AboutPanel(): JSX.Element {
    return (
        <div className="about-panel">
            <p className="about-eyebrow">{about.eyebrow}</p>
            <h1 className="about-name">{about.name}</h1>
            <p className="about-lead">{about.lead}</p>
            {about.paragraphs.map((paragraph, index) => (
                <p className="about-body" key={index}>{paragraph}</p>
            ))}
        </div>
    );
}
