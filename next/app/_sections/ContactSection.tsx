"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { fadeUp } from "@/lib/animation";
import { img } from "@/lib/path";
import { profile } from "@/lib/profile-data";
import { Section, SectionHeading } from "./shared";

export default function ContactSection() {
	return (
		<Section id="contact" className="pb-48 text-center">
			<SectionHeading>Get in touch</SectionHeading>
			<motion.p
				{...fadeUp}
				transition={{ ...fadeUp.transition, delay: 0.1 }}
				className="mt-3 text-sm text-muted"
			>
				Feel free to reach out on LinkedIn or GitHub
			</motion.p>
			<motion.div
				{...fadeUp}
				transition={{ ...fadeUp.transition, delay: 0.15 }}
				className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
			>
				<a
					href={profile.linkedin}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-3 rounded-full border border-border px-6 py-3 text-sm text-fg transition-colors hover:border-fg"
				>
					<Image
						src={img("/icons/linkedin.svg")}
						alt="LinkedIn"
						width={16}
						height={16}
						className="h-4 w-4"
					/>
					LinkedIn
				</a>
				<a
					href={profile.github}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-3 rounded-full border border-border px-6 py-3 text-sm text-fg transition-colors hover:border-fg"
				>
					<Image
						src={img("/icons/github.svg")}
						alt="GitHub"
						width={16}
						height={16}
						className="h-4 w-4"
					/>
					GitHub
				</a>
			</motion.div>
		</Section>
	);
}
