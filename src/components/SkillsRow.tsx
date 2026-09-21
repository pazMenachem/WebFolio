import { JSX } from "react";
import type { Skill } from "../consts/SkillsConsts";

/**
 * The hexagon is clipped and rotated, and clip-path clips its children, so a
 * label cannot live inside it. Each skill is therefore a wrapper holding the
 * hexagon and the label as siblings: the hexagon keeps its rotation and the
 * icon its counter-rotation, while the label sits outside both and needs
 * neither.
 */
export default function SkillsRow({offset, data}: {offset: boolean, data: Skill[]}): JSX.Element {
    return (
        <div className={`skills-row ${offset ? "offset-row" : ""}`}>
            {data.map((item, cellIndex) => (
                <div className="skill" key={item.name}>
                    <div
                        className="skill-cell"
                        style={{'--delay': `${cellIndex * 0.06}s`} as React.CSSProperties}
                    >
                        <span className="skill-icon" aria-hidden="true">
                            {item.icon}
                        </span>
                    </div>
                    <span className="skill-title">{item.name}</span>
                </div>
            ))}
        </div>
    )
}
