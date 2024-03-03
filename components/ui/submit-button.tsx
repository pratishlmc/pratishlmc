"use client";
import React from "react";
import { useFormStatus } from "react-dom";

function SubmitButton({
	isPending,
	pendingText,
	children,
}: {
	isPending?: boolean;
	pendingText: string;
	children: React.ReactNode;
}) {
	const { pending } = useFormStatus();

	const loading = isPending || pending;

	return (
		<button
			disabled={loading}
			type="submit"
			className="flex items-center justify-center gap-2 p-2 h-12 font-sans rounded-lg bg-neutral-950 hover:bg-neutral-800 transition-colors duration-200 text-white disabled:cursor-not-allowed "
		>
			{loading && (
				<svg
					className="mr-2 h-4 w-4 animate-spin"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="M21 12a9 9 0 1 1-6.219-8.56" />
				</svg>
			)}

			{loading ? pendingText : children}
		</button>
	);
}

export default SubmitButton;
