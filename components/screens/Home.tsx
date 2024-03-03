"use client";
import React from "react";
import { Spotlight } from "../Spotlight";
import { MyImage } from "../Image";
import { MovingBorder } from "../moving-border";
import { BackgroundBeams } from "../background";

function Home() {
	const sections = ["Skills", "Experience", "Projects", "Contact"];

	function scrollToView(sectionId: string) {
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	}

	return (
		<section className="box relative  h-screen flex flex-col items-center justify-center antialiased">
			<Spotlight
				className="-top-40 left-0 md:left-60 md:-top-20"
				fill="white"
			/>
			<div className="flex flex-col items-center gap-4 max-w-2xl mx-auto p-4">
				<div className="z-10 flex gap-10 items-center">
					<div className="flex flex-col gap-8 z-10 ">
						{sections.map((section, index) => (
							<span
								onClick={() => {
									scrollToView(section.toLowerCase());
								}}
								key={index}
								className="transition-all duration-500 cursor-pointer text-neutral-400 text-right font-sans font-medium hover:underline hover:text-neutral-300 underline-offset-4 text-lg"
							>
								{section}
							</span>
						))}
					</div>

					<div className="relative p-[3px] overflow-hidden rounded-lg h-[350px] w-[350px]">
						<MyImage
							className="rounded-lg p-1 z-10"
							imageUrl={"https://pratishlmc.vercel.app/assets/profile.jpg"}
						>
							<p className="font-bold font-sans text-xl">pratishlmc</p>
							<p className="font-normal text-sm">Kathmandu, Nepal</p>
						</MyImage>
						<MovingBorder duration={30000} rx="5%" ry="5%">
							<div className="z-20 h-32 w-32  bg-[radial-gradient(var(--neutral-400)_30%,transparent_70%)] " />
						</MovingBorder>
					</div>
				</div>
				<h1 className="relative mt-4 z-10 text-2xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
					Pratish Lamichhane
				</h1>
				<p className="text-neutral-400 max-w-lg mx-auto text-sm text-left relative z-10">
					I like building solid and ascendible frontend products with
					substancial user experiences.
				</p>
			</div>

			<BackgroundBeams />
		</section>
	);
}

export default Home;
