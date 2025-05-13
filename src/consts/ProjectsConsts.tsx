import myInternetImage from "../assets/MyInternet.webp";
import TriviaGameImage from "../assets/TriviaGame.webp";
import JobSeekPlayGroundImage from "../assets/JobSeekPlayGround.webp";
import WebFolioImage from "../assets/WebFolio.webp";
import CodeToGether from "../assets/CodeToGether.webp";
import BuyTogether from "../assets/BuyTogether.webp";


import {
    FaLinux , FaPython,
    FaReact, FaCss3Alt, FaHtml5,
    FaNodeJs,
    FaFlask, FaRedhat 
    } from "react-icons/fa";
import {
    SiPytest, SiGnubash, SiSqlite,
    SiJavascript, SiSelenium,
    SiTypescript, SiVite, SiTailwindcss,
    SiRedux, SiMongodb,
    SiDjango, SiVagrant 
    } from "react-icons/si";
import {
    TbCircleLetterCFilled,
    TbBrandCpp, TbBrandCSharp 
    } from "react-icons/tb";
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
 * 
 * Icons:
 * https://react-icons.github.io/react-icons/
 */

const projectsData : {
    title: string, 
    description: string, 
    link: string, 
    image: string, 
    techStack: {name: string, icon: JSX.Element}[]
}[] = [
    {
        title: "My_Internet",
        description: "A powerful network filtering solution that combines kernel-level packet inspection with user-friendly controls for managing internet access and content filtering.",
        link: "https://github.com/pazMenachem/My_Internet",
        image: myInternetImage,
        techStack: [
            {
                name: "Python",
                icon: <FaPython />
            },
            {
                name: "Linux",
                icon: <FaLinux />
            },
            {
                name: "C",
                icon: <TbCircleLetterCFilled />
            },
            {
                name: "Pytest",
                icon: <SiPytest />
            },
            {
                name: "BashScript",
                icon: <SiGnubash />
            },
            {
                name: "Sqlite",
                icon: <SiSqlite />
            },
        ]
    },
    {
        title: "Trivia Game",
        description: "A multiplayer trivia game with a client-server architecture, featuring real-time gameplay, room management, and user authentication.",
        link: "https://github.com/pazMenachem/Trivia_Game",
        image: TriviaGameImage,
        techStack: [
            {
                name: "C++",
                icon: <TbBrandCpp />
            },
            {
                name: "C#",
                icon: <TbBrandCSharp />
            },
            {
                name: "Sqlite",
                icon: <SiSqlite />
            },
        ]
    },
    {
        title: "JobSeekPlayGround",
        description: "Personal learning project built to explore and practice core concepts in software development. It serves as a sandbox for experimenting with a wide range of technologies and programming principles across both frontend and backend domains.",
        link: "https://github.com/pazMenachem/JobSeekPlayGround",
        image: JobSeekPlayGroundImage,
        techStack: [
            {
                name: "C++",
                icon: <TbBrandCpp />
            },
            {
                name: "Javascript",
                icon: <SiJavascript />
            },
            {
                name: "Selenium",
                icon: <SiSelenium />
            },
            {
                name: "Python",
                icon: <FaPython />
            },
        ]
    },
    {
        title: "WebFolio",
        description: "A sleek and modern personal portfolio website built with React, Vite, and Tailwind CSS. Perfect for showcasing your skills, projects, and professional experience in a clean and responsive design. ",
        link: "https://github.com/pazMenachem/WebFolio",
        image: WebFolioImage,
        techStack: [
            {
                name: "React",
                icon: <FaReact />
            },
            {
                name: "Typescript",
                icon: <SiTypescript />
            },
            {
                name: "Vite",
                icon: <SiVite />
            },
            {
                name: "Tailwindcss",
                icon: <SiTailwindcss />
            },
            {
                name: "Html",
                icon: <FaHtml5 />
            },
            {
                name: "Css",
                icon: <FaCss3Alt />
            },
        ]
    },
    {
        title: "CodeToGether",
        description: "A great platform for bridging the practical gap for students learning open-source development. This project provides clear instructions, resources, and a welcoming environment to help newcomers confidently enter the world of open source.",
        link: "https://github.com/pazMenachem/CodeToGether",
        image: CodeToGether,
        techStack: [
            {
                name: "React",
                icon: <FaReact />
            },
            {
                name: "Javascript",
                icon: <SiJavascript />
            },
            {
                name: "NodeJs",
                icon: <FaNodeJs />
            },
            {
                name: "Mongodb",
                icon: <SiMongodb />
            },
            {
                name: "Html",
                icon: <FaHtml5 />
            },
            {
                name: "Css",
                icon: <FaCss3Alt />
            },
            {
                name: "Redux",
                icon: <SiRedux />
            },
        ]
    },
    {
        title: "BuyTogether",
        description: "developed a web application that is supposed to help people group up, and organize a joint food purchase. Doing so, we remove the middlemen and reduce the price of the food products.",
        link: "https://github.com/redhat-beyond/BuyTogether",
        image: BuyTogether,
        techStack: [
            {
                name: "Django",
                icon: <SiDjango />
            },
            {
                name: "Flask",
                icon: <FaFlask />
            },
            {
                name: "Redhat",
                icon: <FaRedhat />
            },
            {
                name: "Vagrant",
                icon: <SiVagrant />
            },
            {
                name: "Html",
                icon: <FaHtml5 />
            },
            {
                name: "Css",
                icon: <FaCss3Alt />
            },
            {
                name: "Python",
                icon: <FaPython />
            },
        ]
    },
]

export { projectsData, MAX_DESCRIPTION_LENGTH };
