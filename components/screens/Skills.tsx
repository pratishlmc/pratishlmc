"use client";
import React from "react";
import { LampContainer } from "../lamp";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import MarqueeContainer from "../marquee";

function Skills() {
	const marqueeVariants = {
		animate: {
			x: [0, -1035],
			transition: {
				x: {
					repeat: Infinity,
					repeatType: "loop",
					duration: 20,
					ease: "linear",
				},
			},
		},
	};
	return (
		<>
			<div
				id="skills"
				className="box relative h-screen w-full flex flex-col py-10 items-center justify-center scroll-smooth"
			>
				<LampContainer />

				<div className="absolute bg-transparent top-20 flex flex-col justify-center items-center px-5">
					<h1 className="text-4xl font-bold text-neutral-300 uppercase">
						Skills
					</h1>
					<span className="max-w-xl mt-10 text-neutral-400 text-lg text-center">
						Skilled in React.js, React Native, and Django, with a focus on
						frontend and intermediate level backend development. Particularly
						adept at <strong>Next.js</strong>, delivering optimal performance
						and user experiences for web and mobile applications
					</span>
					<div className="flex flex-col gap-20 max-w-7xl justify-center items-center mt-16">
						<MarqueeContainer direction="left" images={frameworks} />
						<MarqueeContainer direction="right" images={tools} />
						<MarqueeContainer direction="left" images={languages} />
					</div>
				</div>
			</div>
		</>
	);
}

export default Skills;

const tools = [
	"https://img.icons8.com/color/48/git.png",

	"https://img.icons8.com/color/48/github.png",

	"https://img.icons8.com/color/48/docker.png",

	"https://img.icons8.com/color/48/heroku.png",

	"https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-color-tal-revivo.png",

	"https://img.icons8.com/color/48/mongodb.png",
	"https://img.icons8.com/color/48/tailwindcss.png",
	"https://img.icons8.com/color/48/notion.png",
	"https://img.icons8.com/color/48/amazon-web-services.png",
	"https://img.icons8.com/color/48/graphql.png",
];

const frameworks = [
	"https://img.icons8.com/color/48/nextjs.png",

	"https://img.icons8.com/color/48/react-native.png",

	"https://img.icons8.com/color/48/django.png",

	"https://img.icons8.com/doodle/48/svetle.png",

	"https://img.icons8.com/color/48/wordpress.png",

	"https://img.icons8.com/color/48/firebase.png",
	"https://img.icons8.com/color/48/figma.png",
];

const languages = [
	"https://img.icons8.com/color/48/python.png",
	"https://img.icons8.com/color/48/javascript.png",
	"https://img.icons8.com/color/48/typescript.png",

	"https://img.icons8.com/color/48/docker.png",

	"https://img.icons8.com/color/48/heroku.png",

	"https://img.icons8.com/color/48/nodejs.png",

	"https://img.icons8.com/color/48/postgreesql.png",

	"https://img.icons8.com/color/48/mysql-logo.png",
];
