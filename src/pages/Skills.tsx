import SkillsGrid from "../components/SkillsGrid";
import skillsData from "../consts/SkillsConsts";
import { JSX } from "react";

export default function Skills(): JSX.Element {
    return (
        <>
            {Array.from(skillsData.keys()).map((key) => (
            <SkillsGrid key={key} title={key} data={skillsData.get(key) ?? []} />
            ))}
        </>
    );
}
