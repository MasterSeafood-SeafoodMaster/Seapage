"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About" },
	{ href: "/experience", label: "Experience" },
	{ href: "/awards", label: "Awards" },
	{ href: "/contact", label: "Contact" },
];

export default function Header() {
	const pathname = usePathname();

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md">
			<nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
				<Link
					href="/"
					className="text-sm font-medium tracking-tight text-fg transition-colors hover:text-muted"
				>
					蔡時富
				</Link>
				<ul className="flex items-center gap-6">
					{links.map((link) => {
						const isActive =
							link.href === "/"
								? pathname === "/"
								: pathname.startsWith(link.href);
						return (
							<li key={link.href}>
								<Link
									href={link.href}
									className={`relative text-sm transition-colors ${
										isActive ? "text-fg" : "text-muted hover:text-fg"
									}`}
								>
									{link.label}
									{isActive && (
										<span className="absolute -bottom-1 left-0 right-0 h-px bg-fg" />
									)}
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
}
