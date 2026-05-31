export const profile = {
	name: "蔡時富",
	nameEn: "Shih-Fu Tsai",
	title: "Software Engineer @ TSMC",
	tagline: "Building software that bridges research and production",
	bio: "Software engineer at TSMC with a background in neural networks, robotics, and information security research. Experienced in full-stack development, computer vision, and human-machine interfaces. Passionate about turning research ideas into practical, production-ready systems.",
	email: "",
	linkedin: "https://www.linkedin.com/in/cfouq",
	github: "https://github.com/MasterSeafood-SeafoodMaster",
};

export interface EducationItem {
	school: string;
	degree: string;
	field: string;
	period: string;
	location: string;
	logo?: string;
}

export interface ExperienceItem {
	company: string;
	role: string;
	type: string;
	period: string;
	duration: string;
	location: string;
	description: string;
	logo?: string;
}

import { img } from "./path";

export const education: EducationItem[] = [
	{
		school: "National Central University",
		degree: "Master of Science",
		field: "Computer Programming",
		period: "2022 – 2024",
		location: "Taoyuan, Taiwan",
		logo: img("/NCU.svg"),
	},
	{
		school: "National Dong Hwa University",
		degree: "Bachelor of Science",
		field: "Computer / Information Technology Administration and Management",
		period: "2018 – 2022",
		location: "Hualien, Taiwan",
		logo: img("/NDHU.png"),
	},
];

export const experience: ExperienceItem[] = [
	{
		company: "TSMC",
		role: "Software Engineer",
		type: "Full-time",
		period: "2024.10 – Present",
		logo: img("/Tsmc.svg.png"),
		duration: "1 yr 8 mos",
		location: "Hsinchu, Taiwan",
		description: "",
	},
	{
		company: "National Central University",
		role: "Research Assistant",
		type: "Part-time",
		period: "2022.09 – 2024.08",
		logo: img("/NCU.svg"),
		duration: "2 yrs",
		location: "Taoyuan, Taiwan (Hybrid)",
		description:
			"Developed projects related to neural networks and robotics, including body motion detection, object tracking, and human-machine interface. Built an open-source library for baseball strike zone detection. Designed a dynamic painting exhibition controlled by body movements.",
	},
	{
		company: "HPE Aruba Networking",
		role: "Software Engineer Intern",
		type: "Internship",
		period: "2023.07 – 2023.08",
		duration: "2 mos",
		location: "Taipei, Taiwan (Remote)",
		description: "",
		logo: img("/HPE.png"),
	},
	{
		company: "National Dong Hwa University",
		role: "Research Assistant",
		type: "Part-time",
		period: "2019.09 – 2022.07",
		logo: img("/NDHU.png"),
		duration: "2 yrs 11 mos",
		location: "Hualien, Taiwan (Hybrid)",
		description:
			"Developed information security research projects in cooperation with the government. Co-developed a FIDO protocol-based digital ID card service framework using Android Studio and NFC. Used GAN to verify password security and published experimental results as a paper.",
	},
];

export const awards = [
	{
		title: "International ICT Innovative Services Awards 2022",
		award: "Honorable Mention",
		category: "Information Application Group",
		issuer: "Ministry of Digital Affairs",
		date: "2022.11",
	},
	{
		title: "DataStation Data Contest Combination Questions",
		award: "Gold Medal Award",
		issuer: "Institute for Information Industry",
		date: "2021.12",
	},
	{
		title: "International ICT Innovative Services Awards 2021",
		award: "Bronze Medal Award",
		category: "Information Application Group",
		issuer: "Ministry of Digital Affairs",
		date: "2021.12",
	},
	{
		title: "International ICT Innovative Services Awards 2021",
		award: "Judges' Award",
		category: "Information Security Section",
		issuer: "Ministry of Digital Affairs",
		date: "2021.12",
	},
	{
		title: "International ICT Innovative Services Awards 2021",
		award: "Judges' Award",
		category: "Smart Transportation Category",
		issuer: "Ministry of Digital Affairs",
		date: "2021.12",
	},
	{
		title: "NDHU Information Management Graduation Project Competition",
		award: "Gold Medal Award",
		issuer: "NDHU Department of Information Management",
		date: "2021.12",
	},
	{
		title: "Data Innovation Application Competition",
		award: "Gold Medal Award",
		category: "Sightseeing Meteorology Group",
		issuer: "Taipei Computer Association",
		date: "2021.10",
	},
	{
		title: "ITSA Geek Challenge",
		award: "Honorable Mention",
		category: "Interactive Multimedia Design and Integration Application Group",
		issuer: "NCKU CSIE",
		date: "2021.10",
	},
	{
		title: "LINE Chatbot Conversation Robot Design Competition",
		award: "Judges' Award",
		issuer: "LINE PROTOSTAR",
		date: "2021.10",
	},
];

export const skills = [
	"TypeScript",
	"Python",
	"C++",
	"React",
	"Next.js",
	"Android",
	"NFC",
	"GAN",
	"FIDO",
	"Computer Vision",
	"Neural Networks",
	"Node.js",
	"Tailwind CSS",
];
