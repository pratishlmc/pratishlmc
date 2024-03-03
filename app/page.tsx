import Contact from "@/components/screens/Contact";
import Home from "@/components/screens/Home";
import Skills from "@/components/screens/Skills";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Pratish Lamichhane",
	description: "Pratish Lamichhane's personal website",
};

export default function Page() {
	return (
		<main className=" box-container">
			<Home />
			<Skills />
			<Contact />
		</main>
	);
}
