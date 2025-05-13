import PythonIcon from "../assets/skills/Python.png";
import CIcon from "../assets/skills/C.png";
import CppIcon from "../assets/skills/C++.png";
import CSharpIcon from "../assets/skills/CSharp.png";
import TypeScriptIcon from "../assets/skills/TypeScript.png";
import PostgresSQLIcon from "../assets/skills/PostgresSQL.png";
import MongoDBIcon from "../assets/skills/MongoDB.png";
import DjangoIcon from "../assets/skills/Django.png";
import NodeJsIcon from "../assets/skills/Node.js.png";
import FastAPIIcon from "../assets/skills/FastAPI.png";
import FlaskIcon from "../assets/skills/Flask.png";
import ReactIcon from "../assets/skills/React.png";
import TailwindIcon from "../assets/skills/Tailwind CSS.png";
import CSSIcon from "../assets/skills/CSS3.png";
import HTMLIcon from "../assets/skills/HTML5.png";
import GitIcon from "../assets/skills/Git.png";
import DockerIcon from "../assets/skills/Docker.png";
import BashIcon from "../assets/skills/Bash.png";
import PostmanIcon from "../assets/skills/Postman.png";
import SeleniumIcon from "../assets/skills/Selenium.png";
import PytestIcon from "../assets/skills/pytest.png";
import LinuxIcon from "../assets/skills/Linux.png";

/**
 * Map of skill categories to arrays of skill objects.
 * Each skill object contains:
 * @property {string} name - The name of the skill.
 * @property {string} icon - The path to the skill's icon.
 * 
 * https://techicons.dev/ for icons
 */

type Skill = { name: string; icon: string };

const skillsData = new Map<string, Skill[]>([
  ["Backend", [
    { name: "Python", icon: PythonIcon },
    { name: "C", icon: CIcon },
    { name: "C++", icon: CppIcon },
    { name: "C#", icon: CSharpIcon},
    { name: "TypeScript", icon: TypeScriptIcon },
    { name: "PostgreSQL", icon: PostgresSQLIcon },
    { name: "MongoDB", icon: MongoDBIcon },
    { name: "Django", icon: DjangoIcon },
    { name: "NodeJs", icon: NodeJsIcon },
    { name: "FastAPI", icon: FastAPIIcon },
    { name: "Flask", icon: FlaskIcon },
  ]],
  ["Frontend", [
    { name: "React", icon: ReactIcon },
    { name: "Tailwind", icon: TailwindIcon },
    { name: "CSS", icon: CSSIcon },
    { name: "HTML", icon: HTMLIcon },
  ]],
  ["Tools", [
    { name: "Git", icon: GitIcon },
    { name: "Docker", icon: DockerIcon },
    { name: "Bash", icon: BashIcon },
  ]],
  ["Testing", [
    { name: "Pytest", icon: PytestIcon },
    { name: "Selenium", icon: SeleniumIcon },
    { name: "Postman", icon: PostmanIcon },
  ]],
  ["Other", [
    { name: "Linux", icon: LinuxIcon },
  ]],
]);

export default skillsData;
