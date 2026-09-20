import SkillsRow from "./SkillsRow";
import { JSX } from "react";
import type { Skill } from "../consts/SkillsConsts";

const ITEMS_PER_ROW = 6;

/**
 * Splits the skills into rows of ITEMS_PER_ROW, padding the last row with
 * nameless spacers so the offset honeycomb keeps its shape.
 */
function getRows(data: Skill[]): Skill[][] {
    const rows: Skill[][] = [];

    for (let i = 0; i < data.length; i += ITEMS_PER_ROW) {
        rows.push(data.slice(i, i + ITEMS_PER_ROW));
    }

    if (rows.length === 0) {
        return rows;
    }

    const lastRow = rows[rows.length - 1];
    while (lastRow.length < ITEMS_PER_ROW) {
        lastRow.push({ name: "", icon: <></> });
    }

    return rows;
}

export default function SkillsGrid({title, data}: {title: string, data: Skill[]}): JSX.Element {
    const rows = getRows(data);

    return (
        <div className="skills-section">
            <h2 className="skills-title">{title}</h2>
            <div className="skills-grid">
                {rows.map((rowData, index) => (
                    <SkillsRow key={index} index={index} data={rowData} />
                ))}
            </div>
        </div>
    );
}
