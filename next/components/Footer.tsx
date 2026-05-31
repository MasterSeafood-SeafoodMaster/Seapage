export default function Footer() {
	return (
		<footer className="border-t border-border">
			<div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-6 text-sm text-muted">
				<p>&copy; {new Date().getFullYear()} Shih-Fu Tsai</p>
				<div className="flex items-center gap-4">
					<a
						href="https://www.linkedin.com/in/cfouq"
						target="_blank"
						rel="noopener noreferrer"
						className="transition-colors hover:text-fg"
					>
						LinkedIn
					</a>
				</div>
			</div>
		</footer>
	);
}
