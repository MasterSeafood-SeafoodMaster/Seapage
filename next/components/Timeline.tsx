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
		(a, b) => parseSortKey(b.period) - parseSortKey(a.period),
	);

	return (
		<div className="relative">
			<div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px sm:-translate-x-1/2 bg-border" />
			<div className="space-y-12">
				{sorted.map((entry, i) => {
					const isLeft = i % 2 === 0;
					return (
						<motion.div
							key={`${entry.title}-${entry.period}`}
							initial={{ opacity: 0, x: isLeft ? -24 : 24 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ margin: "-60px" }}
							transition={{
								duration: 0.5,
								ease: "easeOut",
								delay: i * 0.08,
							}}
							className={`relative flex w-full ${isLeft ? "sm:justify-start" : "sm:justify-end"} justify-start`}
						>
							<div
								className={`flex items-start gap-3 w-full sm:w-[calc(50%-2rem)] ${
									isLeft
										? "sm:flex-row sm:pr-8 sm:text-right"
										: "sm:flex-row-reverse sm:pl-8 sm:text-left"
								} flex-row pl-14 sm:pl-0 text-left`}
							>
								<Logo src={entry.logo} alt={entry.title} size={44} />
								<div className="flex-1 text-left">
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
