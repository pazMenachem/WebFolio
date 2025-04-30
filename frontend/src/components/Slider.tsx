import { useInView } from "react-intersection-observer";

export default function Slider({ 
    imageSrc, 
    altText, 
    flip }: { imageSrc: string, altText: string, flip: boolean }) {

    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    const renderContent = flip ? (
        <>
            <img className="slider-image" src={imageSrc} alt={altText}/>
            <h2>{altText}</h2>
        </>
    ) : (
        <>
            <h2>{altText}</h2>
            <img className="slider-image" src={imageSrc} alt={altText}/>
        </>
    );

    return (
        <div className={`slider-container ${inView ? "slider-visible" : "slider-hidden"}`} ref={ref}>
            {renderContent}
        </div>
    )
}
