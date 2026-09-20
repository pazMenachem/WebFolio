import { JSX } from "react";
import type { Skill } from "../consts/SkillsConsts";

export default function SkillsRow({offset, data}: {offset: boolean, data: Skill[]}): JSX.Element {
    return (
        <div className={`skills-row ${offset ? "offset-row" : ""}`}>
            {data.map((item, cellIndex) => (
                <div
                    key={item.name}
                    className="skill-cell"
                    style={{'--delay': `${cellIndex * 0.2}s`} as React.CSSProperties}
                >
                    <span className="skill-icon" role="img" aria-label={item.name} title={item.name}>
                        {item.icon}
                    </span>
                </div>
            ))}
        </div>
    )
}
