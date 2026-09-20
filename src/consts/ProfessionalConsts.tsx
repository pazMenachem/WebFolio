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
        title: "IT & Security Engineer",
        company: "Copyleaks",
        description: `Sole IT and security engineer for an 80-person SaaS company, reporting to the CISO.\n` +
        "Built the performance-review platform the whole company runs its review cycle through, and Manage-IT, the tool the IT and security team runs the day on. Both in daily use, both in scope for the company SOC 2 audit.\n" +
        "Harden the cloud networks across GCP and Oracle Cloud: firewall rules, network policy, least-privilege access design and recurring access reviews.\n" +
        "Led the technical evidence work for the SOC 2 Type II audit, and automate the operational workflows in Python, Bash and n8n across cloud, identity and endpoint systems.",
        date: "January 2026 - Present",
        icon: <WorkIcon />,
    },
    {
        title: "Teaching Assistant & Mentor",
        company: "Excellenteam / Start-Up Nation Central",
        description: `Invited back after completing the bootcamp.\n` +
        "Graded student exercises for a full semester, then mentored teams on projects sponsored by NVIDIA, Google and Check Point.\n" +
        "Supported backend architecture, project planning and development process.",
        date: "March 2025 - August 2025",
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
        description: "Bachelor of Science in Computer Science. Graduated with an average of 85.",
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
        description: `Taught C++ to 11th-graders and computer networks to 10th-graders, through hands-on projects with Git version control.\n` +
        `Prepared 40+ students for elite IDF cyber units. Two thirds got in.`,
        date: "2022 - 2024",
        icon: <WorkIcon />,
    },
    {
        title: "Combat Soldier - Armored Corps",
        company: "Israel Defense Forces",
        description: "Tank loader in the 7th Brigade, 75th Battalion.",
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
