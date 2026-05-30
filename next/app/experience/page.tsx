"use client";

import { motion } from "motion/react";
import type { TimelineEntry } from "@/components/Timeline";
import Timeline from "@/components/Timeline";
import { education, experience } from "@/lib/profile-data";

const entries: TimelineEntry[] = [
	...education.map((e) => ({
		title: e.school,
		subtitle: `${e.degree} — ${e.field}`,
		period: e.period,
		logo: e.logo,
		type: "education" as const,
	})),
	...experience.map((e) => ({
		title: e.role,
		subtitle: e.company,
		period: e.period,
		description: e.description || undefined,
		logo: e.logo,
		type: "work" as const,
	})),
];

export default function Experience() {
	return (
		<div className="mx-auto max-w-3xl px-6 py-24">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, ease: "easeOut" }}
			>
				<h1 className="text-3xl font-light tracking-tight text-fg">
					Experience
				</h1>
				<p className="mt-2 text-sm text-muted">
					Education & professional journey
				</p>
			</motion.div>

			<div className="mt-16">
				<Timeline entries={entries} />
			</div>
		</div>
	);
}
