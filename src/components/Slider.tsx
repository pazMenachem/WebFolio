import { useInView } from "react-intersection-observer";
import { JSX, ReactNode } from "react";

/**
 * A block of content, revealed as it scrolls into view, optionally with an
 * image beside it.
 *
 * @property {string} imageSrc - Omit it and the content runs on its own,
 *   centred and full width. A decorative image next to a block of text takes
 *   half the first viewport and tells the reader nothing, so a slider is
 *   allowed to have none.
 * @property {boolean} priority - True for the first slider on the page. It
 *   starts visible rather than waiting for the observer, so the first
 *   viewport has readable content at first paint instead of after an
 *   animation.
 */
export default function Slider({
    imageSrc,
    altText,
    flip,
    priority = false,
    children,
 }: {
    imageSrc?: string,
    altText?: string,
    flip: boolean,
    priority?: boolean,
    children: ReactNode,
 }): JSX.Element {

    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
        initialInView: priority,
    });

    return (
        <div
            className={
                `slider-container
                ${inView ? "slider-visible" : "slider-hidden"}
                ${flip ? "slider-flip" : ""}
                ${imageSrc ? "" : "slider-no-image"}`
            }
            ref={ref}
        >
            {imageSrc && (
                <img
                    className="slider-image"
                    src={imageSrc}
                    alt={altText ?? ""}
                    width={1024}
                    height={1536}
                    loading={priority ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={priority ? "high" : "auto"}
                />
            )}
            {children}
        </div>
    )
}
