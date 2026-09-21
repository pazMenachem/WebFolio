import SkillsRow from "./SkillsRow";
import { JSX } from "react";
import type { Skill } from "../consts/SkillsConsts";
import useMediaQuery from "../hooks/useMediaQuery";

const ITEMS_PER_ROW_DESKTOP = 6;
const ITEMS_PER_ROW_MOBILE = 4;
const DESKTOP_QUERY = "(min-width: 768px)";

/**
 * Splits the skills into balanced rows, at most maxPerRow each.
 *
 * Balanced, not filled: seven skills become 4 + 3 rather than 6 + 1, so a
 * section never ends in a lone hexagon hanging off the left edge, and
 * nothing is padded with invisible cells.
 */
function getRows(data: Skill[], maxPerRow: number): Skill[][] {
    if (data.length === 0) {
        return [];
    }

    const rowCount = Math.ceil(data.length / maxPerRow);
    const perRow = Math.ceil(data.length / rowCount);
    const rows: Skill[][] = [];

    for (let i = 0; i < data.length; i += perRow) {
        rows.push(data.slice(i, i + perRow));
    }

    return rows;
}

/**
 * Which rows get the half-cell shift that makes them nest into the row above.
 *
 * Rows are centred, so two rows whose lengths differ by an odd number are
 * already half a cell out of step and nest on their own; only an even
 * difference needs the shift. The shift is a single fixed translateX, so
 * whether a row needs it depends on whether the row above it is already
 * shifted - it accumulates down the section rather than being decided by
 * each adjacent pair in isolation.
 *
 * With at most two rows per section the distinction never showed. At four
 * per row a section can run to three rows, and deciding each pair on its own
 * would shift two consecutive rows by the same amount and align them instead
 * of nesting them.
 */
function getOffsets(rows: Skill[][]): boolean[] {
    const offsets: boolean[] = [];

    rows.forEach((row, index) => {
        if (index === 0) {
            offsets.push(false);
            return;
        }

        const evenDifference = (rows[index - 1].length - row.length) % 2 === 0;
        offsets.push(evenDifference ? !offsets[index - 1] : offsets[index - 1]);
    });

    return offsets;
}

export default function SkillsGrid({title, data}: {title: string, data: Skill[]}): JSX.Element {
    const isDesktop = useMediaQuery(DESKTOP_QUERY);
    const rows = getRows(data, isDesktop ? ITEMS_PER_ROW_DESKTOP : ITEMS_PER_ROW_MOBILE);
    const offsets = getOffsets(rows);

    return (
        <div className="skills-section">
            <h2 className="skills-title">{title}</h2>
            <div className="skills-grid">
                {rows.map((rowData, index) => (
                    <SkillsRow key={index} offset={offsets[index]} data={rowData} />
                ))}
            </div>
        </div>
    );
}

export { getRows, getOffsets, ITEMS_PER_ROW_DESKTOP, ITEMS_PER_ROW_MOBILE };
