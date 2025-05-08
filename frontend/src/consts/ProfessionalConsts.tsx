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
        title: "Example work Title",
        company: "Example work Company",
        description: "Example work Description",
        date: "Example work Date",
        icon: <WorkIcon />,
    },
    {
        title: "Example School Title",
        company: "Example School Company",
        description: "Example School Description",
        date: "Example School Date",
        icon: <SchoolIcon />,
    },
    {
        title: "Example work Title",
        company: "Example work Company",
        description: "Example work Description",
        date: "Example work Date",
        icon: <WorkIcon />,
    },
    {
        title: "Example School Title",
        company: "Example School Company",
        description: "Example School Description",
        date: "Example School Date",
        icon: <SchoolIcon />,
    },
    {
        title: "Example work Title",
        company: "Example work Company",
        description: "Example work Description",
        date: "Example work Date",
        icon: <WorkIcon />,
    },
    {
        title: "Example School Title",
        company: "Example School Company",
        description: "Example School Description",
        date: "Example School Date",
        icon: <SchoolIcon />,
    },
    {
        title: "Example work Title",
        company: "Example work Company",
        description: "Example work Description",
        date: "Example work Date",
        icon: <WorkIcon />,
        
    },
    {
        title: "Example School Title",
        company: "Example School Company",
        description: "Example School Description",
        date: "Example School Date",
        icon: <SchoolIcon />,
        
    },
    {
        title: "Example work Title",
        company: "Example work Company",
        description: "Example work Description",
        date: "Example work Date",
        icon: <WorkIcon />,
        
    },
    {
        title: "Example School Title",
        company: "Example School Company",
        description: "Example School Description",
        date: "Example School Date",
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

