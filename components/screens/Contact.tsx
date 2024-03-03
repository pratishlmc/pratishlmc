"use client";
import React, { useRef } from "react";
import { Separator } from "../ui/separator";
import SubmitButton from "../ui/submit-button";
import { toast } from "sonner";
import { sendEmail } from "@/actions/email.action";

function Contact() {
	const emailForm = useRef<HTMLFormElement>(null);
	return (
		<div className="box h-screen w-full bg-neutral-950 bg-grid-white/[0.2] relative flex items-center justify-center">
			{/* Radial gradient for the container to give a faded look */}
			<div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-neutral-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>

			<div className="flex flex-col bg-neutral-50 p-10 rounded-2xl max-w-3xl h-[600px] w-full">
				<div className="flex flex-col gap-2">
					<h1 className="text-3xl font-bold text-neutral-950 uppercase font-sans">
						Contact Me
					</h1>
					<span className="text-neutral-950 font-sans ">
						I&apos;m always looking for new opportunities and projects. If you
						have any questions or would like to get in touch, feel free to
						contact me.
					</span>

					<Separator className="my-3 bg-black" />

					<form
						ref={emailForm}
						action={async (formData: FormData) => {
							toast.promise(sendEmail(formData), {
								loading: "Sending message...",
								success: () => {
									emailForm.current?.reset();
									return "Message sent!";
								},
								error: "Failed to send message",
							});

							// Reset the form
						}}
						className="w-full flex flex-col gap-3 accent-neutral-950"
					>
						<div className="flex flex-col gap-1">
							<label className="text-neutral-950 font-sans text-lg">
								Email
							</label>
							<input
								required
								name="email"
								type="email"
								className="p-2 rounded-sm border border-neutral-950"
							/>
						</div>
						<div className="flex flex-col gap-1">
							<label className="text-neutral-950 font-sans text-lg">
								Subject
							</label>
							<input
								required
								name="subject"
								type="text"
								className="p-2 rounded-sm border border-neutral-950"
							/>
						</div>
						<div className="flex flex-col gap-1">
							<label className="text-neutral-950 font-sans text-lg">
								Message
							</label>
							<textarea
								required
								name="message"
								rows={4}
								className="p-2 rounded-sm border border-neutral-950 resize-none "
							/>
						</div>
						<SubmitButton pendingText="Sending message...">
							Send message
						</SubmitButton>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Contact;
