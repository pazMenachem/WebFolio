import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import { JSX } from "react";

const ICON_STYLE = { background: 'rgb(230, 18, 18)', color: '#aaa', boxShadow: '0 0 10px 4px #4f4242' };
const CONTENT_STYLE = { background: 'rgb(128, 11, 11)', color: '#aaa', boxShadow: '0 0 10px 4px #4f4242' };
const CONTENT_ARROW_STYLE = { borderRight: '15px solid  rgb(128, 11, 11)' };
const LINE_COLOR = '#4f4242';
const CONTENT_STYLE_HIDDEN = { 'visibility': 'hidden' } as React.CSSProperties;
const VERTICAL_TIMELINE_ELEMENT_STYLE = "vertical-timeline-element";

/**
 * Array of professional data objects.
 * Each object contains:
 * @property {string} title - The title of the position or role.
 * @property {string} company - The name of the company or organization.
 * @property {string} description - A brief description of the role or experience.
 * @property {string} date - The date or duration of the role.
 * @property {JSX.Element} icon - The icon representing the role (WorkIcon or SchoolIcon).
 * @property {React.CSSProperties} iconStyle - The style applied to the icon - No need to set.
 * 
 * Note - The last object is a star icon representing the begining of the timeline.
 */
const professionalData : {
    title: string | null,
    company: string | null,
    description: string | null,
    date: string | null, 
    icon: JSX.Element, 
}[] = [
    {
        title: "Assigment Reviewer & Bootcamp Mentor",
        company: "Start-Up Nation Central",
        description: `Mentored student teams during the Excellanteam BootCamp.\n` +
        "Supported backend project planning, architecture design, and team organization.\n" +
        "Acted as a project lead and technical point of contact, helping teams improve code structure, collaboration, and development processes.",
        date: "March 2025 - September 2025",
        icon: <WorkIcon />,
    },
    {
        title: "Full-Stack Web Development Course",
        company: "Udemy",
        description: "The Complete Full-Stack Web Development Bootcamp by Dr. Angela Yu.\n" +
        "Learned about the basics of web development, including HTML, CSS, JavaScript, and React.",
        date: "April 2025",
        icon: <SchoolIcon />,
    },
    {
        title: "Top 150 interview questions",
        company: "LeetCode",
        description: "Solved 150 interview questions from LeetCode.",
        date: "April 2025",
        icon: <SchoolIcon />,
    },
    {
        title: "BS.c in Computer Science",
        company: "Tel-Hai Academic College",
        description: "Bachelor of Science in Computer Science with a focus on software development and Web development.",
        date: "Graduated in 2024",
        icon: <SchoolIcon />,
    },
    {
        title: "Excellenteam in Academia Bootcamp",
        company: "Tel-Hai Academic College / Start-Up Nation Central",
        description: "Excellenteam in Academia Software Development Bootcamp.\n" +
        "Worked with mentors from the Israeli high-tech industry, improving problem-solving skills and software architecture knowledge.",
        date: "September 2024",
        icon: <SchoolIcon />,
    },
    {
        title: "Ethical Hacking",
        company: "Udemy",
        description: "Learn Ethical Hacking From Scratch by Zaid Sabih.\n" +
        "Learned about the basics of ethical hacking, network security, and penetration testing.",
        date: "August 2023",
        icon: <SchoolIcon />,
    },
    {
        title: "Red Hat Beyond course",
        company: "Tel-Hai Academic College / Red Hat",
        description: "Divided into teams of four, and guided by experienced Red Hat mentors, we developed a Django-based application from the ground up.",
        date: "January 2023",
        icon: <SchoolIcon />,
    },
    {
        title: "Programming Teacher",
        company: "Israel Cyber Campus - Magshimim",
        description: `Taught C++ programming to 11th-grade students and computer networks to 10th-grade students.\n` +
        `Focused on coding best practices, Git version control, and hands-on projects.\n` + 
        `Prepared students for elite IDF cyber units, achieving a 2/3 acceptance rate.`,
        date: "2022 - 2024",
        icon: <WorkIcon />,
    },
    {
        title: "Combat Fighter - Tank Corps",
        company: "Israel Defense Forces",
        description: "Tank loader in 7th brigade 75th battalion.",
        date: "2013 - 2016",
        icon: <WorkIcon />,
    },
    {
        title: "Herzog High School",
        company: "Kfar Saba",
        description: "High School Diploma with Computer Science 5 units",
        date: "2009 - 2012",
        icon: <SchoolIcon />,
    },
    {
        title: null,
        company: null,
        description: null,
        date: null,
        icon: <StarIcon />,
    },
];

export { 
    professionalData, 
    VERTICAL_TIMELINE_ELEMENT_STYLE, 
    CONTENT_STYLE, 
    CONTENT_ARROW_STYLE, 
    CONTENT_STYLE_HIDDEN, 
    LINE_COLOR,
    ICON_STYLE
};

