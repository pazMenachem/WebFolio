import about from "../assets/about.webp";
import ContactMe from "../assets/ContactMe.webp";

/**
 * Array of home data objects.
 * Each object contains:
 * @property {string} image - The path to the image.
 * @property {string} altText - The alt text for the image.
 * @property {string} description - A description for the Slider component.
 */

export const homeData : {image: string, altText: string, description: string}[] = [
    {
        image: about,
        altText: "Paz Menachem",
        description: `Software engineer who moved into security and kept shipping.

        I am the sole IT and security engineer at Copyleaks, an 80-person SaaS company, reporting to the CISO — and I build the
        internal software too. Two systems I wrote end to end are in daily use there: the performance-review platform the whole
        company runs its review cycle through, and the tool the IT and security team runs the day on. Both were in scope for the
        company SOC 2 audit. Alongside that I harden the cloud networks across GCP and Oracle Cloud — firewall rules, network
        policy, least-privilege access.

        Outside work I build things end to end: a home internet filter that blocks domains from inside the Linux kernel, a
        multiplayer trivia game with its own C++ server and wire protocol, and a scheduler that reads job listings with an LLM and
        messages me the matches on Telegram.

        Before Copyleaks I taught C++ and computer networks at Magshimim for two years — 40+ students, preparing them for elite
        IDF cyber units. Two thirds got in.

        My work sits across backend services, DevSecOps and platform tooling, and cloud security — where writing the code,
        securing it and running it are the same job.`
    },
]

export const contactMe = {
    image: ContactMe,
    altText: "Contact Paz Menachem",
}

export default homeData;
