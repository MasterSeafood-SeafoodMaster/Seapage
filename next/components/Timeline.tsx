"use client";

import { motion } from "motion/react";
import Logo from "@/components/Logo";

export interface TimelineEntry {
	title: string;
	subtitle: string;
	period: string;
	description?: string;
	logo?: string;
	type: "education" | "work";
}

function parseSortKey(period: string): number {
	const match = period.match(/(\d{4})(?:\.(\d{2}))?/);
	if (!match) return 0;
	const year = Number.parseInt(match[1], 10);
	const month = match[2] ? Number.parseInt(match[2], 10) : 6;
	return year + month / 12;
}

export default function Timeline({ entries }: { entries: TimelineEntry[] }) {
	const sorted = [...entries].sort(
		(a, b) => parseSortKey(a.period) - parseSortKey(b.period),
	);

	return (
		<div className="relative">
			<div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-border" />
			<div className="space-y-12">
				{sorted.map((entry, i) => {
					const isLeft = i % 2 === 0;
					return (
						<motion.div
							key={`${entry.title}-${entry.period}`}
							initial={{ opacity: 0, x: isLeft ? -24 : 24 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, margin: "-60px" }}
							transition={{
								duration: 0.5,
								ease: "easeOut",
								delay: i * 0.08,
							}}
							className={`relative flex w-full ${isLeft ? "justify-start" : "justify-end"}`}
						>
							<div
								className={`flex w-[calc(50%-2rem)] items-start gap-3 ${
									isLeft
										? "flex-row pr-8 text-right"
										: "flex-row-reverse pl-8 text-left"
								}`}
							>
								<Logo src={entry.logo} alt={entry.title} size={44} />
								<div
									className={`flex-1 ${isLeft ? "text-right" : "text-left"}`}
								>
									<p className="text-xs text-muted">{entry.period}</p>
									<p className="mt-1 font-medium text-fg">{entry.title}</p>
									<p className="text-sm text-fg/70">{entry.subtitle}</p>
									{entry.description && (
										<p className="mt-2 text-sm leading-relaxed text-muted">
											{entry.description}
										</p>
									)}
								</div>
							</div>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
}
