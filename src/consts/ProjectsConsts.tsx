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

const MAX_DESCRIPTION_LENGTH = 450;

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
        description: "An HR performance-review platform that all 80 people at Copyleaks run their review cycle through, and one of the two systems I built that were in scope for the company SOC 2 audit. Built end to end: Keycloak OIDC for sign-in, role-based access control so a reviewer only ever sees their own cycle, and private file storage for review documents. Internal, so there is no public repository.",
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
        description: "The tool the Copyleaks IT and security team runs the day on, and the second of the two systems in scope for the company SOC 2 audit. It pulls device inventory from two MDM platforms and the employee directory from the company IdP so the two stay in sync, and turns onboarding and offboarding into tracked checklists instead of remembered steps. Internal, so there is no public repository.",
        techStack: [
            { name: "Next.js", icon: <SiNextdotjs /> },
            { name: "TypeScript", icon: <SiTypescript /> },
            { name: "Firestore", icon: <SiFirebase /> },
            { name: "Cloud Run", icon: <SiGooglecloud /> },
        ]
    },
    {
        title: "My_Internet",
        description: "A home internet filter that blocks domains and ad traffic from inside the Linux kernel. The filtering happens at the packet level, before the browser or the DNS resolver sees the request. A Python management interface and a SQLite rule store change the policy without reloading the module.",
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
        description: "A scheduler that reads job listings with an LLM and messages the matches to Telegram. It crawls the listings, filters them, and runs unattended in Docker on a schedule. Factories behind the LLM and the notification layer mean a different model or a different channel is a new provider rather than a rewrite.",
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
        description: "A personal assistant that runs on a Raspberry Pi on my own network, built on the Claude Agent SDK. API integration and tool design on one side; on the other, running it as a managed service and securing a self-hosted device that is reachable from the network.",
        techStack: [
            { name: "Claude Agent SDK", icon: <SiAnthropic /> },
            { name: "Python", icon: <FaPython /> },
            { name: "Raspberry Pi", icon: <SiRaspberrypi /> },
            { name: "Linux", icon: <FaLinux /> },
        ]
    },
    {
        title: "Trivia Game",
        description: "A multiplayer trivia game with its own C++ server and wire protocol, and a C# desktop client. The server is multithreaded, one thread per connected client, with a request-handler factory, a custom JSON protocol over TCP, and SQLite behind it for accounts and questions.",
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
        description: "This site. React, TypeScript and Vite, built and deployed to GitHub Pages from the same repository.",
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
        description: "A site that walks students through their first open-source contribution: the setup steps, the resources, and a starting path for newcomers who have never opened a pull request.",
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
        description: "Built in a team of five under Red Hat mentorship during the Red Hat Beyond course. A web application for organising a joint food purchase, so a group buys together, cuts out the middleman and pays less per person.",
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
        description: "A scratch repository where I try things out: small programs across C++, Python and JavaScript, deliberately kept apart from anything that has to keep working.",
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
