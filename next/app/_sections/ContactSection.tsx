"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { profile } from "@/lib/profile-data";
import { img } from "@/lib/path";
import { Section, SectionHeading } from "./shared";

export default function ContactSection() {
	return (
		<Section id="contact" className="pb-48">
			<SectionHeading>Get in touch</SectionHeading>
			<motion.p
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
				className="mt-3 text-sm text-muted"
			>
				Feel free to reach out on LinkedIn or GitHub
			</motion.p>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
				className="mt-10 flex flex-col gap-3 sm:flex-row"
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
