import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { 
    professionalData, 
    VERTICAL_TIMELINE_ELEMENT_STYLE, 
    CONTENT_STYLE, 
    CONTENT_ARROW_STYLE, 
    CONTENT_STYLE_HIDDEN,
    LINE_COLOR,
    ICON_STYLE
} from '../consts/ProfessionalConsts';
import { JSX } from "react";

export default function Professional(): JSX.Element {
    return (
        <VerticalTimeline lineColor={LINE_COLOR}>
            {professionalData.map((item, index) => (
                <VerticalTimelineElement
                    key={index}
                    className={VERTICAL_TIMELINE_ELEMENT_STYLE}
                    contentStyle={item.title ? CONTENT_STYLE : CONTENT_STYLE_HIDDEN}
                    contentArrowStyle={CONTENT_ARROW_STYLE}
                    date={item.date?? undefined}
                    iconStyle={ICON_STYLE}
                    icon={item.icon}
                >
                    {item.title && <h3>{item.title}</h3>}
                    {item.company && <h4>{item.company}</h4>}
                    {item.description && <p>{item.description}</p>}
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    )
}
