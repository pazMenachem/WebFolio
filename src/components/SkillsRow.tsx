import { JSX } from "react";
import type { Skill } from "../consts/SkillsConsts";

export default function SkillsRow({index, data}: {index: number, data: Skill[]}): JSX.Element {
    return (
        <div className={`skills-row ${index % 2 === 0 ? "" : "offset-row"}`}>
            {data.map((item, cellIndex) => (
                <div
                    key={item.name || `spacer-${cellIndex}`}
                    className={`skill-cell ${item.name ? "" : "skill-cell-hidden"}`}
                    style={{'--delay': `${cellIndex * 0.2}s`} as React.CSSProperties}
                >
                    {item.name && (
                        <span className="skill-icon" role="img" aria-label={item.name} title={item.name}>
                            {item.icon}
                        </span>
                    )}
                </div>
            ))}
        </div>
    )
}
