import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import content from "../content/content";

const projects = () => {
	return (
		<div>
			<Header />
			<Nav name="projects" />
			<div className="w-10/12 mt-20  md:mt-32 mx-auto flex flex-col">
				<h2 className="text-2xl md:text-5xl font-bold my-1">
					My <span className="text-blue">Projects</span>
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
					{content.projects.map((project, index) => {
						return <ProjectCard project={project} key={index}/>;
					})}
				</div>
			</div>
			<div style={{ height: "10vh" }}></div>
			<Footer />
		</div>
	);
};

export default projects;
