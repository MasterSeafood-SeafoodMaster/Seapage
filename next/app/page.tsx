"use client";

import ScrollHint from "@/components/ScrollHint";
import AboutSection from "./_sections/AboutSection";
import AwardsSection from "./_sections/AwardsSection";
import ContactSection from "./_sections/ContactSection";
import ExperienceSection from "./_sections/ExperienceSection";
import HeroSection from "./_sections/HeroSection";

export default function Home() {
	return (
		<div className="flex flex-col">
			<HeroSection />
			<ScrollHint />
			<AboutSection />
			<ExperienceSection />
			<AwardsSection />
			<ContactSection />
		</div>
	);
}
