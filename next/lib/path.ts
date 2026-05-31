const basePath = process.env.NODE_ENV === "production" ? "/Seapage" : "";

export function img(path: string): string {
	return `${basePath}${path}`;
}
