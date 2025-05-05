export const GITHUB_LINK = "https://github.com/shlomogoldman";
export const LINKEDIN_LINK = "https://www.linkedin.com/in/shlomogoldman/";

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
        name: "Example",
        recommendation: `"Example recommendation"`,
    },
    {
        name: "Fiancee",
        recommendation: `"Dont you ever pick my nose again!!!"`,
    },
    {
        name: "Tirza the cat",
        recommendation: `"He gives nice food."`,
    },
    {
        name: "Shlomo",
        recommendation: `"he's ok"`,
    },
    {
        name: "Grandma",
        recommendation: `"Truley handsome and brilliant man!"`,
    },
    {
        name: "Example",
        recommendation: `"Really Really Really Really Long Recommendation 
            Really Really Really Really Long Recommendation
            Really Really Really Really Long Recommendation
            Really Really Really Really Long Recommendation
            Really Really Really Really Long Recommendation
            Really Really Really Really Long Recommendation
            Really Really Really Really Long Recommendation"`,
    },
]

export default recommendations;
