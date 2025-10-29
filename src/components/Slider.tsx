import { useInView } from "react-intersection-observer";
import ContactRecommend from "./ContactRecommend";
import { JSX } from "react";

export default function Slider({
    imageSrc, 
    altText, 
    flip,
    description,
    isContact = false
 }: { imageSrc: string, altText: string, flip: boolean, description: string, isContact: boolean }): JSX.Element {

    const { ref, inView } = useInView({
        threshold: 0.2,
    });

    return (
        <div className={
            `slider-container 
            ${inView ? "slider-visible" : "slider-hidden"} 
            ${flip ? "slider-flip" : ""} 
            ${isContact ? "contact-slider-container" : ""}`
            }
            ref={ref}>
            <img className="slider-image" src={imageSrc} alt={altText}/>
            {
            isContact ? 
                <ContactRecommend /> :
                <p className="slider-description">{description}</p>
            }
        </div>
    )
}
