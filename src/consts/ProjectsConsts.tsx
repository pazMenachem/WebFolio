import myInternetImage from "../assets/MyInternet.webp";
import TriviaGameImage from "../assets/TriviaGame.webp";
import JobSeekPlayGroundImage from "../assets/JobSeekPlayGround.webp";
import WebFolioImage from "../assets/WebFolio.webp";
import CodeToGether from "../assets/CodeToGether.webp";
import BuyTogether from "../assets/BuyTogether.webp";
import JobHunter from "../assets/JobHunterPicture.png";

import {
    FaLinux, FaPython,
    FaReact, FaCss3Alt, FaHtml5,
    FaNodeJs,
    FaFlask, FaRedhat, FaDocker
    } from "react-icons/fa";
import {
    SiPytest, SiGnubash, SiSqlite,
    SiJavascript, SiSelenium,
    SiTypescript, SiVite, SiTailwindcss,
    SiRedux, SiMongodb,
    SiDjango, SiVagrant,
    SiNextdotjs, SiFastify, SiFirebase,
    SiGooglecloud, SiKeycloak, SiAnthropic,
    SiRaspberrypi
    } from "react-icons/si";
import {
    TbCircleLetterCFilled,
    TbBrandCpp, TbBrandCSharp
    } from "react-icons/tb";
import { JSX } from "react";

const MAX_DESCRIPTION_LENGTH = 340;

/**
 * Array of project data objects.
 * Each object contains:
 * @property {string} title - The title of the project.
 * @property {string} description - A brief description of the project.
 * @property {string} [link] - A URL link to the project. Omitted for the
 *   internal Copyleaks platforms, which have no public repository.
 * @property {string} [image] - The project's image. Omitted where no
 *   shareable screenshot exists; the card falls back to a title block.
 * @property {Array<{name: string, icon: JSX.Element}>} techStack - An array of technologies used in the project.
 *
 * Icons:
 * https://react-icons.github.io/react-icons/
 */

const projectsData: {
    title: string,
    description: string,
    link?: string,
    image?: string,
    techStack: { name: string, icon: JSX.Element }[]
}[] = [
    {
        title: "HR Performance-Review Platform",
        description: "Built end to end at Copyleaks and rolled out to all 80 employees, and in scope for the company SOC 2 audit. Keycloak OIDC authentication, role-based access control so reviewers only ever see their own cycle, and private file storage for review documents.",
        techStack: [
            { name: "Next.js", icon: <SiNextdotjs /> },
            { name: "Fastify", icon: <SiFastify /> },
            { name: "TypeScript", icon: <SiTypescript /> },
            { name: "Firestore", icon: <SiFirebase /> },
            { name: "Cloud Run", icon: <SiGooglecloud /> },
            { name: "Keycloak", icon: <SiKeycloak /> },
        ]
    },
    {
        title: "Manage-IT",
        description: "Built at Copyleaks and used daily by the IT and security team, and in scope for the company SOC 2 audit. Integrates two MDM APIs and the company IdP to keep device inventory and the employee directory in sync, and runs onboarding and offboarding as tracked, repeatable checklists.",
        techStack: [
            { name: "Next.js", icon: <SiNextdotjs /> },
            { name: "TypeScript", icon: <SiTypescript /> },
            { name: "Firestore", icon: <SiFirebase /> },
            { name: "Cloud Run", icon: <SiGooglecloud /> },
        ]
    },
    {
        title: "My_Internet",
        description: "A Linux kernel module written in C that filters domains and ad traffic at the packet level, rather than at the browser or DNS layer. Paired with a Python management interface and a SQLite store for the rule set, so the filtering policy can change without reloading the module.",
        link: "https://github.com/pazMenachem/My_Internet",
        image: myInternetImage,
        techStack: [
            { name: "C", icon: <TbCircleLetterCFilled /> },
            { name: "Linux", icon: <FaLinux /> },
            { name: "Python", icon: <FaPython /> },
            { name: "Sqlite", icon: <SiSqlite /> },
            { name: "Pytest", icon: <SiPytest /> },
            { name: "BashScript", icon: <SiGnubash /> },
        ]
    },
    {
        title: "JobHunter",
        description: "An automated job-search pipeline in Python: it crawls listings, filters them with an LLM, and pushes the matches to Telegram or email. Provider-based architecture with factories for the LLM and notification layers, so a new model or channel is a new provider rather than a rewrite. Dockerised, on scheduled runs.",
        link: "https://github.com/pazMenachem/JobHunter",
        image: JobHunter,
        techStack: [
            { name: "Python", icon: <FaPython /> },
            { name: "Docker", icon: <FaDocker /> },
            { name: "Linux", icon: <FaLinux /> },
        ]
    },
    {
        title: "Self-hosted AI agent",
        description: "A personal assistant built on the Claude Agent SDK and deployed on a Raspberry Pi. Covered API integration, tool design, running it as a managed service, and securing a self-hosted device that is exposed to the network.",
        techStack: [
            { name: "Claude Agent SDK", icon: <SiAnthropic /> },
            { name: "Python", icon: <FaPython /> },
            { name: "Raspberry Pi", icon: <SiRaspberrypi /> },
            { name: "Linux", icon: <FaLinux /> },
        ]
    },
    {
        title: "Trivia Game",
        description: "A multithreaded C++ socket server with a request-handler factory, a custom JSON protocol over TCP and SQLite persistence, paired with a C# WinForms client. Room management and user authentication are handled server-side, one thread per connected client.",
        link: "https://github.com/pazMenachem/Trivia_Game",
        image: TriviaGameImage,
        techStack: [
            { name: "C++", icon: <TbBrandCpp /> },
            { name: "C#", icon: <TbBrandCSharp /> },
            { name: "Sqlite", icon: <SiSqlite /> },
        ]
    },
    {
        title: "WebFolio",
        description: "This site. A personal portfolio built with React, TypeScript, Vite and Tailwind CSS, deployed to GitHub Pages.",
        link: "https://github.com/pazMenachem/WebFolio",
        image: WebFolioImage,
        techStack: [
            { name: "React", icon: <FaReact /> },
            { name: "Typescript", icon: <SiTypescript /> },
            { name: "Vite", icon: <SiVite /> },
            { name: "Tailwindcss", icon: <SiTailwindcss /> },
            { name: "Html", icon: <FaHtml5 /> },
            { name: "Css", icon: <FaCss3Alt /> },
        ]
    },
    {
        title: "CodeToGether",
        description: "A platform for bridging the practical gap for students learning open-source development, with instructions, resources and a guided path for newcomers making their first contributions.",
        link: "https://github.com/pazMenachem/CodeToGether",
        image: CodeToGether,
        techStack: [
            { name: "React", icon: <FaReact /> },
            { name: "Javascript", icon: <SiJavascript /> },
            { name: "NodeJs", icon: <FaNodeJs /> },
            { name: "Mongodb", icon: <SiMongodb /> },
            { name: "Redux", icon: <SiRedux /> },
        ]
    },
    {
        title: "BuyTogether",
        description: "Built in a team of five under Red Hat mentorship during the Red Hat Beyond course. A web application that helps people group up and organise a joint food purchase, removing the middlemen and reducing the price of the products.",
        link: "https://github.com/redhat-beyond/BuyTogether",
        image: BuyTogether,
        techStack: [
            { name: "Django", icon: <SiDjango /> },
            { name: "Python", icon: <FaPython /> },
            { name: "Flask", icon: <FaFlask /> },
            { name: "Redhat", icon: <FaRedhat /> },
            { name: "Vagrant", icon: <SiVagrant /> },
        ]
    },
    {
        title: "JobSeekPlayGround",
        description: "A practice repository for core software-development concepts across frontend and backend, used to try out technologies outside the constraints of a production project.",
        link: "https://github.com/pazMenachem/JobSeekPlayGround",
        image: JobSeekPlayGroundImage,
        techStack: [
            { name: "C++", icon: <TbBrandCpp /> },
            { name: "Python", icon: <FaPython /> },
            { name: "Javascript", icon: <SiJavascript /> },
            { name: "Selenium", icon: <SiSelenium /> },
        ]
    },
]

export { projectsData, MAX_DESCRIPTION_LENGTH };
