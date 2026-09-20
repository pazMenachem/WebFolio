import { JSX } from "react";
import recommendations, { GITHUB_LINK, LINKEDIN_LINK, RESUME_LINK, MAIL, PHONE } from "../consts/RecommendationConsts";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";

export default function ContactRecommend(): JSX.Element {
    return (
        <div className="contact-recommendation-container contact-slider-container">
            <div className="recommendation-container">
                {recommendations.map((recommendation) => (
                    <div className="recommendation-item" key={recommendation.name}>
                        <p>{recommendation.recommendation}</p>
                        <p>{recommendation.name}</p>
                    </div>
                ))}
            </div>
            <div className="contact-container">
                <h1>Contact Me</h1>
                <div className="Links">
                    <a href={GITHUB_LINK} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                        <FaGithub />
                    </a>
                    <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                        <FaLinkedin />
                    </a>
                    <a href={RESUME_LINK} download>
                        <FaFileDownload /> Resume
                    </a>
                    <p>Mail: <a href={`mailto:${MAIL}`}>{MAIL}</a></p>
                    <p>Phone: <a href={`tel:${PHONE.replace(/[^+\d]/g, "")}`}>{PHONE}</a></p>
                </div>
            </div>
        </div>
    )
}
