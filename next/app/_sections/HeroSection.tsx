"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function HeroSection() {
	return (
		<section
			id="hero"
			className="flex min-h-svh flex-col items-center justify-center px-6"
		>
			<div className="flex flex-col items-center text-center">
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
				>
					<Image
						src="/photo.jfif"
						alt="蔡時富"
						width={120}
						height={120}
						className="rounded-full object-cover"
						priority
					/>
				</motion.div>
				<motion.h1
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
					className="mt-6 text-5xl font-light tracking-tight text-fg sm:text-6xl"
				>
					蔡時富
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
					className="mt-4 text-lg text-muted sm:text-xl"
				>
					Software Engineer @ TSMC
				</motion.p>
				<motion.p
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
					className="mt-2 max-w-md text-sm text-muted"
				>
					Building software that bridges research and production
				</motion.p>
			</div>
		</section>
	);
}
