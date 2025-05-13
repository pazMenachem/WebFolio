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
        description: `B.Sc. in Computer Science, specializing in CPP, Python, and backend
        development. Built multiple projects using algorithms, data structures, and object-
        oriented programming (OOP). Developed system-level and web applications with a focus
        on performance, and clean code. Strong knowledge of Linux, Git, Async Programming,
        PostgreSQL, and gRPC. Looking for a Junior Software Developer position to work on
        meaningful projects and grow as a developer.`
    },
]

export const contactMe = {
    image: ContactMe,
    altText: "Contact Me",
}

export default homeData;
