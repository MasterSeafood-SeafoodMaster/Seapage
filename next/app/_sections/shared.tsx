"use client";

import { motion } from "motion/react";

export function Section({
	id,
	children,
	className = "",
}: {
	id: string;
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<section
			id={id}
			className={`mx-auto flex min-h-[60vh] w-full max-w-3xl flex-col justify-center px-6 py-32 ${className}`}
		>
			{children}
		</section>
	);
}

export function SectionHeading({ children }: { children: React.ReactNode }) {
	return (
		<motion.h2
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, ease: "easeOut" }}
			className="text-3xl font-light tracking-tight text-fg"
		>
			{children}
		</motion.h2>
	);
}
