import Image from "next/image";

export default function Logo({
	src,
	alt,
	size = 40,
}: {
	src?: string;
	alt: string;
	size?: number;
}) {
	if (src) {
		return (
			<Image
				src={src}
				alt={alt}
				width={size}
				height={size}
				className="rounded object-contain"
			/>
		);
	}

	const initials = alt
		.split(/[\s-]+/)
		.map((w) => w[0])
		.join("")
		.slice(0, 2)
		.toUpperCase();

	return (
		<div
			className="flex items-center justify-center rounded border border-border bg-bg text-xs font-medium text-muted"
			style={{ width: size, height: size }}
		>
			{initials}
		</div>
	);
}
