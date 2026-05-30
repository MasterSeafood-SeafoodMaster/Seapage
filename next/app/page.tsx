"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="flex flex-1 flex-col items-center justify-center px-6">
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
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}
					className="mt-10 flex gap-4"
				>
					<Link
						href="/experience"
						className="rounded-full bg-fg px-6 py-2.5 text-sm text-bg transition-opacity hover:opacity-80"
					>
						View Experience
					</Link>
					<Link
						href="/about"
						className="rounded-full border border-border px-6 py-2.5 text-sm text-fg transition-colors hover:border-fg"
					>
						About Me
					</Link>
				</motion.div>
			</div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.8, duration: 0.6 }}
				className="absolute bottom-8"
			>
				<motion.div
					animate={{ y: [0, 6, 0] }}
					transition={{
						repeat: Number.POSITIVE_INFINITY,
						duration: 2,
						ease: "easeInOut",
					}}
					className="text-muted"
				>
					↓
				</motion.div>
			</motion.div>
		</div>
	);
}
