import SkillsRow from "./SkillsRow";
import { JSX } from "react";
import type { Skill } from "../consts/SkillsConsts";

const MAX_ITEMS_PER_ROW = 6;

/**
 * Splits the skills into balanced rows, at most MAX_ITEMS_PER_ROW each.
 *
 * Balanced, not filled: seven skills become 4 + 3 rather than 6 + 1, so a
 * section never ends in a lone hexagon hanging off the left edge.
 *
 * Nothing is padded. The previous version filled every last row up to six
 * with invisible spacer cells purely to keep the honeycomb offset aligned,
 * which reserved a full row of dead space for a section with two skills.
 */
function getRows(data: Skill[]): Skill[][] {
    if (data.length === 0) {
        return [];
    }

    const rowCount = Math.ceil(data.length / MAX_ITEMS_PER_ROW);
    const perRow = Math.ceil(data.length / rowCount);
    const rows: Skill[][] = [];

    for (let i = 0; i < data.length; i += perRow) {
        rows.push(data.slice(i, i + perRow));
    }

    return rows;
}

/**
 * Whether a row needs the half-cell shift that makes it nest into the row
 * above.
 *
 * Rows are centred, so two rows whose lengths differ by an odd number are
 * already half a cell out of step with each other and nest on their own. Only
 * an even difference - two rows of the same length, most often - needs the
 * shift added. Keying this off the row index instead (every other row) is
 * what breaks a 4 + 3 section: the shift cancels the natural offset and the
 * hexagons stack directly on top of each other.
 */
function needsOffset(rows: Skill[][], index: number): boolean {
    if (index === 0) {
        return false;
    }

    return (rows[index - 1].length - rows[index].length) % 2 === 0;
}

export default function SkillsGrid({title, data}: {title: string, data: Skill[]}): JSX.Element {
    const rows = getRows(data);

    return (
        <div className="skills-section">
            <h2 className="skills-title">{title}</h2>
            <div className="skills-grid">
                {rows.map((rowData, index) => (
                    <SkillsRow
                        key={index}
                        offset={needsOffset(rows, index)}
                        data={rowData}
                    />
                ))}
            </div>
        </div>
    );
}

export { getRows, needsOffset, MAX_ITEMS_PER_ROW };
