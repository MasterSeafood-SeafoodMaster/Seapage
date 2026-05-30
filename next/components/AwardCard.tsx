"use client";

import { motion } from "motion/react";

interface AwardCardProps {
	title: string;
	award: string;
	issuer: string;
	date: string;
	category?: string;
	index: number;
}

export default function AwardCard({
	title,
	award,
	issuer,
	date,
	category,
	index,
}: AwardCardProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 16 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{
				duration: 0.4,
				ease: "easeOut",
				delay: index * 0.06,
			}}
			whileHover={{ y: -2 }}
			className="border border-border p-5 transition-colors hover:border-fg"
		>
			<p className="text-xs text-muted">{date}</p>
			<p className={`mt-2 text-sm font-medium text-fg ${category ? "" : ""}`}>
				{award}
			</p>
			<p className="mt-1 text-sm text-fg">{title}</p>
			{category && <p className="mt-0.5 text-xs text-muted">{category}</p>}
			<p className="mt-2 text-xs text-muted">{issuer}</p>
		</motion.div>
	);
}
