"use client";

import { motion } from "motion/react";
import AwardCard from "@/components/AwardCard";
import { awards } from "@/lib/profile-data";

export default function Awards() {
	return (
		<div className="mx-auto max-w-2xl px-6 py-24">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, ease: "easeOut" }}
			>
				<h1 className="text-3xl font-light tracking-tight text-fg">Awards</h1>
				<p className="mt-2 text-sm text-muted">Honors & recognition</p>
			</motion.div>

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
		</div>
	);
}
