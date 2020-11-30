import React from "react";
import content from "../lib/content";

const About = () => {
	return (
		<div className="w-10/12 text-lg mx-auto text-justify md:text-2xl tracking-wide">
			{content.about.map((line, index) => {
				return (
					<p key={index}>
						{line}
						<br />
					</p>
				);
			})}
		</div>
	);
};

export default About;
