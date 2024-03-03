"use server";

import { parseDate } from "@/lib/parseDate";
import nodemailer from "nodemailer";

export async function sendEmail(formData: FormData) {
	const email = formData.get("email") as string;
	const subject = formData.get("subject") as string;
	const message = formData.get("message") as string;

	const transporter = nodemailer.createTransport({
		host: process.env.MAIL_HOST!.toString(),
		port: 465,
		secure: true,
		auth: {
			user: process.env.MAIL_USER!.toString(),
			pass: process.env.MAIL_PASS!.toString(),
		},
	});

	transporter.verify(function (error, success) {
		if (error) {
			return "Can't send message. Please try again later.";
		}
	});

	const status = await transporter.sendMail({
		from: email,
		to: "contact@pratishlmc.me",
		subject: subject,
		html: `<style>
		    body {
		      font-family: Arial, sans-serif;
		      background-color: #f4f4f4;
		      margin: 0;
		      padding: 0;
		    }
		    .container {
		      max-width: 600px;
		      margin: 20px auto;
		      padding: 20px;
		      background-color: #fff;
		      border-radius: 8px;
		      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		    }
		    p {
		      color: #666;
		      font-size: 16px;
		      line-height: 1.6;
		    }
		  </style>
		</head>

		<body>
		  <div class="container">
		    <p>${parseDate(new Date().toString())}</p>
		    <h3>New message from,</h3>
				<h5>${email}</h5>
				<br/>
				<p>Message,</p>
		    <p>${message}</p>
		  </div>
		</body>
		    `,
	});

	if (status.accepted.length > 0) {
		await transporter.sendMail({
			from: "Pratish Lamichhane <contact@pratishlmc.me>",
			to: email,
			subject: "Received your message",
			html: `<style>
	    /* Styles for the email */
	    body {
	      font-family: Arial, sans-serif;
	      background-color: #f4f4f4;
	      margin: 0;
	      padding: 0;
	    }

	    .container {
	      max-width: 600px;
	      margin: 20px auto;
	      padding: 20px;
	      background-color: #fff;
	      border-radius: 8px;
	      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	    }

	    h1 {
	      color: #333;
	      text-align: center;
	    }

	    p {
	      color: #666;
	      font-size: 16px;
	      line-height: 1.6;
	    }

	    .signature {
	      text-align: center;
	      margin-top: 30px;
	      font-style: italic;
	      color: #999;
	    }
	  </style>
	</head>
	<body>
	  <div class="container">
	    <h1>Thank You for Your Message!</h1>
	    <h3>Hey there 👋🏻,</h3>
	    <p>Thank you for reaching out. Your message has been received and appreciated. I'll get back to you as soon as
	      possible.</p>
	    <p>Best regards,</p>
	    <p>Prameshwar Paswan</p>
	  </div>
	</body>
	    `,
		});
		return "Message sent successfully!";
	}

	return "Couldn't send message.";
}
