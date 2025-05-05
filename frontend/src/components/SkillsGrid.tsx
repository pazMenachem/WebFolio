import SkillsRow from "./SkillsRow";
import { JSX } from "react";

function getRows(data: {name: string, icon: string}[]) {
    const itemsPerRow = 6;
    const rows: {name: string, icon: string}[][] = [];
    
    for (let i = 0; i < data.length; i += itemsPerRow) {
        const rowItems = data.slice(i, i + itemsPerRow);
        rows.push(rowItems);
    }
    
    if (rows[rows.length - 1].length !== itemsPerRow){
        const lastRow = rows[rows.length - 1];
        const lastRowLength = lastRow.length;
        for (let i = 0; i < itemsPerRow - lastRowLength; i++){
            lastRow.push({name: "", icon: ""});
        }
    }
    return rows;
}
export default function SkillsGrid({title, data}: {title: string, data: {name: string, icon: string}[]}): JSX.Element {
    const rows = getRows(data);
    
    return (
        <div className="skills-container">
        <h2 className="skills-title">{title}</h2>
        <div className="skills-grid">
            {rows.map((rowData, index) => (
                <SkillsRow key={index} index={index} data={rowData} />
            ))}
        </div>
        </div>
    );
}
