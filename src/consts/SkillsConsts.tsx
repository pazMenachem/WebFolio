import {
  FaPython, FaLinux, FaDocker, FaReact, FaCss3Alt, FaHtml5, FaGitAlt,
} from "react-icons/fa";
import {
  SiTypescript, SiGnubash, SiNextdotjs, SiFastify, SiNodedotjs, SiDjango,
  SiFirebase, SiPostgresql, SiSqlite, SiGooglecloud, SiOracle, SiTerraform,
  SiGithubactions, SiKeycloak, SiElastic, SiCloudflare, SiOpenvpn,
  SiAnthropic, SiN8N, SiPytest, SiPostman, SiTailwindcss,
} from "react-icons/si";
import {
  TbCircleLetterCFilled, TbBrandCpp, TbBrandCSharp, TbBrandPowershell,
  TbApi, TbShieldCheck, TbPlugConnected,
} from "react-icons/tb";
import { JSX } from "react";

/**
 * Map of skill categories to arrays of skill objects.
 * Each skill object contains:
 * @property {string} name - The name of the skill.
 * @property {JSX.Element} icon - The skill's icon, from react-icons.
 *
 * Only tooling Paz works with directly is listed here. Concepts that have no
 * meaningful icon (OIDC, SAML, SOC 2 Type II, least-privilege access design)
 * live in the CV and the timeline rather than in this grid. Kubernetes is
 * deliberately absent: it is theoretical on the CV and listing it here
 * without that caveat would overstate it.
 *
 * https://react-icons.github.io/react-icons/
 */

type Skill = { name: string; icon: JSX.Element };

const skillsData = new Map<string, Skill[]>([
  ["Languages", [
    { name: "Python", icon: <FaPython /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "C", icon: <TbCircleLetterCFilled /> },
    { name: "C++", icon: <TbBrandCpp /> },
    { name: "C#", icon: <TbBrandCSharp /> },
    { name: "Bash", icon: <SiGnubash /> },
    { name: "PowerShell", icon: <TbBrandPowershell /> },
  ]],
  ["Backend & Data", [
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Fastify", icon: <SiFastify /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "REST APIs", icon: <TbApi /> },
    { name: "Firestore", icon: <SiFirebase /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "SQLite", icon: <SiSqlite /> },
  ]],
  ["Cloud & Infrastructure", [
    { name: "Google Cloud", icon: <SiGooglecloud /> },
    { name: "Oracle Cloud", icon: <SiOracle /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Terraform", icon: <SiTerraform /> },
    { name: "Linux", icon: <FaLinux /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub Actions", icon: <SiGithubactions /> },
  ]],
  ["Security & Identity", [
    { name: "Keycloak", icon: <SiKeycloak /> },
    { name: "Elastic SIEM", icon: <SiElastic /> },
    { name: "CrowdStrike EDR", icon: <TbShieldCheck /> },
    { name: "Cloudflare", icon: <SiCloudflare /> },
    { name: "OpenVPN", icon: <SiOpenvpn /> },
  ]],
  ["AI Tooling", [
    { name: "Claude Agent SDK", icon: <SiAnthropic /> },
    { name: "MCP", icon: <TbPlugConnected /> },
    { name: "n8n", icon: <SiN8N /> },
  ]],
  ["Frontend", [
    { name: "React", icon: <FaReact /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
  ]],
  ["Testing", [
    { name: "Pytest", icon: <SiPytest /> },
    { name: "Postman", icon: <SiPostman /> },
  ]],
]);

export default skillsData;
export type { Skill };
