import about from "../assets/about.webp";
import ContactMe from "../assets/ContactMe.webp";

/**
 * Array of home data objects.
 * Each object contains:
 * @property {string} image - The path to the image.
 * @property {string} altText - The alt text for the image.
 * @property {string} description - A description for the Slider component.
 */

export const homeData : {image: string, altText: string, description: string}[] = [
    {
        image: about,
        altText: "About",
        description: `Full stack / Backend Developer with a strong foundation in software engineering, a passion
        for building scalable systems, and a proven ability to mentor and lead others.
        I bring together hands-on project experience (client-server apps, multithreaded systems,
        networking) with a background in teaching, volunteering (AKIM organization) and guiding
        teams, making me both a strong individual contributor and a collaborative team player, my
        way of doing things: “tell me the subject and I’ll learn it myself”.`
    },
]

export const contactMe = {
    image: ContactMe,
    altText: "Contact Me",
}

export default homeData;
