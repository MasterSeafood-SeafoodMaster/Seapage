"use client";

import { motion } from "motion/react";
import Logo from "@/components/Logo";
import SkillTag from "@/components/SkillTag";
import { fadeUp } from "@/lib/animation";
import { education, profile, skills } from "@/lib/profile-data";
import { Section, SectionHeading } from "./shared";

export default function AboutSection() {
	return (
		<Section id="about">
			<SectionHeading>About</SectionHeading>
			<motion.p
				{...fadeUp}
				transition={{ ...fadeUp.transition, delay: 0.1 }}
				className="mt-6 leading-relaxed text-fg/80"
			>
				{profile.bio}
			</motion.p>

			<motion.h3
				{...fadeUp}
				transition={{ ...fadeUp.transition, delay: 0.15 }}
				className="mt-12 text-xl font-light tracking-tight text-fg"
			>
				Education
			</motion.h3>
			<div className="mt-6 space-y-6">
				{education.map((item) => (
					<motion.div
						key={item.school}
						{...fadeUp}
						transition={{ duration: 0.4, ease: "easeOut" }}
						className="flex items-start gap-3"
					>
						<Logo src={item.logo} alt={item.school} size={40} />
						<div>
							<p className="font-medium text-fg">{item.school}</p>
							<p className="mt-0.5 text-sm text-muted">
								{item.degree} — {item.field}
							</p>
							<p className="text-sm text-muted">{item.period}</p>
						</div>
					</motion.div>
				))}
			</div>

			<motion.h3
				{...fadeUp}
				transition={{ ...fadeUp.transition, delay: 0.2 }}
				className="mt-12 text-xl font-light tracking-tight text-fg"
			>
				Skills
			</motion.h3>
			<div className="mt-6 flex flex-wrap gap-2">
				{skills.map((skill, i) => (
					<SkillTag key={skill} name={skill} index={i} />
				))}
			</div>
		</Section>
	);
}
