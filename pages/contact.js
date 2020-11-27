import React from "react";
import Link from "next/link";
import ContactLink from "../components/ContactLink";
import Header from "../components/Header";
import Nav from "../components/Nav";
import content from "../content/content";

const Contact = () => {
	return (
		<div>
			<Header />
			<Nav name="contact" />
			<div className="w-10/12 mx-auto flex flex-col">
				<h2 className="text-2xl md:text-5xl font-bold md:mt-10">
					Get in <span className="text-blue">Touch</span>
				</h2>
				<br />
				<div className="text-darkgrey font-semibold md:mb-4">{"PRIMARY"}</div>
				<div className="space-x-6">
					{content.contact.primary.map((item, index) => {
						return <ContactLink key={index} data={item} />;
					})}
				</div>
				<br />
				<div className="text-darkgrey font-semibold md:mb-4">{"SOCIAL"}</div>
				<div className="space-x-6">
					{content.contact.social.map((item, index) => {
						return <ContactLink key={index} data={item} />;
					})}
				</div>
				{/* <div className="absolute inset-x-50 bottom-0 mb-4 md:mb-6">
					<button className="bg-lightblue px-5 md:px-10 py-2 md:py-3 mt-20 rounded-lg md:text-lg text-sm text-blue font-medium capitalize hover:bg-blue hover:text-white  border border-transparent">
						{"DOWNLOAD RESUME"}
					</button>
				</div> */}
			</div>
		</div>
	);
};

export default Contact;
