"use client";

import { motion } from "motion/react";
import type { TimelineEntry } from "@/components/Timeline";
import Timeline from "@/components/Timeline";
import { education, experience } from "@/lib/profile-data";
import { Section, SectionHeading } from "./shared";

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

export default function ExperienceSection() {
	return (
		<Section id="experience">
			<SectionHeading>Experience</SectionHeading>
			<motion.p
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
				className="mt-2 text-sm text-muted"
			>
				Education & professional journey
			</motion.p>
			<div className="mt-16">
				<Timeline entries={entries} />
			</div>
		</Section>
	);
}
