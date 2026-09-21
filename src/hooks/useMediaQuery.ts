import { useEffect, useState } from "react";

/**
 * Tracks a CSS media query from React.
 *
 * Used where a layout decision cannot be made in CSS alone - the skills
 * honeycomb has to know how many hexagons go in a row before it can split
 * the list, and that number changes with the viewport.
 */
export default function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(
        () => typeof window !== "undefined" && window.matchMedia(query).matches
    );

    useEffect(() => {
        const list = window.matchMedia(query);
        const onChange = (event: MediaQueryListEvent) => setMatches(event.matches);

        setMatches(list.matches);
        list.addEventListener("change", onChange);

        return () => list.removeEventListener("change", onChange);
    }, [query]);

    return matches;
}
