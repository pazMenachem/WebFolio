import ReactIcon from "../assets/skills/react.svg";

/**
 * Map of skill categories to arrays of skill objects.
 * Each skill object contains:
 * @property {string} name - The name of the skill.
 * @property {string} icon - The path to the skill's icon.
 */

const skillsData = new Map<string, {name: string, icon: string}[]>([
  ["backend", [
    { name: "Python", icon: ReactIcon },
    { name: "C#", icon: ReactIcon },
    { name: "C++", icon: ReactIcon },
    { name: "JavaScript", icon: ReactIcon },
    { name: "TypeScript", icon: ReactIcon },
    { name: "Docker", icon: ReactIcon },
    { name: "Tailwind", icon: ReactIcon },
    { name: "PostgreSQL", icon: ReactIcon },
    { name: "MongoDB", icon: ReactIcon },
  ]],
  ["frontend", [
    { name: "React", icon: ReactIcon },
    { name: "Python", icon: ReactIcon },
    { name: "C#", icon: ReactIcon },
    { name: "C++", icon: ReactIcon },
    { name: "JavaScript", icon: ReactIcon },
    { name: "TypeScript", icon: ReactIcon },
    { name: "Tailwind", icon: ReactIcon },
    { name: "PostgreSQL", icon: ReactIcon },
    { name: "MongoDB", icon: ReactIcon },
  ]],
  ["tools", [
    { name: "Git", icon: ReactIcon },
    { name: "GitHub", icon: ReactIcon },
    { name: "GitLab", icon: ReactIcon },
    { name: "Docker", icon: ReactIcon },
    { name: "Tailwind", icon: ReactIcon },
    { name: "PostgreSQL", icon: ReactIcon },
    { name: "MongoDB", icon: ReactIcon },
  ]],
  ["other", [
    { name: "Linux", icon: ReactIcon },
    { name: "Windows", icon: ReactIcon },
    { name: "MacOS", icon: ReactIcon },
  ]],
  ["languages", [
    { name: "English", icon: ReactIcon },
    { name: "Spanish", icon: ReactIcon },
    { name: "French", icon: ReactIcon },
    { name: "German", icon: ReactIcon },
    { name: "Italian", icon: ReactIcon },
  ]]
]);

export default skillsData;
