import { useInView } from "react-intersection-observer";
import ContactRecommend from "./ContactRecommend";
import { JSX } from "react";

/**
 * @property {string} description - Omitted when isContact is true, because the
 *   contact panel renders ContactRecommend instead of a description.
 * @property {"lazy" | "eager"} loading - "eager" for the first slider on the
 *   page (it is the largest contentful paint); "lazy" for everything below.
 */
export default function Slider({
    imageSrc,
    altText,
    flip,
    description,
    isContact = false,
    loading = "lazy",
 }: {
    imageSrc: string,
    altText: string,
    flip: boolean,
    description?: string,
    isContact?: boolean,
    loading?: "lazy" | "eager",
 }): JSX.Element {

    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    return (
        <div className={
            `slider-container 
            ${inView ? "slider-visible" : "slider-hidden"} 
            ${flip ? "slider-flip" : ""} 
            ${isContact ? "contact-slider-container" : ""}`
            }
            ref={ref}>
            <img
                className="slider-image"
                src={imageSrc}
                alt={altText}
                width={1024}
                height={1536}
                loading={loading}
                decoding="async"
            />
            {
            isContact ?
                <ContactRecommend /> :
                <p className="slider-description">{description}</p>
            }
        </div>
    )
}
