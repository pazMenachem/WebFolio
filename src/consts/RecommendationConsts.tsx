const GITHUB_LINK = "https://github.com/pazMenachem";
const LINKEDIN_LINK = "https://www.linkedin.com/in/paz-menachem/";

/**
 * Resolved against Vite's base URL so the link works both in local dev ("/")
 * and on GitHub Pages ("/WebFolio/"). A root-absolute path silently 404s in
 * production, because the site is published under a sub-path.
 */
const RESUME_LINK = `${import.meta.env.BASE_URL}Paz-Menachem-CV-Developer.pdf`;
const MAIL = "Paz.menach@gmail.com";
const PHONE = "+972 53-270-3667";


/**
 * Array of recommendation objects.
 * Each object contains:
 * @property {string} name - The name of the person giving the recommendation.
 * @property {string} recommendation - The text of the recommendation.
 */

const recommendations: {
    name: string;
    recommendation: string;
}[] = [
    {
        name: "Magshimim students",
        recommendation: `“Paz’s teaching wasn’t just professional, but deeply personal… he brought his whole self into the room.”, ` +
        `“He pushed us to think outside the box, to ask tough questions and respond to complex problems.”`
    },
    {
        name: `Eliyahu Froehlich
        Course Coordinator, Principles Course
        Center for Cyber Education`,
        recommendation: `“The feedback we received about Paz was among the highest I’ve ever seen for an instructor.”, “Paz would contribute greatly to any team he joins.”`,
    },
]

export default recommendations;

export {
    GITHUB_LINK,
    LINKEDIN_LINK,
    RESUME_LINK,
    MAIL,
    PHONE,
};
