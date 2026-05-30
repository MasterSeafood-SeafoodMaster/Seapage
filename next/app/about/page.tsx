"use client";

import { motion } from "motion/react";
import Logo from "@/components/Logo";
import SkillTag from "@/components/SkillTag";
import { education, profile, skills } from "@/lib/profile-data";

export default function About() {
	return (
		<div className="mx-auto max-w-2xl px-6 py-24">
			<motion.section
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, ease: "easeOut" }}
			>
				<h1 className="text-3xl font-light tracking-tight text-fg">About</h1>
				<p className="mt-6 leading-relaxed text-fg/80">{profile.bio}</p>
			</motion.section>

			<motion.section
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
				className="mt-16"
			>
				<h2 className="text-xl font-light tracking-tight text-fg">Education</h2>
				<div className="mt-6 space-y-6">
					{education.map((item) => (
						<div key={item.school} className="flex items-start gap-3">
							<Logo src={item.logo} alt={item.school} size={40} />
							<div>
								<p className="font-medium text-fg">{item.school}</p>
								<p className="mt-0.5 text-sm text-muted">
									{item.degree} — {item.field}
								</p>
								<p className="text-sm text-muted">{item.period}</p>
							</div>
						</div>
					))}
				</div>
			</motion.section>

			<motion.section
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
				className="mt-16"
			>
				<h2 className="text-xl font-light tracking-tight text-fg">Skills</h2>
				<div className="mt-6 flex flex-wrap gap-2">
					{skills.map((skill, i) => (
						<SkillTag key={skill} name={skill} index={i} />
					))}
				</div>
			</motion.section>
		</div>
	);
}
