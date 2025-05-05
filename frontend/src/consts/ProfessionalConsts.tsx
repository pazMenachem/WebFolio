import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import { JSX } from "react";

const SCHOOL_ICON_STYLE = { background: 'rgb(33, 150, 243)', color: '#aaa' };
const WORK_ICON_STYLE = { background: 'rgb(33, 150, 243)', color: '#aaa' };
const STAR_ICON_STYLE = { background: 'rgb(33, 150, 243)', color: '#aaa' };
const CONTENT_STYLE = { background: 'rgb(33, 150, 243)', color: '#aaa' };
const CONTENT_ARROW_STYLE = { borderRight: '5px solid  rgb(33, 150, 243)' };
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
    iconStyle: React.CSSProperties
}[] = [
    {
        title: "Example work Title",
        company: "Example work Company",
        description: "Example work Description",
        date: "Example work Date",
        icon: <WorkIcon />,
        iconStyle: WORK_ICON_STYLE,
    },
    {
        title: "Example School Title",
        company: "Example School Company",
        description: "Example School Description",
        date: "Example School Date",
        icon: <SchoolIcon />,
        iconStyle: SCHOOL_ICON_STYLE,
    },
    {
        title: "Example work Title",
        company: "Example work Company",
        description: "Example work Description",
        date: "Example work Date",
        icon: <WorkIcon />,
        iconStyle: WORK_ICON_STYLE,
    },
    {
        title: "Example School Title",
        company: "Example School Company",
        description: "Example School Description",
        date: "Example School Date",
        icon: <SchoolIcon />,
        iconStyle: SCHOOL_ICON_STYLE,
    },
    {
        title: "Example work Title",
        company: "Example work Company",
        description: "Example work Description",
        date: "Example work Date",
        icon: <WorkIcon />,
        iconStyle: WORK_ICON_STYLE,
    },
    {
        title: "Example School Title",
        company: "Example School Company",
        description: "Example School Description",
        date: "Example School Date",
        icon: <SchoolIcon />,
        iconStyle: SCHOOL_ICON_STYLE,
    },
    {
        title: "Example work Title",
        company: "Example work Company",
        description: "Example work Description",
        date: "Example work Date",
        icon: <WorkIcon />,
        iconStyle: WORK_ICON_STYLE,
    },
    {
        title: "Example School Title",
        company: "Example School Company",
        description: "Example School Description",
        date: "Example School Date",
        icon: <SchoolIcon />,
        iconStyle: SCHOOL_ICON_STYLE,
    },
    {
        title: "Example work Title",
        company: "Example work Company",
        description: "Example work Description",
        date: "Example work Date",
        icon: <WorkIcon />,
        iconStyle: WORK_ICON_STYLE,
    },
    {
        title: "Example School Title",
        company: "Example School Company",
        description: "Example School Description",
        date: "Example School Date",
        icon: <SchoolIcon />,
        iconStyle: SCHOOL_ICON_STYLE,
    },
    {
        title: null,
        company: null,
        description: null,
        date: null,
        icon: <StarIcon />,
        iconStyle: STAR_ICON_STYLE
    },
];

export { professionalData, VERTICAL_TIMELINE_ELEMENT_STYLE, CONTENT_STYLE, CONTENT_ARROW_STYLE, CONTENT_STYLE_HIDDEN };

