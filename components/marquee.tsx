import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

export default function MarqueeContainer({
	direction,
	images,
}: {
	direction: "left" | "right";
	images: string[];
}) {
	return (
		<Marquee pauseOnHover direction={direction} className="mt-14">
			{images?.map((el, idx) => (
				<Image
					src={el}
					className="mx-16 h-12 w-12 object-cover object-center saturate-0 transition-all duration-150 hover:saturate-100"
					width={"200"}
					height={"200"}
					alt="thumbnail"
					key={idx}
				/>
			))}
		</Marquee>
	);
}
