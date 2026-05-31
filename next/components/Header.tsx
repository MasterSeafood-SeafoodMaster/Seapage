"use client";

import { useEffect, useState } from "react";

const sections = [
	{ id: "hero", label: "Home" },
	{ id: "about", label: "About" },
	{ id: "experience", label: "Experience" },
	{ id: "awards", label: "Awards" },
	{ id: "contact", label: "Contact" },
];

export default function Header() {
	const [active, setActive] = useState("hero");

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						setActive(entry.target.id);
					}
				}
			},
			{ rootMargin: "-40% 0px -55% 0px" },
		);

		for (const { id } of sections) {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		}

		return () => observer.disconnect();
	}, []);

	const scrollTo = (id: string) => {
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md">
			<nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
				<button
					type="button"
					onClick={() => scrollTo("hero")}
					className="flex h-8 w-8 items-center justify-center border border-fg text-xs font-medium text-fg transition-colors hover:bg-fg hover:text-bg"
				>
					ST
				</button>
				<ul className="flex items-center gap-6">
					{sections.map((section) => (
						<li key={section.id}>
							<button
								type="button"
								onClick={() => scrollTo(section.id)}
								className={`relative text-sm transition-colors ${
									active === section.id ? "text-fg" : "text-muted hover:text-fg"
								}`}
							>
								{section.label}
								{active === section.id && (
									<span className="absolute -bottom-1 left-0 right-0 h-px bg-fg" />
								)}
							</button>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
