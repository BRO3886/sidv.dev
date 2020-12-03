import React from "react";
import Link from "next/link";
import ContactLink from "../components/ContactLink";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import content from "../lib/content";
import { motion } from "framer-motion";

const Contact = () => {
	return (
		<div>
			<Header />
			<Nav name="contact" />
			<div className="w-10/12 mx-auto flex flex-col h-screen justify-center">
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
				<div>
					<a href={content.resume.file} download>
						<motion.button
							whileHover={{ backgroundColor: "#2B8BFC", color: "#FFFFFF" }}
							whileTap={{ scale: 0.95, backgroundColor: "#2B8BFC", color: "#FFFFFF" }}
							className="bg-lightblue px-16 md:px-20 py-2 md:py-3 mt-20 rounded-lg md:text-lg text-sm text-blue font-medium capitalize focus:outline-none"
						>
							{content.resume.btn}
						</motion.button>
					</a>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Contact;
