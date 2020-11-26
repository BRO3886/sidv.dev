import Head from "next/head";
import React from "react";
import ContactLink from "../components/ContactLink";
import Nav from "../components/Nav";
import content from "../content/content";

const Contact = () => {
	return (
		<div>
			<Head>
				<meta charSet="utf-8" />
				<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="theme-color" content="#ffffff" />
				<meta property="og:image" content="/assets/me.jpg"></meta>
				<meta name="description" content="Developer. Designer. Technology Enthusiast." />
				<title>Siddhartha Varma</title>
			</Head>
			<Nav name="contact" />
			<div className="w-10/12 mx-auto flex flex-col">
				<h2 className="text-2xl md:text-5xl font-bold md:mt-10">
					Get in <span className="text-blue">Touch</span>
				</h2>
				<br />
				<div className="text-grey md:mb-4">{"PRIMARY"}</div>
				<div className="space-x-6">
					{content.contact.primary.map((item, index) => {
						return <ContactLink key={index} data={item} />;
					})}
				</div>
				<br />
				<div className="text-grey md:mb-4">{"SOCIAL"}</div>
				<div className="space-x-6">
					{content.contact.social.map((item, index) => {
						return <ContactLink key={index} data={item} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default Contact;
