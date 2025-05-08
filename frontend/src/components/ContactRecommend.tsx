import { JSX } from "react";
import recommendations, { GITHUB_LINK, LINKEDIN_LINK } from "../consts/RecommendationConsts";
import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function ContactForm(): JSX.Element {
    return (
        <div className="contact-recommendation-container">
            <div className="recommendation-container">
                {recommendations.map((recommendation) => (
                    <div className="recommendation-item">
                        <p>{recommendation.recommendation}</p>
                        <p>{recommendation.name}</p>
                    </div>
                ))}
            </div>
            <div className="contact-container">
                <h1>Contact Me</h1>
                <div className="Links">
                    <a href={GITHUB_LINK}>
                        <FaGithub />
                    </a>
                    <a href={LINKEDIN_LINK}>
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </div>
    )
}
