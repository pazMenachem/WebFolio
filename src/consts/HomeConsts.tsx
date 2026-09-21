import aboutImage from "../assets/about.webp";
import ContactMe from "../assets/ContactMe.webp";

/**
 * The home page introduction.
 *
 * Held as a lead plus separate paragraphs rather than one string: the copy
 * runs to roughly 200 words, and a recruiter scanning it needs somewhere to
 * enter. The wording is unchanged from the approved version - this only says
 * where the breaks fall.
 *
 * @property {string} eyebrow - Small role line above the name.
 * @property {string} name - The page's top-level line.
 * @property {string} lead - The one sentence that carries the rest.
 * @property {string[]} paragraphs - Body copy, one entry per paragraph.
 */
const about = {
    image: aboutImage,
    altText: "Paz Menachem",
    eyebrow: "IT & Security Engineer at Copyleaks — Israel",
    name: "Paz Menachem",
    lead: "I build production software, and I secure the company that runs it.",
    paragraphs: [
        `I am the sole IT and security engineer at Copyleaks, an 80-person SaaS company, reporting to the CISO — and I
        build the internal software too. Two systems I wrote end to end are in daily use there: the performance-review
        platform the whole company runs its review cycle through, and the tool the IT and security team runs the day on.
        Both were in scope for the company SOC 2 audit.`,

        `Alongside that I harden the cloud networks across GCP and Oracle Cloud — firewall rules, network policy,
        least-privilege access.`,

        `Outside work I build things end to end: a home internet filter that blocks domains from inside the Linux kernel,
        a multiplayer trivia game with its own C++ server and wire protocol, and a scheduler that reads job listings with
        an LLM and messages the matches to Telegram.`,

        `Before Copyleaks I taught C++ and computer networks at Magshimim for two years — 40+ students, preparing them
        for elite IDF cyber units. Two thirds got in.`,

        `My work sits across backend services, DevSecOps and platform tooling, and cloud security — where writing the
        code, securing it and running it are the same job.`,
    ],
};

const contactMe = {
    image: ContactMe,
    altText: "Contact Paz Menachem",
};

export { about, contactMe };
export default about;
