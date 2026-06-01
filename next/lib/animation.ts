import type { Transition } from "motion/react";

export const fadeUp = {
	initial: { opacity: 0, y: 20 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: false },
	transition: { duration: 0.5, ease: "easeOut" } as Transition,
};
