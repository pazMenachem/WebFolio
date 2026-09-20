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
        internal software too. Two platforms I wrote end to end are in daily production use, one of them across the whole company,
        and both were in scope for the company's SOC 2 audit. Alongside that I harden cloud networks across GCP and Oracle Cloud:
        firewall rules, network policy and least-privilege access.

        Before Copyleaks I taught C++ and computer networks at Magshimim for two years, preparing 40+ students for elite IDF cyber
        units — two thirds of them were accepted. I wrote a Linux kernel module in C that filters traffic at the packet level, and
        I build with the Claude Agent SDK and MCP.

        What I am looking for: backend software engineering, or DevSecOps and platform work — where writing the code, securing it
        and running it are the same job.`
    },
]

export const contactMe = {
    image: ContactMe,
    altText: "Contact Paz Menachem",
}

export default homeData;
