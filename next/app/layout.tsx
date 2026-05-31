import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "蔡時富 | Software Engineer",
	description:
		"Personal profile of 蔡時富 (Shih-Fu Tsai) — Software Engineer at TSMC",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
		>
			<body className="flex min-h-full flex-col bg-bg text-fg">
				<Header />
				<main className="flex flex-1 flex-col">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
