"use client";

import { motion } from "motion/react";
import { fadeUp } from "@/lib/animation";

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
			className={`mx-auto flex min-h-[60vh] w-full max-w-3xl lg:max-w-5xl xl:max-w-6xl flex-col justify-center px-6 py-32 ${className}`}
		>
			{children}
		</section>
	);
}

export function SectionHeading({ children }: { children: React.ReactNode }) {
	return (
		<motion.h2
			{...fadeUp}
			className="text-3xl font-light tracking-tight text-fg"
		>
			{children}
		</motion.h2>
	);
}
