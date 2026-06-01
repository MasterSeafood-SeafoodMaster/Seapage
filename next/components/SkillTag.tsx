"use client";

import { motion } from "motion/react";

export default function SkillTag({
	name,
	index = 0,
}: {
	name: string;
	index?: number;
}) {
	return (
		<motion.span
			initial={{ opacity: 0, y: 12 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{
				duration: 0.4,
				ease: "easeOut",
				delay: index * 0.05,
				type: "spring",
				stiffness: 200,
				damping: 20,
			}}
			className="inline-block rounded-full border border-border px-4 py-1.5 text-sm text-fg transition-colors hover:border-fg"
		>
			{name}
		</motion.span>
	);
}
