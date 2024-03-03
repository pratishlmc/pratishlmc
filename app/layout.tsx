"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body style={inter.style} className={"bg-neutral-950"}>
				{children}
				<Toaster position="bottom-right" richColors />
			</body>
		</html>
	);
}
