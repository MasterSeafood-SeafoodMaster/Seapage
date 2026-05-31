"use client";

import { motion, useScroll, useTransform } from "motion/react";

export default function ScrollHint() {
	const { scrollY } = useScroll();
	const opacity = useTransform(scrollY, [0, 300], [1, 0]);
	const y = useTransform(scrollY, [0, 300], [0, 40]);

	return (
		<motion.div
			style={{ opacity, y }}
			className="pointer-events-none fixed bottom-0 left-0 right-0 z-40 flex flex-col items-center pb-6"
		>
			<motion.div
				animate={{ y: [0, 6, 0] }}
				transition={{
					repeat: Number.POSITIVE_INFINITY,
					duration: 2,
					ease: "easeInOut",
				}}
				className="text-sm text-muted"
			>
				↓
			</motion.div>
			<p className="mt-2 text-xs text-muted">
				&copy; {new Date().getFullYear()} Shih-Fu Tsai
			</p>
		</motion.div>
	);
}
