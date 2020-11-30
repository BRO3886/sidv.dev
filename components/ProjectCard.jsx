import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProjectCard = (props) => {
	return (
		<a href={props.project.github}>
			<div className="bg-white rounded-xl p-4 transition-shadow duration-400 hover:shadow-xl border-opacity-100 border hover:border-transparent">
				<h1 className="text-lg md:text-xl lg:text-2xl font-bold">{props.project.title}</h1>
				<p className="text-darkgrey py-1">{props.project.subtitle}</p>
				<a href={props.project.redirect}>
					<LazyLoadImage
						src={props.project.img}
						alt={props.project.title}
						className="my-2 rounded-md"
					/>
				</a>
				<div className="flex justify-between">
					<a href={props.project.github}>
						<img src="assets/contact/Github.svg" className="h-6 md:h-8"></img>
					</a>
				</div>
			</div>
		</a>
	);
};

export default ProjectCard;
