import { useState } from "react";

/* ------------------------------------ */

// Хук медиа запроса

interface IMatchMedia {
	breakpoint: number;
	type: "max" | "min";
}

export const useMatchMedia = ({ breakpoint, type }: IMatchMedia): boolean => {
	const matchMedia = window.matchMedia(`(${type}-width: ${breakpoint}px)`);

	const [reached, setReached] = useState<boolean>(matchMedia.matches);

	matchMedia.addEventListener("change", (e) => {
		setReached(e.matches);
	});

	return reached;
};

/* ------------------------------------ */
