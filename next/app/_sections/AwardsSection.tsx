"use client";

import { motion } from "motion/react";
import AwardCard from "@/components/AwardCard";
import { awards } from "@/lib/profile-data";
import { Section, SectionHeading } from "./shared";

export default function AwardsSection() {
	return (
		<Section id="awards">
			<SectionHeading>Awards</SectionHeading>
			<motion.p
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
				className="mt-2 text-sm text-muted"
			>
				Honors & recognition
			</motion.p>
			<div className="mt-12 grid gap-4 sm:grid-cols-2">
				{awards.map((award, i) => (
					<AwardCard
						key={`${award.title}-${award.award}-${award.category ?? ""}`}
						title={award.title}
						award={award.award}
						issuer={award.issuer}
						date={award.date}
						category={award.category}
						index={i}
					/>
				))}
			</div>
		</Section>
	);
}
