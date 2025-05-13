import { JSX } from "react";

export default function SkillsRow({index, data}: {index: number, data: {name: string, icon: string}[]}): JSX.Element {
    return (
        <div className={`skills-row ${index % 2 === 0 ? "" : "offset-row"}`}>
            {data.map((item, index) => (
                <div className={`skill-cell ${item.name? "" : "hidden"}`} style={{'--delay': `${index * 0.2}s`} as React.CSSProperties}>
                    <img className="skill-icon" src={item.icon} alt={item.name} title={item.name}/>
                </div>
            ))}
        </div>
    )
}
