import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaPython, FaJava, FaPhp, FaDatabase, FaGit, FaLinux } from "react-icons/fa";
import { JSX } from "react";
const MAX_DESCRIPTION_LENGTH = 200;

/**
 * Array of project data objects.
 * Each object contains:
 * @property {string} title - The title of the project.
 * @property {string} description - A brief description of the project.
 * @property {string} link - A URL link to the project.
 * @property {string} image - The URL of the project's image.
 * @property {Array<{name: string, icon: JSX.Element}>} techStack - An array of technologies used in the project.
 */

const projectsData : {
    title: string, 
    description: string, 
    link: string, 
    image: string, 
    techStack: {name: string, icon: JSX.Element}[]
}[] = [
    {
        title: "Example Project 1",
        description: "This is an example project description",
        link: "https://www.google.com",
        image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        techStack: [
            {
                name: "React",
                icon: <FaReact />
            },
            {
                name: "Node.js",
                icon: <FaNodeJs />
            },
            {
                name: "HTML",
                icon: <FaHtml5 />
            },
            {
                name: "CSS",
                icon: <FaCss3Alt />
            },
            {
                name: "JavaScript",
                icon: <FaJs />
            },
            {
                name: "Python",
                icon: <FaPython />
            },
        ]
    },
    {
        title: "Example Project 2",
        description: "This is an example project description which is longer than the previous one, like really long, so that we can see how it looks like in the card",
        link: "https://www.google.com",
        image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        techStack: [
            {
                name: "React",
                icon: <FaReact />
            },
            {
                name: "Node.js",
                icon: <FaNodeJs />
            },
            {
                name: "HTML",
                icon: <FaHtml5 />
            },
            {
                name: "CSS",
                icon: <FaCss3Alt />
            }, 
        ]
    },
    {
        title: "Example Project 3",
        description: "This is an example project description which is longer than the previous one, like really long, so that we can see how it looks like in the card, its EXTREMELY long, so that we can see how it looks like in the card \
        spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam",
        link: "https://www.google.com",
        image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        techStack: [
            {
                name: "React",
                icon: <FaReact />
            },
            {
                name: "Node.js",
                icon: <FaNodeJs />
            },
            {
                name: "HTML",
                icon: <FaHtml5 />
            },
            {
                name: "CSS",
                icon: <FaCss3Alt />
            },            
        ]
    },
    {
        title: "Example Project 4",
        description: "This is an example project description which is longer than the previous one, like really long, so that we can see how it looks like in the card, its EXTREMELY long, so that we can see how it looks like in the card \
        spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam",
        link: "https://www.google.com",
        image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        techStack: [
            {
                name: "React",
                icon: <FaReact />
            },
            {
                name: "Node.js",
                icon: <FaNodeJs />
            },
            {
                name: "HTML",
                icon: <FaHtml5 />
            },
            {
                name: "CSS",
                icon: <FaCss3Alt />
            },            
        ]
    },
    {
        title: "Example Project 5",
        description: "This is an example project description which is longer than the previous one, like really long, so that we can see how it looks like in the card, its EXTREMELY long, so that we can see how it looks like in the card \
        spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam",
        link: "https://www.google.com",
        image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        techStack: [
            {
                name: "React",
                icon: <FaReact />
            },
            {
                name: "Node.js",
                icon: <FaNodeJs />
            },
            {
                name: "HTML",
                icon: <FaHtml5 />
            },
            {
                name: "CSS",
                icon: <FaCss3Alt />
            },            
        ]
    },
    {
        title: "Example Project 6",
        description: "This is an example project description which is longer than the previous one, like really long, so that we can see how it looks like in the card, its EXTREMELY long, so that we can see how it looks like in the card \
        spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam",
        link: "https://www.google.com",
        image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        techStack: [
            {
                name: "React",
                icon: <FaReact />
            },
            {
                name: "Node.js",
                icon: <FaNodeJs />
            },
            {
                name: "HTML",
                icon: <FaHtml5 />
            },
            {
                name: "CSS",
                icon: <FaCss3Alt />
            },            
        ]
    },
    {
        title: "Example Project 7",
        description: "This is an example project description which is longer than the previous one, like really long, so that we can see how it looks like in the card, its EXTREMELY long, so that we can see how it looks like in the card \
        spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam",
        link: "https://www.google.com",
        image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        techStack: [
            {
                name: "React",
                icon: <FaReact />
            },
            {
                name: "Node.js",
                icon: <FaNodeJs />
            },
            {
                name: "HTML",
                icon: <FaHtml5 />
            },
            {
                name: "CSS",
                icon: <FaCss3Alt />
            },            
        ]
    },
    {
        title: "Example Project 8",
        description: "This is an example project description which is longer than the previous one, like really long, so that we can see how it looks like in the card, its EXTREMELY long, so that we can see how it looks like in the card \
        spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam",
        link: "https://www.google.com",
        image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        techStack: [
            {
                name: "React",
                icon: <FaReact />
            },
            {
                name: "Node.js",
                icon: <FaNodeJs />
            },
            {
                name: "HTML",
                icon: <FaHtml5 />
            },
            {
                name: "CSS",
                icon: <FaCss3Alt />
            },            
        ]
    },
    {
        title: "Example Project 9",
        description: "This is an example project description which is longer than the previous one, like really long, so that we can see how it looks like in the card, its EXTREMELY long, so that we can see how it looks like in the card \
        spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam",
        link: "https://www.google.com",
        image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        techStack: [
            {
                name: "React",
                icon: <FaReact />
            },
            {
                name: "Node.js",
                icon: <FaNodeJs />
            },
            {
                name: "HTML",
                icon: <FaHtml5 />
            },
            {
                name: "CSS",
                icon: <FaCss3Alt />
            },            
        ]
    },
    {
        title: "Example Project 10",
        description: "This is an example project description which is longer than the previous one, like really long, so that we can see how it looks like in the card, its EXTREMELY long, so that we can see how it looks like in the card \
        spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam",
        link: "https://www.google.com",
        image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        techStack: [
            {
                name: "React",
                icon: <FaReact />
            },
            {
                name: "Node.js",
                icon: <FaNodeJs />
            },
            {
                name: "HTML",
                icon: <FaHtml5 />
            },
            {
                name: "CSS",
                icon: <FaCss3Alt />
            },            
        ]
    },
    {
        title: "Example Project 11",
        description: "This is an example project description which is longer than the previous one, like really long, so that we can see how it looks like in the card, its EXTREMELY long, so that we can see how it looks like in the card \
        spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam",
        link: "https://www.google.com",
        image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        techStack: [
            {
                name: "React",
                icon: <FaReact />
            },
            {
                name: "Node.js",
                icon: <FaNodeJs />
            },
            {
                name: "HTML",
                icon: <FaHtml5 />
            },
            {
                name: "CSS",
                icon: <FaCss3Alt />
            },            
        ]
    },
]

export { projectsData, MAX_DESCRIPTION_LENGTH };