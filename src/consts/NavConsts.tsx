/**
 * Navigation links, in the order they appear in the navbar.
 * @property {string} to - The route path.
 * @property {string} label - The visible link text.
 * @property {boolean} [end] - Match the path exactly (used for "/").
 */
const NAV_LINKS: { to: string; label: string; end?: boolean }[] = [
  { to: "/", label: "Home", end: true },
  { to: "/projects", label: "Projects" },
  { to: "/professional", label: "Path" },
  { to: "/skills", label: "Skills" },
];

/**
 * Height of the fixed navbar, in pixels, at each breakpoint.
 * Exported as a CSS custom property so the page offset below the navbar is
 * derived from one number instead of three stacked margin/padding values.
 */
const NAVBAR_HEIGHT_MOBILE = 56;
const NAVBAR_HEIGHT_DESKTOP = 64;

export { NAV_LINKS, NAVBAR_HEIGHT_MOBILE, NAVBAR_HEIGHT_DESKTOP };
