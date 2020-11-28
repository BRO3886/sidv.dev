import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";

const projects = () => {
	return (
		<div>
			<Header />
			<Nav />
			<div className="w-10/12 mx-auto flex flex-col">
				<h2 className="text-2xl md:text-5xl font-bold md:mt-10">
					Coming <span className="text-blue">Soon </span>
				</h2>
			</div>
		</div>
	);
};

export default projects;
